import 'react-native-gesture-handler';
import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName.toLowerCase(), () => App);

if (Platform.OS === 'web') {
  const rootTag =
    document.getElementById('root') || document.getElementById(appName);
  AppRegistry.runApplication(appName, {rootTag});
}
