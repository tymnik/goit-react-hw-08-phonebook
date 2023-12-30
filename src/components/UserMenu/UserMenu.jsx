import {  useDispatch } from 'react-redux';
import { logOut } from 'store/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import styles from './UserMenu.module.css'
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

const UserMenu = () => {
const dispatch = useDispatch();
 const { user } = useAuth();
 const backgroundColor = grey[900];
  
  return (
    <div className={styles.menuBlock}>
      <h2 className={styles.welcomeText}>Welcome, {user.name}</h2>
      <p style={{ color: 'white' }}>{user.email}</p>
      <Button
        onClick={() => dispatch(logOut())}
        variant="contained"
        size="small"
        style={{ backgroundColor }}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
