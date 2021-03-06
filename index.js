/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const entireScreenWidth = Dimensions.get('window').width;
// Icon.loadFont();
EStyleSheet.build({
  $rem: entireScreenWidth / 380,
  $colorOrg: '#f26522',
});

AppRegistry.registerComponent(appName, () => App);
