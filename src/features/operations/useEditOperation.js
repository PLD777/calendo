import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editOperation as editOperationApi } from '../../services/apiOperations';
import toast from 'react-hot-toast';

export function useEditOperation() {
  const queryClient = useQueryClient();

  const { mutate: editOperation, isPending: isEditing } = useMutation({
    mutationFn: ({ editedOperation, operationId, operation }) =>
      editOperationApi(editedOperation, operationId, operation),
    onSuccess: (data) => {
      toast.success('Operation successfully edited');
      queryClient.invalidateQueries(['operations']);
      queryClient.invalidateQueries(['operation', data[0].id]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { editOperation, isEditing };
}
