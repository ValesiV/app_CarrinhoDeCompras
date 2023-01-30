import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/index';
import CartProvider from './src/contexts/CartContext';

function App() {
  return (
    <NavigationContainer>
      <CartProvider>

      <StatusBar style='auto'/>

      <Routes/>

      </CartProvider>
    </NavigationContainer>
  );
}

export default App;