import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../assets/Logo'
import { TextInput } from 'react-native-gesture-handler'
import Button from '../components/Button'

type Props = {
  navigation: any
}

const LoginPage = ({ navigation }: Props) => {
  return (
    <View>
      <View style={{ paddingTop: 48, alignItems: 'center' }}>
        <Logo size={232} />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 48 }}>เข้าสู่ระบบ</Text>
        <View style={{ paddingHorizontal: 20 }}>
          <View>
            <TextInput
              placeholder="อีเมล"
              keyboardType="default"
            />
            <View />
          </View>
          <View>
            <TextInput
              secureTextEntry={true}
              placeholder="รหัสผ่าน"
              keyboardType="default"
            />
            <View />
          </View>
          <Button
            title='ลืมรหัสผ่าน'
            noStyle={true}
            onPress={() => { }}
          />
          <View />
          <Button
            title='เข้าสู่ระบบ'
            width={320}
            onPress={() => { }}
          />
          <View />
          <Button
            title='ยังไม่มีบัญชี'
            noStyle={true}
            onPress={() => { }}
          />
          <View />
        </View>
      </View>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({})