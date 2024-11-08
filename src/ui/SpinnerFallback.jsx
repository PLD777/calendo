import { useLocation } from 'react-router-dom';
import Spinner from './Spinner';

function SpinnerFallback() {
  const { pathname } = useLocation();

  if (!pathname.startsWith('/jolo')) {
    return null;
  }

  return <Spinner />;
}

export default SpinnerFallback;
