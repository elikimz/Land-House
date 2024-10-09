import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home  from './pages/home'
import Properties from './pages/properties';
import About from './pages/about'
import Contact from './pages/contacts';





  const App: React.FC = () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Home/>,
        // errorElement: <Error />,
      },
      {
        path: 'properties',
        element: <Properties/>,
        // errorElement: <Error />,
      },
      {
        path: 'about',
        element: <About/>,
        // errorElement: <Error />,
      },
      {
        path: 'contact',
        element: <Contact/>,
        // errorElement: <Error />,
      },
   
   
   
    ]);
    return (
      <RouterProvider router={router} />
    );
}

export default App
