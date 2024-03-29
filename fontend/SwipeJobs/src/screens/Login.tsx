import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Logo from '../assets/Logo'
import IconAlternateEmail from '../assets/IconAlternateEmail'
import IconPassword from '../assets/IconPassword'


type Props = {
  navigation: any
}

const Login = ({ navigation }: Props) => {
  const handleSubmitLogin = async () => {
    try {
      navigation.replace('HomeNavigator')
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmitRegister = async () => {
    try {
      navigation.replace('Register')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View >
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>
          เข้าสู่ระบบ
        </Text>
        <View style={[styles.textContainer, { marginTop: 5 }]}>
          <View style={styles.inputContainer}>
            <IconAlternateEmail />
            <TextInput
              style={styles.inputText}
              placeholder="อีเมล"
              keyboardType="default"
            />
          </View>
          <View style={styles.inputContainer}>
            <IconPassword />
            <TextInput
              style={styles.inputText}
              secureTextEntry={true}
              placeholder="รหัสผ่าน"
              keyboardType="default"
            />
          </View>
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity>
              <Text>
                ลืมรหัสผ่าน
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <View>
              <TouchableOpacity style={styles.button} onPress={handleSubmitLogin}>
                <Text style={styles.textButton}>เข้าสู่ระบบ</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15 }}>
              <TouchableOpacity onPress={handleSubmitRegister}>
                <Text>ยังไม่มีบัญชี</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  logoContainer: {
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginHorizontal: 15,
  },
  textHeader: {
    fontSize: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-around',
  },
  buttonContainer: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputText: {
    height: 40,
    width: 285,
    borderBottomWidth: 2,
    borderBottomColor: '#BAB7B7',
    borderBottomStartRadius: 100,
    paddingLeft: 10,

  },
  forgotPasswordContainer:{
    marginTop:10,
    alignItems:'flex-end',
  },
  button: {
    width: 320,
    height: 50,
    backgroundColor: '#00B3FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 20,
  }
})