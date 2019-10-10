import {createStackNavigator} from 'react-navigation-stack';


import ContactScreen from '../../Screens/Contact';

const ContactRoute = createStackNavigator(
  {
    Contact: {
      screen: ContactScreen,
      navigationOptions: () => ({
        title: 'Contact',
      }),
    },
  },
  {
    initialRouteName: 'Contact',
  },
);

export default ContactRoute;
