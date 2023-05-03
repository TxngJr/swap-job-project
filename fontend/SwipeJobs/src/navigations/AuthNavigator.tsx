import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import Register from '../screens/Register/Register'
import HomeNavigator from './HomeNavigator'
import Register1 from '../screens/Register/Register1'
import Register2 from '../screens/Register/Register2'
import Register3 from '../screens/Register/Register3'

const Stack = createStackNavigator()

type Props = {}

const AuthNavigator = (props: Props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Register'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Register1" component={Register1} />
      <Stack.Screen name="Register2" component={Register2} />
      <Stack.Screen name="Register3" component={Register3} />
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})