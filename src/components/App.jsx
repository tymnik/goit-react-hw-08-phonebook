import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store/store';
import Loader from './Loader/Loader';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ContactForm from './Forms/ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
