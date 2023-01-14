import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinScreen from './CoinScreen';

const Stack = createStackNavigator();

const CoinStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Coins" component={CoinScreen} />
    </Stack.Navigator>
  );
};

export default CoinStack;
