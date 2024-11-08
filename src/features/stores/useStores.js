import { useQuery } from '@tanstack/react-query';
import { getStores } from '../../services/apiStores';

export function useStores() {
  const {
    isPending,
    data: stores,
    error,
  } = useQuery({
    queryKey: ['stores'],
    queryFn: getStores,
  });

  return { isPending, stores, error };
}
