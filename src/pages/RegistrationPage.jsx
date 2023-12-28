import FormRegistration from '../components/Forms/FormRegistration/FormRegistration';
import React from 'react';

const RegistrationPage = () => {
  const registerUser = newUser => {
    console.log('Registering user:', newUser);
  };

  return <FormRegistration register={registerUser} />;
};

export default RegistrationPage;
