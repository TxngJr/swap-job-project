import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from '../screens/Onboarding';
import AuthNavigator from './AuthNavigator';


const Stack = createStackNavigator()

type Props = {}

const OnboardingNavigator = (props: Props) => {
    return (
        <Stack.Navigator initialRouteName='Onboarding' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Auth" component={AuthNavigator} />
        </Stack.Navigator>
    )
}

export default OnboardingNavigator

const styles = StyleSheet.create({})