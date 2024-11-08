import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createView as createViewApi } from '../../services/apiParticipations';

export function useCreateView() {
  const queryClient = useQueryClient();

  const { mutate: createView } = useMutation({
    mutationFn: createViewApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['views'] });
    },
  });

  return { createView };
}
