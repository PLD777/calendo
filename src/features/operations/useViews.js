import { useQuery } from '@tanstack/react-query';
import { getViewsByStoreId } from '../../services/apiParticipations';
import { useOperation } from './useOperation';

export function useViews() {
  const { operation } = useOperation();

  const {
    isPending,
    data: views,
    error,
  } = useQuery({
    queryKey: ['views', operation?.storeId],
    queryFn: () => getViewsByStoreId(operation.storeId),
  });

  return { isPending, views, error };
}
