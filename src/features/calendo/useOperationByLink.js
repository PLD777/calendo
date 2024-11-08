import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getStoreByLink } from '../../services/apiStores';
import { SITE_URL } from '../../services/constants';

export function useOperationByLink() {
  const operationLink = useParams().operationLink;

  const {
    isPending,
    data: store,
    error,
  } = useQuery({
    queryKey: ['storeByLink', operationLink],
    queryFn: () => getStoreByLink(operationLink),
    retry: false,
  });

  if (!store && !isPending) window.location.href = SITE_URL;

  return { isPending, store, error, operationLink };
}
