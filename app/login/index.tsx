import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LoginForm } from './LoginForm';
import { styles } from './styles';

const LoginScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo de volta!!!</Text>
      <Text style={styles.subtitle}>
        Olá, você está de volta, preencha seus dados para voltar a gerenciar sua vida financeira!
      </Text>
      <LoginForm />

      <TouchableOpacity onPress={() => alert('Recuperação de senha ainda não implementada')}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
