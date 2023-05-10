import React from 'react'
import Onboarding from '../../components/Onboarding'

type Props = {
  navigation: any
}

const OnboardingPage5 = ({ navigation }: Props) => {

  const handleNext = () => {
    navigation.replace('OnboardingPage6')
  };

  return (
    <Onboarding
      onNext={handleNext}
      activeIndex={4}
      image={require('../../assets/ImageOnboarding/Picture4.png')}
      headerTitle='Lets work!'
    />
  )
}

export default OnboardingPage5
