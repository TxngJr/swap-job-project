import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import Logo from '../../assets/Logo'

type Props = {
  navigation: any
}

const OnboardingPage = ({ navigation }: Props) => {
  const handleSubmitPageEmployee = () => {
    try {
      navigation.navigate('EmployeePage1')
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmitPageEmployer = () => {
    try {
      navigation.navigate('EmployerPage1')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View>
      <View style={{ alignItems: 'flex-end', paddingTop: 10 }}>
        <Logo size={155} />
      </View>
      <View style={{ alignItems: 'center', paddingTop: 20 }}>
        <View style={{}}>
          <View style={{ width: 0, height: 0, borderLeftWidth: 25, borderRightWidth: 25, borderBottomWidth: 50, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: '#0187E0', alignSelf: 'flex-end', right: 40 }} />
          <View style={{ width: 300, height: 250, borderRadius: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0187E0' }}>
            <Text style={{ fontSize: 40, textAlign: 'center', lineHeight: 60, width: 250, color: '#FFFFFF' }}>
              เราเป็นตัวกลางระหว่างบริษัทและคนงาน
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text style={{ fontSize: 36 }}>สายไหน</Text>
        </View>
        <View style={{ paddingTop: 30 }}>
          <Button
            title='หางานกัน'
            width={320}
            onPress={handleSubmitPageEmployee}
          />
        </View>
        <View style={{ paddingTop: 30 }}>
          <Button
            title='หาพนักงานกัน'
            width={320}
            onPress={handleSubmitPageEmployer}
          />
        </View>
      </View>
    </View>
  )
}

export default OnboardingPage

const styles = StyleSheet.create({})