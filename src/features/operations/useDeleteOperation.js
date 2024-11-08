import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteOperation as deleteOperationApi } from '../../services/apiOperations';

export function useDeleteOperation() {
  const queryClient = useQueryClient();

  const { isPending, mutate: deleteOperation } = useMutation({
    mutationFn: deleteOperationApi,
    onSuccess: () => {
      toast.success('Operation deleted successfully');
      queryClient.invalidateQueries({
        queryKey: ['operations'],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isPending, deleteOperation };
}
