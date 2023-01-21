import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import FavoritesEmptyState from './FavoritesEmptyState';
import colors from '../../res/colors';

class FavoritesScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FavoritesEmptyState />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.charade,
    flex: 1,
  },
});

export default FavoritesScreen;
