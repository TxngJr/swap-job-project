import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  navigation: any
}

const Onboarding = ({ navigation }: Props) => {

  const onPressOnboarding = async () => {
    try {
      await AsyncStorage.setItem('firstLaunch', 'true');
      navigation.navigate('Auth');
    } catch (error) {
      console.log('Error setting firstLaunch:', error);
    }
  }

  return (
    <View>
      <Text>Onboarding</Text>
      <Button
        title="Go to Details"
        onPress={onPressOnboarding}
      />
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({})