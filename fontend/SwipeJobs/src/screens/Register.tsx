import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import IconArrowBack from '../assets/IconArrowBack'
import Logo from '../assets/Logo'
import IconAlternateEmail from '../assets/IconAlternateEmail'
import IconPassword from '../assets/IconPassword'
import IconCall from '../assets/IconCall'


type Props = {
  navigation: any
}

const Register = ({ navigation }: Props) => {
  const onPressLogin = async () => {
    try {
      navigation.navigate('Login')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View >
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={()=>{navigation.navigate('Login')}} >
          <IconArrowBack />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>
          สมัครสมาชิก
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
          <View style={styles.inputContainer}>
            <IconPassword />
            <TextInput
              style={styles.inputText}
              secureTextEntry={true}
              placeholder="ยืนยันรหัสผ่าน"
              keyboardType="default"
            />
          </View>
          <View style={styles.inputContainer}>
            <IconCall />
            <TextInput
              style={styles.inputText}
              placeholder="เบอร์โทรศัพท์"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.buttonContainer}>
            <View>
              <TouchableOpacity style={styles.button} onPress={onPressLogin}>
                <Text style={styles.textButton}>สมัครสมาชิก</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity onPress={onPressLogin}>
                <Text>มีบัญชีอยู่แล้ว</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </View>
  )
}

export default Register

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
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between'
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