import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LoginForm } from './login/LoginForm';
import { authStyles } from './login/authStyles';
import { globalStyles } from './style/globalStyles';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={globalStyles.pageConfig}>
      <Text style={globalStyles.sectionTitle}>Login</Text>
       
      <LoginForm />

   
    </View>
  );
};
