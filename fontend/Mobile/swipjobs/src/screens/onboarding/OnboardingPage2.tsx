import React from 'react'
import Onboarding from '../../components/Onboarding'

type Props = {
  navigation: any
}

const OnboardingPage2 = ({ navigation }: Props) => {

  const handleSkip = () => {
    navigation.replace('OnboardingPage6')
  };
  
  const handleNext = () => {
    navigation.replace('OnboardingPage3')
  };

  return (
    <Onboarding
      onSkip={handleSkip}
      onNext={handleNext}
      activeIndex={1}
      image={require('../../assets/ImageOnboarding/Picture1.png')}
      headerStyleBlue={true}
      headerTitle='ให้พวกเรารู้จักคุณมากขึ้น'
      title='กรอกข้อมูลต่าง ๆ ของคุณ'
    />
  )
}

export default OnboardingPage2