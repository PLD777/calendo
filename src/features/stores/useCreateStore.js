import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createStore as createStoreApi } from '../../services/apiStores';
import toast from 'react-hot-toast';

export function useCreateStore() {
  const queryClient = useQueryClient();

  const { mutate: createStore, isPending } = useMutation({
    mutationFn: createStoreApi,
    onSuccess: () => {
      toast.success('New store successfully created');
      queryClient.invalidateQueries({ queryKey: ['stores'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createStore, isPending };
}
