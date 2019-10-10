import {createStackNavigator} from 'react-navigation-stack';

import MenuScreen from '../../Screens/Menu';

const MenuRoute = createStackNavigator(
  {
    Menu: {
      screen: MenuScreen,
      navigationOptions: () => ({
        title: 'Menu',
      }),
    },
  },
  {
    initialRouteName: 'Menu',
  },
);

export default MenuRoute;
