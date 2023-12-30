import {  useDispatch } from 'react-redux';
import { logOut } from 'store/auth/operations';
import { useAuth } from '../../hooks/useAuth';


const UserMenu = () => {
const dispatch = useDispatch();
 const { user } = useAuth();

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>{user.email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
