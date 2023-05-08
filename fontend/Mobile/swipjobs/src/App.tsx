/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import OnboardingNavigator from './navigations/OnboardingNavigator'
import AuthNavigator from './navigations/AuthNavigator';

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <OnboardingNavigator/>
    </NavigationContainer>
  );
}

export default App;
