import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteStore as deleteStoreApi } from '../../services/apiStores';

export function useDeleteStore() {
  const queryClient = useQueryClient();

  const { isPending, mutate: deleteStore } = useMutation({
    mutationFn: deleteStoreApi,
    onSuccess: () => {
      toast.success('Store deleted successfully');
      queryClient.invalidateQueries({
        queryKey: ['stores'],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isPending, deleteStore };
}
