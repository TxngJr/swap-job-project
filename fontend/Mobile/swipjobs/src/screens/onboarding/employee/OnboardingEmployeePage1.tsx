import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Onboarding from '../../../components/Onboarding';

type Props = {
  navigation: any
}

const OnboardingEmployeePage1 = ({ navigation }: Props) => {

  const handleNext = () => {
    navigation.navigate('OnboardingEmployeePage2')
  };

  return (
    <Onboarding
      onNext={handleNext}
      activeIndex={1}
      image={require('../../../assets/ImageOnboarding/Picture1.png')}
      headerStyleBlue={true}
      headerTitle='ให้พวกเรารู้จักคุณมากขึ้น'
      title='กรอกข้อมูลต่าง ๆ ของคุณ'
    />
  )
}

export default OnboardingEmployeePage1

const styles = StyleSheet.create({
  container: {},
  title: {},
})