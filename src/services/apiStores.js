import supabase from './supabase';

export async function getStores() {
  const { data, error } = await supabase.from('stores').select('*');

  if (error) {
    console.error(error);
    throw new Error('An error occurred while fetching stores');
  }

  return data;
}

export async function getStore(id) {
  if (!id) return {};

  const { data, error } = await supabase
    .from('stores')
    .select('*')
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('An error occurred while fetching store');
  }

  return data[0];
}

export async function createStore({ newStore }) {
  let type;
  if (newStore.type === 'E.Leclerc') type = 'lec';
  if (newStore.type === 'Super U') type = 'su';
  if (newStore.type === 'Hyper U') type = 'hu';
  if (newStore.type === 'Carrefour market') type = 'crf';

  const operationLink = `${type}-${newStore.city
    .split(/[\s-]/)[0]
    .toLowerCase()}-011224`;

  const { data, error } = await supabase
    .from('stores')
    .insert({ ...newStore, operationLink })
    .select();

  if (error) {
    console.error(error);
    throw new Error('Store could not be created');
  }

  return data;
}

export async function editStore(editedStore, storeId) {
  const { data, error } = await supabase
    .from('stores')
    .update(editedStore)
    .eq('id', storeId)
    .select();

  if (error) {
    console.error(error);
    throw new Error('Store could not be edited');
  }

  return data;
}

export async function deleteStore(id) {
  const { error } = await supabase.from('stores').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Store could not be deleted');
  }
}

export async function getStoreByLink(operationLink) {
  if (!operationLink) return {};

  const { data, error } = await supabase
    .from('stores')
    .select('*, operations(*)')
    .eq('operationLink', operationLink);

  if (error) {
    console.error(error);
    throw new Error('An error occurred while fetching operation');
  }

  return data[0];
}
