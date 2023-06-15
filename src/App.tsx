import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';

const client = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={client}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
