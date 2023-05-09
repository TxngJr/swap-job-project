/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingNavigator from './navigations/OnboardingNavigator'
import AuthNavigator from './navigations/AuthNavigator';
import AppNavigator from './navigations/AppNavigator';
import { View } from 'react-native'

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState<boolean>(false);
  const [showOnboarding, setShowOnboarding] = useState<boolean>(true);

  useEffect(() => {
    const bootstrapAsync = async () => {

      try {
        const token = await AsyncStorage.getItem('accessToken');
        const onboardingStatus = await AsyncStorage.getItem('onboardingStatus');
        if (token) {
          setUserToken(true);
        }
        if (onboardingStatus) {
          setShowOnboarding(false)
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <></>
      ) : showOnboarding ? (
        <OnboardingNavigator />
      )
        : userToken ? (
          <AppNavigator />
        ) : (
          <AuthNavigator />
        )
      }

    </NavigationContainer>
  );
}

export default App;
