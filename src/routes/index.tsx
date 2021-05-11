import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './stack.routes';

const Routes = () => (
  <NavigationContainer>
    <AppRoutes />
  </NavigationContainer>
);
//container de navegação, é o index que o Routes procura no app
export default Routes;
