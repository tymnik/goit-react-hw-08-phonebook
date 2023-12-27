import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';

function AppBar() {
  const [isAuth, setIsAuth] = useState(false);

 const handleClick = () => {
   setIsAuth(prevAuth => !prevAuth);
 };

  return (
    <div className={styles.navBar}>
      <ul className={styles.navList}>
        <li>
          <NavLink className={styles.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="/contacts">
            Contacts
          </NavLink>
        </li>
        <li>
          <button onClick={handleClick}>
            {isAuth ? 'LogOut' : 'LogIn'}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AppBar;
