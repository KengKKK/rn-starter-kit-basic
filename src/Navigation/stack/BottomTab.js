import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MenuRoute from '../routes/Menu.route';
import HomeRoute from '../routes/Home.route';
import ContactRoute from '../routes/Contact.route';

const BottomTabNavigation = createBottomTabNavigator(
  {
    Menu: {
      screen: MenuRoute,
      navigationOptions: () => ({
        headerRight: null,
        tabBarIcon: () => <Icon name="search" size={25} />,
      }),
    },
    Home: {
      screen: HomeRoute,
      navigationOptions: () => ({
        headerRight: null,
        tabBarIcon: ({focused}) => (
          <Icon
            name={focused ? 'home' : 'favorite'}
            size={25}
            color={focused ? '#f26522' : 'black'}
          />
        ),
      }),
    },
    Contact: {
      screen: ContactRoute,
      navigationOptions: () => ({
        headerRight: null,
        tabBarIcon: ({focused}) => (
          <Icon name="build" size={25} color={focused ? '#f26522' : 'black'} />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Menu',
    tabBarOptions: {
      activeTintColor: '#3bb54a',

      labelStyle: {
        fontSize: 12,
      },
    },
  },
);

export default createAppContainer(BottomTabNavigation);
