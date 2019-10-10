import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import MenuScreen from '../../Screens/Menu';
import MenuScreen2 from '../../Screens/Menu copy';

const MenuRoute = createStackNavigator(
  {
    Menu: {
      screen: MenuScreen,
      navigationOptions: () => ({
        title: 'Menu',
      }),
    },
    SubMenu: {
      screen: MenuScreen2,
      navigationOptions: () => ({
        title: 'SubMenu',
      }),
    },
  },
  {
    initialRouteName: 'Menu',
    defaultNavigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <Icon
          name="angle-left"
          size={40}
          onPress={() => navigation.navigate({routeName: 'Menu'})}
        />
      ),
      headerRight: () => (
        <Icon
          name="angle-right"
          size={40}
          onPress={() => navigation.navigate({routeName: 'SubMenu'})}
        />
      ),
    }),
  },
);

export default MenuRoute;
