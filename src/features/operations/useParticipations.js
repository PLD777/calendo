import { useQuery } from '@tanstack/react-query';
import { getParticipationsByStoreId } from '../../services/apiParticipations';
import { useOperation } from './useOperation';

export function useParticipations() {
  const { operation } = useOperation();

  const {
    isPending,
    data: participations,
    error,
  } = useQuery({
    queryKey: ['participations', operation?.storeId],
    queryFn: () => getParticipationsByStoreId(operation.storeId),
  });

  return { isPending, participations, error };
}
