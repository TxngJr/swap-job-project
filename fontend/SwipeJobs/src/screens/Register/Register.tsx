import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Logo from '../../assets/Logo'
import IconAlternateEmail from '../../assets/IconAlternateEmail'
import IconPassword from '../../assets/IconPassword'
import IconCall from '../../assets/IconCall'


type Props = {
  navigation: any,
}

const Register = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleSubmit = async () => {
    try {
      navigation.navigate('Register1', { email, password, confirmPassword, phone, })
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmitLogin = async () => {
    try {
      navigation.replace('Login')
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
          สมัครสมาชิก
        </Text>
        <View style={[styles.textContainer, { marginTop: 5 }]}>
          <View style={styles.inputContainer}>
            <IconAlternateEmail />
            <TextInput
              style={styles.inputText}
              placeholder="อีเมล"
              keyboardType="default"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <IconPassword />
            <TextInput
              style={styles.inputText}
              secureTextEntry={true}
              placeholder="รหัสผ่าน"
              keyboardType="default"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.inputContainer}>
            <IconPassword />
            <TextInput
              style={styles.inputText}
              secureTextEntry={true}
              placeholder="ยืนยันรหัสผ่าน"
              keyboardType="default"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          <View style={styles.inputContainer}>
            <IconCall />
            <TextInput
              style={styles.inputText}
              placeholder="เบอร์โทรศัพท์"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>
          <View style={styles.buttonContainer}>
            <View>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.textButton}>สมัครสมาชิก</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15 }}>
              <TouchableOpacity onPress={handleSubmitLogin}>
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
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-around',
  },
  inputText: {
    height: 40,
    width: 285,
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