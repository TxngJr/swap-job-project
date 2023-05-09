import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Onboarding from '../../../components/Onboarding';

type Props = {
  navigation: any
}

const OnboardingEmployeePage3 = ({ navigation }: Props) => {
  const handleNext = () => {
    navigation.navigate('OnboardingEmployeePage4')
  };
  
  return (
    <Onboarding
      onNext={handleNext}
      activeIndex={3}
      image={require('../../../assets/ImageOnboarding/Picture3.png')}
      headerTitle='Lets work!'
      title='เมื่อคุณแมตช์กันแล้ว พูดคุยเพื่อตัดสินใจ'
    />
  )
}

export default OnboardingEmployeePage3

const styles = StyleSheet.create({
  container: {},
  title: {},
})