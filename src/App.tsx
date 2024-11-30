import { ErrorBoundary } from 'react-error-boundary';
import GlobalFallback from './components/fallback/GlobalFallback';
import ReactQueryProvider from './providers/ReactQueryProvider';
import ReactRouterProvider from './providers/ReactRouterProvider';
import SearchProvider from './providers/SearchProvider';
import './styles/index.css';

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={GlobalFallback}>
      <ReactQueryProvider>
        <SearchProvider>
          <ReactRouterProvider />
        </SearchProvider>
      </ReactQueryProvider>
    </ErrorBoundary>
  );
};

export default App;
