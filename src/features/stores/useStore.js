import { useQuery } from '@tanstack/react-query';
import { getStore } from '../../services/apiStores';
import { useParams } from 'react-router-dom';

export function useStore() {
  const { storeId } = useParams();

  const {
    isPending,
    data: store,
    error,
  } = useQuery({
    queryKey: ['store', storeId],
    queryFn: () => getStore(storeId),
    retry: false,
  });

  return { isPending, store, error };
}
