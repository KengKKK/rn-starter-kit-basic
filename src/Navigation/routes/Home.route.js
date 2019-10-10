import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../../Screens/Home';

const HomeRoute = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: 'HOME',
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default HomeRoute;
