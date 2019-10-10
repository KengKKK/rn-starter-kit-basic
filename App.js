import React from 'react';
import {mapping, light as lightTheme, dark as darkTheme} from '@eva-design/eva';
import {ApplicationProvider} from 'react-native-ui-kitten';
import AppContainer from './src/Navigation/stack/BottomTab';

// import ButtonComp from './src/Components/Button';

const App = () => {
  return (
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      {/* <ButtonComp /> */}
      <AppContainer />
    </ApplicationProvider>
  );
};

export default App;
