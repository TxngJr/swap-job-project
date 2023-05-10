import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CheckBox from '../../components/CheckBox'
import Button from '../../components/Button'

type Props = {
  navigation: any
}

const OnboardingPage5 = ({ navigation }: Props) => {

  const scrollViewRef = useRef<ScrollView>(null)
  const [isScrollEnd, setIsScrollEnd] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const handleScroll = (event: any) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent
    const isScrollEnd = layoutMeasurement.height + contentOffset.y >= contentSize.height

    if (isScrollEnd) {
      setIsScrollEnd(isScrollEnd)
    }
  }

  const handleCheckboxChange = (value: boolean) => {
    setIsChecked(value)
  }

  const handleLogin = async () => {
    await AsyncStorage.setItem('onboardingStatus', 'true')
    navigation.replace('AuthNavigator')
  }

  return (
    <View>
      <View
        style={{
          alignSelf: 'center',
          paddingHorizontal: 20,
          paddingVertical: 20,
          marginTop: 10,
          width: 380,
          height: 660,
          backgroundColor: '#D9D9D9',
          borderRadius: 40
        }}>
        <ScrollView
          ref={scrollViewRef}
          onScroll={handleScroll}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloremque dolore, repudiandae necessitatibus rem perferendis fugiat consequuntur dicta ipsum, modi enim quia nobis harum vero rerum saepe minus laboriosam porro.
          </Text>
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 25,
          paddingHorizontal: 20
        }}>
        <CheckBox
          text="ฉันยอมรับเงื่อนไข"
          checked={isChecked}
          onChange={handleCheckboxChange}
          disabled={!isScrollEnd}
        />
        <Button
          title='Agree'
          colors='#0187E0'
          width={100}
          isStyle={true}
          onPress={handleLogin}
          disabled={!isChecked}
        />
      </View>
    </View>
  )
}

export default OnboardingPage5