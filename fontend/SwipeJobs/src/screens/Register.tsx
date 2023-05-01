import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import ArrowBack from '../components/ArrowBack'
import Logo from '../components/Logo'


type Props = {
  navigation: any
}

const Register = ({ navigation }: Props) => {
  return (
    <View>
      <ArrowBack />
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View>
        <Text>สมัครสมาชิก</Text>
        <View>
          <TextInput
            placeholder="อีเมล"
            keyboardType="default"
          />
          <TextInput
            secureTextEntry={true}
            placeholder="รหัสผ่าน"
            keyboardType="default"
          />
          <TextInput
            secureTextEntry={true}
            placeholder="ยืนยันรหัสผ่าน"
            keyboardType="default"
          />
          <TextInput

            placeholder="เบอร์โทรศัพท์"
            keyboardType="phone-pad"
          />
          <TouchableOpacity>
            <Text>สมัครสมาชิก</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>มีบัญชีอยู่แล้ว</Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  logoContainer: {
    position: 'absolute',
    width: 432,
    height: 430,
    left: 50,
    top: 58,
  }
})