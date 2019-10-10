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
        tabBarIcon: () => <Icon name="cached" size={25} />,
      }),
    },
    // Favorite: {screen: FavoriteRoute},
    Home: {
      screen: HomeRoute,
      navigationOptions: () => ({
        headerRight: null,
        tabBarIcon: () => <Icon name="home" size={25} />,
      }),
    },
    // FoodStory: {screen: StoryRoute},
    Contact: {
      screen: ContactRoute,
      navigationOptions: () => ({
        headerRight: null,
        tabBarIcon: () => <Icon name="build" size={25} />,
      }),
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#f26522',
      labelStyle: {
        fontSize: 12,
      },
    },
  },
);

export default createAppContainer(BottomTabNavigation);
