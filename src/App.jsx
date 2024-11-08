import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import GlobalStyles from './styles/GlobalStyles';
import Stores from './pages/Stores';
import Operations from './pages/Operations';
import AppLayout from './ui/AppLayout';
import CreateOperation from './pages/CreateOperation';
import EditOperation from './pages/EditOperation';
import Statistics from './pages/Statistics';
import CreateStore from './pages/CreateStore';
import EditStore from './pages/EditStore';
import Calendo from './pages/Calendo';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import CGU from './pages/CGU';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import ProtectedRoute from './ui/ProtectedRoute';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/jolo"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="/jolo/operations" />} />
            <Route path="/jolo/operations" element={<Operations />} />
            <Route path="/jolo/stores" element={<Stores />} />
            <Route path="/jolo/createOperation" element={<CreateOperation />} />
            <Route
              path="/jolo/editOperation/:operationId"
              element={<EditOperation />}
            />
            <Route
              path="/jolo/statistics/:operationId"
              element={<Statistics />}
            />
            <Route path="/jolo/createStore" element={<CreateStore />} />
            <Route path="/jolo/editStore/:storeId" element={<EditStore />} />
          </Route>

          <Route
            path="/politique-de-confidentialite"
            element={<PolitiqueConfidentialite />}
          />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/jologin" element={<Login />} />

          <Route path="/:operationLink" element={<Calendo />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 4000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
