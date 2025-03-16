import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LoginForm } from './login/LoginForm';
import { authStyles } from './style/authStyles';
import { globalStyles } from './style/globalStyles';

export default function LoginScreen()  {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Bem vindo de volta!!!</Text>
      <Text style={globalStyles.subtitle}>
        Olá, você está de volta, preencha seus dados para voltar a gerenciar sua vida financeira!
      </Text>
      <LoginForm />

      <TouchableOpacity onPress={() => alert('Recuperação de senha ainda não implementada')}>
        <Text style={authStyles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
};
