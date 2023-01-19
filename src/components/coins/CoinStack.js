import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinScreen from './CoinScreen';
import CoinDetailScreen from './CoinDetailScreen';

const Stack = createStackNavigator();

const CoinStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Coins" component={CoinScreen} />
      <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
};

export default CoinStack;
