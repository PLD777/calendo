import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editStore as editStoreApi } from '../../services/apiStores';
import toast from 'react-hot-toast';

export function useEditStore() {
  const queryClient = useQueryClient();

  const { mutate: editStore, isPending: isEditing } = useMutation({
    mutationFn: ({ editedStore, storeId }) =>
      editStoreApi(editedStore, storeId),
    onSuccess: (data) => {
      toast.success('Store successfully edited');
      queryClient.invalidateQueries(['stores']);
      queryClient.invalidateQueries(['store', data[0].id]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { editStore, isEditing };
}
