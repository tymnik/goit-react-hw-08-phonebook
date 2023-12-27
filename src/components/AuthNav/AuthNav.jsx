import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <div className={styles.authNavBlock}>
      <NavLink to="login">
        <Button>
          Log In
        </Button>
      </NavLink>

      <NavLink to="register">
        <Button>
          Sign Up
        </Button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
