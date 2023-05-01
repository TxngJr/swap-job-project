/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './navigations/AuthNavigator'
import OnboardingNavigator from './navigations/OnboardingNavigator'
import AsyncStorage from '@react-native-async-storage/async-storage'
import HomeNavigator from './navigations/HomeNavigator'
import ArrowBack from './components/ArrowBack'

function App(): JSX.Element {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(false)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

  useEffect(() => {
    async function checkFirstLaunch() {
      try {
        const firstLaunch = await AsyncStorage.getItem('firstLaunch')
        if (firstLaunch == null) {
          setIsFirstLaunch(true);
        }
      } catch (error) {
        AsyncStorage.clear()
      }
    }
    checkFirstLaunch();
  }, []);

  useEffect(() => {
    async function checkLoginState() {
      try {
        const token = await AsyncStorage.removeItem('token')
        if (token == null) {
          setIsLoggedIn(false);
        }
      } catch (error) {
        AsyncStorage.clear()
      }
    }
    checkLoginState();
  }, []);

  return (
    <NavigationContainer>
      {isFirstLaunch ? (
        <OnboardingNavigator />
      ) : isLoggedIn ? (
        <HomeNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
}

export default App
