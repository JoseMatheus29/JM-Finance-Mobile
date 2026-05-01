import React from 'react';
import { View } from 'react-native';
import { LoginForm } from './login/LoginForm';

export default function LoginScreen() {
  return (
    <View className="flex-1 bg-white">
      <LoginForm />
    </View>
  );
}
