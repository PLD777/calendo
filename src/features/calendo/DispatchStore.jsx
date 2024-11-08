import { useEffect } from 'react';
import LecView from './LecView';
import UView from './UView';
import CrfView from './CrfView';
import { useOperationByLink } from './useOperationByLink';
import { useCreateView } from './useCreateView';

function DispatchStore() {
  const { createView } = useCreateView();
  const { operationLink, store, isPending } = useOperationByLink();
  const operation = store?.operations[0];

  useEffect(
    function () {
      document.title = store
        ? `Calendrier - ${store?.type} ${store?.city}`
        : 'Calendrier - Chargement...';
    },
    [store]
  );

  useEffect(
    function () {
      if (store) createView(store?.id);
    },
    [store, createView]
  );

  if (isPending) return null;

  return (
    <div>
      {operationLink.startsWith('lec') && (
        <LecView store={store} operation={operation} />
      )}
      {operationLink.startsWith('hu') && (
        <UView store={store} operation={operation} />
      )}
      {operationLink.startsWith('su') && (
        <UView store={store} operation={operation} />
      )}
      {operationLink.startsWith('crf') && (
        <CrfView store={store} operation={operation} />
      )}
    </div>
  );
}

export default DispatchStore;
