import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import styles from './AppBar.module.css';

function AppBar() {
   const { isLoggedIn } = useAuth();

  return (
    <div className={styles.navBar}>
      <ul className={styles.navList}>
        <li>
          <NavLink className={styles.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          {isLoggedIn ? (
            <NavLink to="contacts">Contacts</NavLink>
          ) : (
            <AuthNav></AuthNav>
          )}
        </li>
        <li>{isLoggedIn && <UserMenu />}</li>
      </ul>
    </div>
  );
}

export default AppBar;
