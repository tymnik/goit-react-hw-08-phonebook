import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'store/auth/operations';
import { useNavigate } from 'react-router-dom';


const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  // const handleClick = () => {
  //   dispatch(logOut());
  //   navigate('/');
  // };

  return (
    <div>
      <p>mango@mail.com</p>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;
