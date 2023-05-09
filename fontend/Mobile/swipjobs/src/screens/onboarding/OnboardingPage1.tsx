import { Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import Logo from '../../assets/Logo'

type Props = {
  navigation: any
}

const OnboardingPage1 = ({ navigation }: Props) => {
  const handleNext = () => {
    try {
      navigation.navigate('OnboardingPage2')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={{backgroundColor:'#FFFFFF',height:800}}>
      <View style={{ paddingTop: 48, alignItems: 'center', justifyContent: 'center' }}>
        <Logo size={200} />
      </View>
      <View style={{ alignItems: 'center', paddingTop: 20 }}>
        <View style={{}}>
          <View style={{ width: 0, height: 0, borderLeftWidth: 25, borderRightWidth: 25, borderBottomWidth: 50, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: '#ED683C', alignSelf: 'center' }} />
          <View style={{ width: 300, height: 250, borderRadius: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ED683C' }}>
            <Text style={{ fontSize: 32, textAlign: 'center', color: '#FFFFFF' }}>
              ยินดีต้อนรับสู่{"\n"}Swipe Jop !{"\n"}เราคือสื่อกลางระหว่างบริษัทและพนักงาน
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 100 }}>
          <Button
            title='เริ่มกันเลย !'
            colors='#ED683C'
            width={320}
            onPress={handleNext}
          />
        </View>
      </View>
    </View>
  )
}

export default OnboardingPage1