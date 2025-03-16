import api from './api';

interface LoginData {
  email: string;
  password: string;
}

export const  login = async (data: LoginData) => {
  try {
      const response = await api.post('/auth/login', data);
      return response.data;
  } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao fazer login.');
  }
};

export const register = async (data: LoginData) => {
  try {
    const response = await api.post('/auth/register', data);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao registrar usuário.');
  }
};
