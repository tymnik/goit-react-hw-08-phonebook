import React, {lazy} from 'react';
import { useContacts } from '../utils/contactUtils';
import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const TasksPage = lazy(() => import('../pages/Tasks'));

const App = () => {

  const { filteredContacts } = useContacts();
  // const { isRefreshing } = useAuth();
  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <div>
      <h1 style={{ color: '#121849', fontSize: '24px', textAlign: 'center' }}>
        Phonebook
      </h1>
      <ContactForm />
      <h2 style={{ color: '#121849', fontSize: '24px', textAlign: 'center' }}>
        Contacts
      </h2>
      <Filter />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

{/* <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        />
      </Route>
    </Routes> */}


export default App;
