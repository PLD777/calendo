import supabase, { supabaseUrl } from './supabase';

export async function getOperations() {
  const { data, error } = await supabase
    .from('operations')
    .select('*, stores(*)');

  if (error) {
    console.error(error);
    throw new Error('Error while fetching operations');
  }

  return data;
}

export async function getOperation(id) {
  if (!id) return {};

  const { data, error } = await supabase
    .from('operations')
    .select('*, stores(*)')
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('An error occurred while fetching operation');
  }

  return data[0];
}

export async function createOperation({ newOperation }) {
  const files = Object.entries(newOperation).filter(([key]) => {
    return key.startsWith('mediaLoot') || key.startsWith('mediaBlock');
  });

  async function uploadFiles(files) {
    const filePaths = [];

    for (const [key, fileList] of files) {
      if (fileList.length === 0 || !fileList[0]) {
        // if there is no file, we push a null path
        filePaths.push({ key, path: null });
        continue;
      }

      const file = fileList[0];
      const imageName = `${Math.random()}-${key}`.replaceAll('/', '');
      const imagePath = `${supabaseUrl}/storage/v1/object/public/operations-images/${imageName}`;

      // Upload the file to the storage bucket
      const { error: storageError } = await supabase.storage
        .from('operations-images')
        .upload(imageName, file);

      if (storageError) {
        console.error(`Error uploading ${file}:`, storageError);
      }

      filePaths.push({ key, path: imagePath });
    }
    return filePaths;
  }

  const transformOperation = async () => {
    const filePaths = await uploadFiles(files);

    // Transformation finale de `newOperation` avec les nouveaux pathnames
    const transformedOperation = Object.keys(newOperation).reduce(
      (acc, key) => {
        // On cherche le pathname correspondant dans `filePaths`
        const filePathEntry = filePaths.find((file) => file.key === key);

        if (filePathEntry) {
          // Si un path existe, on l'utilise, sinon on garde null
          acc[key] = filePathEntry.path;
        } else {
          // Pour les autres propriétés, on garde les valeurs originales
          acc[key] = newOperation[key];
        }

        return acc;
      },
      {}
    );

    return transformedOperation;
  };

  const transformedNewOperation = await transformOperation();

  const query = supabase.from('operations').insert(transformedNewOperation);
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Operation could not be created');
  }

  return data;
}

export async function editOperation(editedOperation, id, operation) {
  const filePaths = [];

  const files = Object.entries(editedOperation).filter(([key]) => {
    return key.startsWith('mediaLoot') || key.startsWith('mediaBlock');
  });

  for (const [key, fileList] of files) {
    if (fileList.length === 0 || !fileList[0]) {
      // if there is no file, we push the original path
      filePaths.push({ key, path: operation[key] });
      continue;
    }

    const file = fileList[0];
    const imageName = `${Math.random()}-${key}`.replaceAll('/', '');
    const imagePath = `${supabaseUrl}/storage/v1/object/public/operations-images/${imageName}`;

    // Upload the file to the storage bucket
    const { error: storageError } = await supabase.storage
      .from('operations-images')
      .upload(imageName, file);

    if (storageError) {
      console.error(`Error uploading ${file}:`, storageError);
    }

    filePaths.push({ key, path: imagePath });
  }

  filePaths.forEach((file) => {
    editedOperation[file.key] = file.path;
  });

  const { data, error } = await supabase
    .from('operations')
    .update(editedOperation)
    .eq('id', id)
    .select();

  if (error) {
    console.error(error);
    throw new Error('Operation could not be edited');
  }

  return data;
}

export async function deleteOperation(id) {
  const { error } = await supabase.from('operations').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Operation could not be deleted');
  }
}
