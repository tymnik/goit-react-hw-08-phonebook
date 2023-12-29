import {  useDispatch } from 'react-redux';
import { logOut } from 'store/auth/operations';
import { useAuth } from '../../hooks/useAuth';


const UserMenu = () => {
const dispatch = useDispatch();
const { auth } = useAuth();

  return (
    <div>
      <p>{auth.user.email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
