import { useAuth } from '../../hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}

export default AppBar;
