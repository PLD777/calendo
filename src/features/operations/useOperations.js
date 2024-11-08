import { useQuery } from '@tanstack/react-query';
import { getOperations } from '../../services/apiOperations';

export function useOperations() {
  const {
    isPending,
    data: operations,
    error,
  } = useQuery({
    queryKey: ['operations'],
    queryFn: getOperations,
  });

  return { isPending, operations, error };
}
