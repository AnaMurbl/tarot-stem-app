import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import CardDetailPage from './pages/CardDetailPage';
import Reading from './pages/Reading';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/card/:id',
        element: <CardDetailPage />
      },
      {
        path: '/reading',
        element: <Reading />
      }
    ]
  }
]);