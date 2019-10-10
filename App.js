import React from 'react';
import {mapping, light as lightTheme, dark as darkTheme} from '@eva-design/eva';
import {ApplicationProvider} from 'react-native-ui-kitten';
import AppContainer from './src/Navigation/stack/BottomTab';

const App = () => {
  return (
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <AppContainer />
    </ApplicationProvider>
  );
};

export default App;
