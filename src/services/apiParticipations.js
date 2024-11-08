import supabase from './supabase';

export async function getViewsByStoreId(storeId) {
  const { data, error } = await supabase
    .from('views')
    .select('id')
    .eq('storeId', storeId);

  if (error) {
    console.error(error);
    throw new Error("Views couldn't be fetched");
  }

  return data;
}

export async function getParticipationsByStoreId(storeId) {
  const { data, error } = await supabase
    .from('participations')
    .select()
    .eq('storeId', storeId);

  if (error) {
    console.error(error);
    throw new Error("Participations couldn't be fetched");
  }

  return data;
}

export async function createParticipation({ newParticipation }) {
  const { data, error } = await supabase
    .from('participations')
    .insert(newParticipation)
    .select();

  if (error) {
    console.error(error);
    if (error.code === '23505') {
      throw new Error('Vous avez déjà participé');
    }
    throw new Error("La participation n'a pas pu être enregistrée");
  }

  return data;
}

export async function createView(storeId) {
  {
    const { data, error } = await supabase
      .from('views')
      .insert({ storeId })
      .select();

    if (error) {
      console.error(error);
      throw new Error("The view couldn't be created");
    }

    return data;
  }
}
