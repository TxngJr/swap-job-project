import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Onboarding from '../../../components/Onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  navigation: any
}

const OnboardingEmployeePage4 = ({ navigation }: Props) => {

  const handleNext = async () => {
    await AsyncStorage.setItem('onboardingStatus', 'true')
    navigation.replace('AuthNavigator')
  };

  return (
    <Onboarding
      onNext={handleNext}
      activeIndex={4}
      image={require('../../../assets/ImageOnboarding/Picture4.png')}
      headerTitle='Lets work!'
    />
  )
}

export default OnboardingEmployeePage4

const styles = StyleSheet.create({
  container: {},
  title: {},
})