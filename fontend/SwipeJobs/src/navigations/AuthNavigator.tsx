import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import Register from '../screens/Register'
import HomeNavigator from './HomeNavigator'

const Stack = createStackNavigator()

type Props = {}

const AuthNavigator = (props: Props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Register'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})