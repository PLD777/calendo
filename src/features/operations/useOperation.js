import { useQuery } from '@tanstack/react-query';
import { getOperation } from '../../services/apiOperations';
import { useParams } from 'react-router-dom';

export function useOperation() {
  const { operationId } = useParams();

  const {
    isPending,
    data: operation,
    error,
  } = useQuery({
    queryKey: ['operation', operationId],
    queryFn: () => getOperation(operationId),
    retry: false,
  });

  return { isPending, operation, error };
}
