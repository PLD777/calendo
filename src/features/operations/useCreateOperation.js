import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createOperation as createOperationApi } from '../../services/apiOperations';
import toast from 'react-hot-toast';

export function useCreateOperation() {
  const queryClient = useQueryClient();

  const { mutate: createOperation, isPending } = useMutation({
    mutationFn: createOperationApi,
    onSuccess: () => {
      toast.success('New operation successfully created');
      queryClient.invalidateQueries({ queryKey: ['operations'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createOperation, isPending };
}
