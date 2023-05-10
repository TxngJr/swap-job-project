import React from 'react'
import Onboarding from '../../components/Onboarding'

type Props = {
  navigation: any
}

const OnboardingPage3 = ({ navigation }: Props) => {

  const handleNext = () => {
    navigation.replace('OnboardingPage4')
  };

  return (
    <Onboarding
      onNext={handleNext}
      activeIndex={2}
      image={require('../../assets/ImageOnboarding/Picture2.png')}
      headerTitle='Swipe!'
      title='ปัดหาบุคคลหรือบริษัทที่คุณต้องการทำงาน'
    />
  )
}

export default OnboardingPage3