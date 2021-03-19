import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LandingScreen from './screens/LandingScreen';
import Home from './screens/Home';

// The prefix for out nav URLs
const prefix = 'linkingDemo://';

const AppNavigator = createStackNavigator(
  {
    LandingScreen: {
      screen: LandingScreen,
      path: 'landing',
    },
    Home: {
      screen: Home,
      path: 'home',
    },
  },
  {
    initialRouteName: 'LandingScreen',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <AppContainer uriPrefix={prefix} />
  );
};

export default App;
