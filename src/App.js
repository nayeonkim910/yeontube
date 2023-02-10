import {Outlet} from 'react-router-dom';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navbar from './components/Navbar';
 
const queryClient = new QueryClient()
export default function App() {
  return (   
    <>
      <Header/>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>

  );
}

 
