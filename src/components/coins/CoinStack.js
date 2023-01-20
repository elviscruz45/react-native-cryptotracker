import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinScreen from './CoinScreen';
import CoinDetailScreen from './CoinDetailScreen';
import colors from '../../res/colors';

const Stack = createStackNavigator();

const CoinStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blackPearl,
          shadowColor: colors.blackPearl,
        },
        headerTintColor: colors.white,
      }}>
      <Stack.Screen name="Coins" component={CoinScreen} />
      <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
};

export default CoinStack;
