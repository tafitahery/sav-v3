import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import List from './pages/List';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';
import styled from 'styled-components';
import New from './pages/New';

const Wrapper = styled.div`
  display: flex;
`;

function App() {
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Wrapper>
          <Leftbar />
          <Outlet />
        </Wrapper>
      </div>
    );
  };

  // eslint-disable-next-line react/prop-types
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/machines',
          element: <List title="Machines" />,
        },
        {
          path: '/customers',
          element: <List title="Clients" />,
        },
        {
          path: '/parts',
          element: <List title="Pièces" />,
        },
        {
          path: '/technicians',
          element: <List title="Techniciens" />,
        },
        {
          path: '/new',
          element: <New />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
