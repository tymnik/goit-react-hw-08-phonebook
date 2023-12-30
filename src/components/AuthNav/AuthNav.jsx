import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  const backgroundColor = grey[900];
  return (
    <div className={styles.authNavBlock}>
      <NavLink to="login">
        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor }}
        >
          Log In
        </Button>
      </NavLink>
      <NavLink to="register">
        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor }}
        >
          Sign Up
        </Button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
