import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CoinStack from './src/components/coins/CoinStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from './src/res/colors';
import {Image} from 'react-native';
import FavoritesStacks from './src/components/favorites/FavoritesStack';

const Tabs = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarInactiveTintColor: '#fefefe',
          tabBarStyle: {
            backgroundColor: colors.blackPearl,
          },
        }}>
        <Tabs.Screen
          name="Coinsssss"
          component={CoinStack}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('./src/assets/bank.png')}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Favorites"
          component={FavoritesStacks}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('./src/assets/star.png')}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
