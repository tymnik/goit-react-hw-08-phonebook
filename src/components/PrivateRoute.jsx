import { useAuth } from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
 const { isLoggedIn } = useAuth();

  const location = useLocation();

  return isLoggedIn ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
