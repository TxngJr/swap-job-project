import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import IconArrowBack from '../assets/IconArrowBack'
import Logo from '../assets/Logo'
import IconAlternateEmail from '../assets/IconAlternateEmail'
import IconPassword from '../assets/IconPassword'


type Props = {
  navigation: any
}

const Login = ({ navigation }: Props) => {
  const onPressLogin = async () => {
    try {
      navigation.navigate('HomeNavigator')
    } catch (error) {
      console.log(error)
    }
  }
  const onPressRegister = async () => {
    try {
      navigation.navigate('Register')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={()=>{navigation.navigate('Register')}} >
          <IconArrowBack />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>
          เข้าสู่ระบบ
        </Text>
        <View style={styles.textContainer}>
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
          <View style={styles.buttonContainer}>
            <View>
              <TouchableOpacity style={styles.button} onPress={onPressLogin}>
                <Text style={styles.textButton}>เข้าสู่ระบบ</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity onPress={onPressRegister}>
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
  backButtonContainer: {
    marginTop: 5,
    marginLeft: 5,
    alignItems: 'flex-start',
  },
  backButton: {
    width: 48,
    height: 48,
  },
  logoContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    marginHorizontal: 15,
  },
  textHeader: {
    fontSize: 50,
    fontFamily: 'kanit'
  },
  inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputText: {
    height: 40,
    width: 300,
    borderBottomWidth: 2,
    borderBottomColor: '#BAB7B7',
    borderBottomStartRadius: 100,
    paddingLeft: 10,
  },
  buttonContainer: {
    marginTop: 150,
    alignItems: 'center',
    justifyContent: 'space-between'
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