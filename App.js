import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CoinStack from './src/components/coins/CoinStack';

function App() {
  return (
    <NavigationContainer>
      <CoinStack />
    </NavigationContainer>
  );
}

export default App;
