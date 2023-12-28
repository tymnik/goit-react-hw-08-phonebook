import FormLogin from '../components/Forms/FormLogin/FormLogin';
import React from 'react';

const LoginPage = () => {
  const loginUser = credentials => {
    console.log('Logging in with credentials:', credentials);
  };

  return <FormLogin login={loginUser} />;
};

export default LoginPage;
