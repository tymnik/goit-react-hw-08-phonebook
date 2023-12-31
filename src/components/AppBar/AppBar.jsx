import { useAuth } from '../../hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import styles from './AppBar.module.css'

function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <div className={styles.appBar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}

export default AppBar;
