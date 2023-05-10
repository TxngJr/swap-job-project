import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Logo from '../assets/Logo'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Button from '../components/Button'
import { login } from '../services/AuthAPI'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {
  navigation: any
}

const LoginPage = ({ navigation }: Props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    if (!email) {
      return Alert.alert('กรุณาใส่ Email')
    }
    if (!email.endsWith('@gmail.com')) {
      Alert.alert('กรุณาใส่ @gmail.com')
      return
    }
    if (!password) {
      Alert.alert('กรุณาใส่รหัส')
      return
    }
    try {
      const token = await login({ email, password })
      await AsyncStorage.setItem('accessToken', token)
      navigation.replace('AppNavigator')
    } catch (error) {
      Alert.alert('อีเมลหรือรหัสผ่านไม่ถูกต้อง')
    }
  }

  const handleRegister = async () => {
    try {
      navigation.navigate('AppNavigator')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          height: 800
        }} >
        <View
          style={{
            paddingTop: 48,
            alignItems: 'center'
          }}>
          <Logo
            size={232}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            alignItems: 'center'
          }}>
          <Text
            style={{
              fontSize: 48,
              alignSelf: 'flex-start'
            }}>
            เข้าสู่ระบบ
          </Text>
          <View
            style={{
              paddingTop: 30
            }}>
            <TextInput
              style={styles.inputContainer}
              value={email}
              onChangeText={setEmail}
              placeholderTextColor='#BAB7B7'
              placeholder="อีเมล"
              keyboardType="default"
              onSubmitEditing={handleLogin}
            />
            <View style={styles.borderBottom} />
          </View>
          <View
            style={{
              paddingTop: 20
            }}>
            <TextInput
              style={styles.inputContainer}
              value={password}
              onChangeText={setPassword}
              placeholderTextColor='#BAB7B7'
              secureTextEntry={true}
              placeholder="รหัสผ่าน"
              keyboardType="default"
              onSubmitEditing={handleLogin}
            />
            <View style={styles.borderBottom} />
          </View>
          <View
            style={{
              paddingTop: 30,
            }}>
            <View
              style={{
                alignItems: 'flex-end',
              }}>
              <Button
                title='ลืมรหัสผ่าน'
                isStyle={false}
                onPress={() => { }}
              />
            </View>
            <View
              style={{
                paddingTop: 20
              }}>
              <Button
                title='เข้าสู่ระบบ'
                colors='#00B3FF'
                width={320}
                isStyle={true}
                onPress={handleLogin}
              />
            </View>
            <View />
            <View
              style={{
                paddingTop: 30,
                alignItems: 'center'
              }}>
              <Button
                title='ยังไม่มีบัญชี'
                isStyle={false}
                onPress={handleRegister}
              />
            </View>
          </View>
          <View />
        </View>
      </View>
    </ScrollView>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  inputContainer: {
    padding: 0,
    margin: 0,
    fontSize: 24
  },
  borderBottom: {
    height: 2,
    width: 300,
    backgroundColor: '#D9D9D9'
  }
})