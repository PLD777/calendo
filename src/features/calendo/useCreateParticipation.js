import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createParticipation as createParticipationApi } from '../../services/apiParticipations';
import toast from 'react-hot-toast';

export function useCreateParticipation() {
  const queryClient = useQueryClient();

  const { mutate: createParticipation, isPending } = useMutation({
    mutationFn: createParticipationApi,
    onSuccess: () => {
      toast.success('Participation enregistrée !');
      queryClient.invalidateQueries({ queryKey: ['participations'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createParticipation, isPending };
}
