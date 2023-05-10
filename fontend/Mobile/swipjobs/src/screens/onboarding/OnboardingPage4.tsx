import React from 'react'
import Onboarding from '../../components/Onboarding'

type Props = {
  navigation: any
}

const OnboardingPage4 = ({ navigation }: Props) => {

  const handleNext = () => {
    navigation.replace('OnboardingPage5')
  };
  
  return (
    <Onboarding
      onNext={handleNext}
      activeIndex={3}
      image={require('../../assets/ImageOnboarding/Picture3.png')}
      headerTitle='Lets work!'
      title='เมื่อคุณแมตช์กันแล้ว พูดคุยเพื่อตัดสินใจ'
    />
  )
}

export default OnboardingPage4