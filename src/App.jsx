import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { RootLayout } from './Pages/RootLayout';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import Create from './Pages/Create';
function App() {
  const router = createBrowserRouter([
      {
        path: '/',
        element: <RootLayout />,
        children: [
          { index: true, element: <HomePage /> }, 
          { path: 'about', element: <AboutPage /> },
          {path:'create', element:<Create/>}
        ],
      }
    ])
  return <RouterProvider router={router} />;
}

export default App
