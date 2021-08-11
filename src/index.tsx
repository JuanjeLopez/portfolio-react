import ReactDOM from 'react-dom'
import Footer from './Footer/Footer'
import { QueryClient, QueryClientProvider } from 'react-query'
import NavBar from './NavBar/NavBar';


const client = new QueryClient();


ReactDOM.render(
  <QueryClientProvider client={client}>
    <NavBar />
    <Footer />
  </QueryClientProvider>,
  document.getElementById('root')
);
