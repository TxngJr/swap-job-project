import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Logo from '../assets/Logo'
import { TextInput } from 'react-native-gesture-handler'
import Button from '../components/Button'
import { login } from '../services/AuthAPI'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {
  navigation: any
}

const LoginPage = ({ navigation }: Props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin  = async () => {
    try {
      const token = await login({email, password});
      await AsyncStorage.setItem('accessToken', token);
        navigation.replace('AppNavigator')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <View style={{backgroundColor:'#FFFFFF',height:800}} >
      <View style={{ paddingTop: 48, alignItems: 'center' }}>
        <Logo size={232} />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 48 }}>เข้าสู่ระบบ</Text>
        <View style={{ paddingHorizontal: 20 }}>
          <View>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="อีเมล"
              keyboardType="default"
            />
            <View />
          </View>
          <View>
            <TextInput
              value={password}
              onChangeText={setPassword}
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
            onPress={handleLogin}
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