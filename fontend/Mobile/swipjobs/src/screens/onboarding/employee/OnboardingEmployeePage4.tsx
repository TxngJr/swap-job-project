import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Onboarding from '../../../components/Onboarding';

type Props = {
  navigation: any
}

const OnboardingEmployeePage4 = ({ navigation }: Props) => {

  

  return (
    <Onboarding
      onNext={()=>{}}
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