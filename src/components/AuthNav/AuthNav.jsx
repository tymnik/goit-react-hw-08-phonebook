import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.authNavBlock}>
      <NavLink to="login">
        <button>Log In</button>
      </NavLink>
      <NavLink to="register">
        <button>Sign Up</button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
