import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingPage from '../screens/onboarding/OnboardingPage'
import OnboardingEmployeePage1 from '../screens/onboarding/employee/OnboardingEmployeePage1'
import OnboardingEmployeePage2 from '../screens/onboarding/employee/OnboardingEmployeePage2'
import OnboardingEmployeePage3 from '../screens/onboarding/employee/OnboardingEmployeePage3'
import OnboardingEmployeePage4 from '../screens/onboarding/employee/OnboardingEmployeePage4'
import OnboardingEmployerPage1 from '../screens/onboarding/employer/OnboardingEmployerPage1'
import AuthNavigator from './AuthNavigator'

const Stack = createStackNavigator()

type Props = {}

const OnboardingNavigator = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName='OnboardingPage' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingPage" component={OnboardingPage} />
      <Stack.Screen name="OnboardingEmployeePage1" component={OnboardingEmployeePage1} />
      <Stack.Screen name="OnboardingEmployeePage2" component={OnboardingEmployeePage2} />
      <Stack.Screen name="OnboardingEmployeePage3" component={OnboardingEmployeePage3} />
      <Stack.Screen name="OnboardingEmployeePage4" component={OnboardingEmployeePage4} />
      <Stack.Screen name="OnboardingEmployerPage" component={OnboardingEmployerPage1} />
      <Stack.Screen name='AuthNavigator' component={AuthNavigator} />
    </Stack.Navigator>
  )
}

export default OnboardingNavigator