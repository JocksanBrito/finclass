import React from 'react';
import useAuth from '../hooks/useAuth';
import SignInStack from './SignInStack/index';
import SingnedInBottomTab from './SingnedInBottomTab';

const Navigation: React.FC = () => {
  const {isLogged} = useAuth();

  return isLogged ?  <SingnedInBottomTab/> : <SignInStack />
};

export default Navigation;