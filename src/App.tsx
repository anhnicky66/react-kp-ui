import { AppProvider } from '@/providers/app';
import { ErrorBoundary } from 'react-error-boundary';
import { AppRoutes } from '@/routes';

const ErrorFallback = () => {
  return (
    <div role="alert">
      <h2>Ooops, something went wrong</h2>
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
