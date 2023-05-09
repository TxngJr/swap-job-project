import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginPage from '../screens/LoginPage'
import RegisterPage from '../screens/register/RegisterPage'
import AppNavigator from './AppNavigator'

const Stack = createStackNavigator()

type Props = {}

const OnboardingNavigator = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName='LoginPage' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
    </Stack.Navigator>
  )
}

export default OnboardingNavigator