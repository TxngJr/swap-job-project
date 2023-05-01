import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import Register from '../screens/Register'

const Stack = createStackNavigator()

type Props = {}

const AuthNavigator = (props: Props) => {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName='Register'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})