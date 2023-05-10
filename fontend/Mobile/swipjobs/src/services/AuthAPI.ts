import AsyncStorage from '@react-native-async-storage/async-storage'
import axios, { AxiosResponse } from 'axios'

// interface AuthResponse {
//   token: string,

// }

type LoginParams = {
  email: string
  password: string
}

type LoginResponse = {
  token: string
}

type RegisterParams = {
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  birthDay: string
  height: string
  weight: string
  nationality: string
  isEmployee?: boolean
  isEmployer?: boolean
}

type RegisterResponse = {
  msg: string
}



const API_BASE_URL = 'https://secure-ravine-48201.herokuapp.com'

export const login = async ({ email, password }: LoginParams): Promise<string> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post<LoginResponse>(`${API_BASE_URL}/api/user/login`, {
      email,
      password
    })
    const { token } = response.data
    return token
  } catch (error) {
    console.error('Login error:', error);
    throw error
  }
}

export const register = async ({ firstName, lastName, email, password, phone, birthDay, height, weight, nationality, isEmployee = false, isEmployer = false }: RegisterParams): Promise<string | null> => {
  try {
    if(!isEmployee && !isEmployer){
      await AsyncStorage.clear();
      return 'Hack'
    }
    if(isEmployee && isEmployer){
      await AsyncStorage.clear();
      return 'Hack'
    }
    const response: AxiosResponse<RegisterResponse> = await axios.post<RegisterResponse>(`${API_BASE_URL}/api/user/register`, {
      firstName,
      lastName,
      email,
      password,
      phone,
      birthDay,
      height,
      weight,
      nationality,
      isEmployee,
      isEmployer
    })
    const { msg } = response.data
    return msg
  } catch (error) {
    console.error('Register error:', error);
    return null;
  }
}