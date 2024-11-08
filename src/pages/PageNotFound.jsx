import { useEffect } from 'react';
import { SITE_URL } from '../services/constants';

function redirectToHome() {
  return (window.location.href = SITE_URL);
}

function PageNotFound() {
  useEffect(function () {
    redirectToHome();
  }, []);

  return null;
}

export default PageNotFound;
