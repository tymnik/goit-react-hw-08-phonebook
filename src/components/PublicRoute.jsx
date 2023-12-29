import { useAuth } from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
 const { isLoggedIn } = useAuth();

  const location = useLocation();

  return !isLoggedIn ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublicRoute;
