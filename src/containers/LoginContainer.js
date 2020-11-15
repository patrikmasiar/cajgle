import React from 'react';
import LoginForm from '../components/LoginForm';
import {useStore} from '../store';

const LoginContainer = () => {
  const {state: {
    userName,
  }, actions: {
    setName,
  }} = useStore();

  return (
    <LoginForm
      name={userName}
      onNameChange={e => setName(e.target.value)}
    />
  );
};

export default LoginContainer;
