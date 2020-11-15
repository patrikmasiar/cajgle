import React from 'react';
import Header from '../components/Header';
import {useStore} from '../store';

const HeaderContainer = () => {
  const {state: {
    userName,
  }} = useStore();

  return (
    <Header
      name={userName}
    />
  );
};

export default HeaderContainer;
