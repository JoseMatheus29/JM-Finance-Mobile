import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

import { mockLogin } from '../../services/mockAuthService';
import { saveToken } from '../../services/storage';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const buttonScale = useRef(new Animated.Value(1)).current;
  const router = useRouter();

  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.96,
      useNativeDriver: true,
      speed: 40,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 40,
      bounciness: 4,
    }).start();
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Campos obrigatórios', 'Preencha seu email e senha para continuar.');
      return;
    }

    setLoading(true);
    try {
      const data = await mockLogin({ email, password });
      await saveToken(data.token);
      router.replace('/dashboard');
    } catch (error: any) {
      Alert.alert('Acesso negado', error.message || 'Email ou senha incorretos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header com Gradient ── */}
        <LinearGradient
          colors={['#254E8F', '#3161B2', '#4A74BB']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="h-64 items-center justify-center"
        >
          {/* Logo */}
          <View className="items-center">
            <View className="w-20 h-20 rounded-2xl bg-white/20 items-center justify-center mb-3">
              <Image
                source={require('../../assets/images/logo-app.png')}
                style={{ width: 56, height: 56, borderRadius: 12 }}
                resizeMode="contain"
              />
            </View>
            <Text className="text-white text-2xl font-bold tracking-wide">
              JM Finance
            </Text>
            <Text className="text-white/70 text-sm mt-1">
              Controle financeiro inteligente
            </Text>
          </View>

          {/* Wave decorator */}
          <View
            className="absolute bottom-0 left-0 right-0 h-10 bg-white"
            style={{ borderTopLeftRadius: 32, borderTopRightRadius: 32 }}
          />
        </LinearGradient>

        {/* ── Formulário ── */}
        <View className="flex-1 bg-white px-6 pt-2 pb-8">

          <Text className="text-2xl font-bold text-primary mb-1">
            Bem-vindo de volta!
          </Text>
          <Text className="text-gray-400 text-sm mb-8 leading-5">
            Preencha seus dados para continuar gerenciando suas finanças
          </Text>

          {/* Campo Email */}
          <View className="mb-4">
            <Text className="text-xs font-semibold text-primary-light mb-2 uppercase tracking-wider">
              Email
            </Text>
            <View
              className={`flex-row items-center bg-surface rounded-2xl px-4 h-14 border-2 ${
                emailFocused ? 'border-primary' : 'border-transparent'
              }`}
            >
              <Icon name="email" size={18} color={emailFocused ? '#3161B2' : '#A0AEC0'} />
              <TextInput
                className="flex-1 ml-3 text-gray-700 text-base"
                placeholder="seu@email.com"
                placeholderTextColor="#CBD5E0"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
            </View>
          </View>

          {/* Campo Senha */}
          <View className="mb-2">
            <Text className="text-xs font-semibold text-primary-light mb-2 uppercase tracking-wider">
              Senha
            </Text>
            <View
              className={`flex-row items-center bg-surface rounded-2xl px-4 h-14 border-2 ${
                passwordFocused ? 'border-primary' : 'border-transparent'
              }`}
            >
              <Icon name="lock" size={18} color={passwordFocused ? '#3161B2' : '#A0AEC0'} />
              <TextInput
                className="flex-1 ml-3 text-gray-700 text-base"
                placeholder="••••••••"
                placeholderTextColor="#CBD5E0"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className="p-1"
              >
                <Icon
                  name={showPassword ? 'visibility' : 'visibility-off'}
                  size={20}
                  color="#A0AEC0"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Esqueceu a senha */}
          <TouchableOpacity
            className="self-end mb-8"
            onPress={() => Alert.alert('Em breve', 'Recuperação de senha será implementada em breve.')}
          >
            <Text className="text-primary text-sm font-semibold">
              Esqueceu sua senha?
            </Text>
          </TouchableOpacity>

          {/* Botão Entrar */}
          <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
            <Pressable
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={handleLogin}
              disabled={loading}
            >
              <LinearGradient
                colors={loading ? ['#A0AEC0', '#CBD5E0'] : ['#3161B2', '#4A74BB']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="h-14 rounded-2xl items-center justify-center"
                style={{ shadowColor: '#3161B2', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 12, elevation: 8 }}
              >
                {loading ? (
                  <ActivityIndicator color="#FFF" size="small" />
                ) : (
                  <View className="flex-row items-center gap-2">
                    <Text className="text-white text-base font-bold tracking-wide">
                      Entrar na conta
                    </Text>
                    <Icon name="arrow-forward" size={18} color="white" />
                  </View>
                )}
              </LinearGradient>
            </Pressable>
          </Animated.View>

          {/* Rodapé */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-400 text-sm">Ainda não tem conta? </Text>
            <TouchableOpacity onPress={() => Alert.alert('Em breve', 'Cadastro será implementado em breve.')}>
              <Text className="text-primary text-sm font-bold">Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
