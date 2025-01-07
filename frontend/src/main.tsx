import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';

const queryClient = new QueryClient({ 
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>     
      <Auth0ProviderWithNavigate>
        <AppRoutes />
      </Auth0ProviderWithNavigate>
      </QueryClientProvider>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
);
