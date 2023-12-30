import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {

  return (
    <header className={styles.header}>
      <nav className={styles.navList}>
        <NavLink className={styles.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navLink} to="/contacts">
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};
