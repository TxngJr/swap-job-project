import axios from 'axios'

interface AuthResponse {
  token: string,
}

interface LoginParams {
  email: string;
  password: string;
}

const API_BASE_URL = 'https://secure-ravine-48201.herokuapp.com'

export const login = async ({ email, password }: LoginParams): Promise<string> => {
  try {
    const response = await axios.post<AuthResponse>(`${API_BASE_URL}/api/user/login`, {
      email,
      password
    })
    const {token} = response.data
    console.log(token)
    return token;
  }catch (error){
    throw console.log(error)
  } 
}