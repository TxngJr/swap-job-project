import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingPage1 from '../screens/onboarding/OnboardingPage1'
import OnboardingPage2 from '../screens/onboarding/OnboardingPage2'
import OnboardingPage3 from '../screens/onboarding/OnboardingPage3'
import OnboardingPage4 from '../screens/onboarding/OnboardingPage4'
import OnboardingPage5 from '../screens/onboarding/OnboardingPage5'
import AuthNavigator from './AuthNavigator'

const Stack = createStackNavigator()

type Props = {}

const OnboardingNavigator = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName='OnboardingPage1' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingPage1" component={OnboardingPage1} />
      <Stack.Screen name="OnboardingPage2" component={OnboardingPage2} />
      <Stack.Screen name="OnboardingPage3" component={OnboardingPage3} />
      <Stack.Screen name="OnboardingPage4" component={OnboardingPage4} />
      <Stack.Screen name="OnboardingPage5" component={OnboardingPage5} />
      <Stack.Screen name='AuthNavigator' component={AuthNavigator} />
    </Stack.Navigator>
  )
}

export default OnboardingNavigator