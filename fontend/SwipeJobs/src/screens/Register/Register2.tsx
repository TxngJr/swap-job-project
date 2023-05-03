import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Logo from '../../assets/Logo'
import IconArrowBack from '../../assets/IconArrowBack'


type Props = {
  navigation: any
}

const Register2 = ({ navigation }: Props) => {
  const handleSubmitEmployee = async () => {
    try {
      navigation.navigate('Login')
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmitEmployer = async () => {
    try {
      navigation.navigate('Login')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View >
      <View style={{ alignItems: 'flex-start', paddingLeft: 10, paddingTop: 10 }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <IconArrowBack />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>
          คุณมาทำอะไร
        </Text>
        <View style={styles.buttonContainer}>
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity style={styles.button} onPress={handleSubmitEmployee}>
              <Text style={styles.textButton}>หางาน</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 40 }}>
            <TouchableOpacity style={styles.button} onPress={handleSubmitEmployer}>
              <Text style={styles.textButton}>หาพนักงาน</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Register2

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