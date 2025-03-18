import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, Image } from 'react-native';
import { authStyles } from './authStyles';
import { globalStyles } from '../style/globalStyles';

import { mockLogin } from '../../services/mockAuthService';
import { saveToken } from '../../services/storage';
import { useRouter } from 'expo-router';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Preencha todos os campos.');
            return;
        }

        setLoading(true);
        try {
            const data = await mockLogin({ email, password });
            await saveToken(data.token);
            Alert.alert('Sucesso', 'Login realizado com sucesso!');
            router.push('/dashboard');
        } catch (error: any) {
            Alert.alert('Erro', error.message || 'Erro ao fazer login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={globalStyles.pageConfig}>
            <View style={globalStyles.formContainer}>
                <Text style={globalStyles.title}>Bem vindo de volta!</Text>
                <Text style={globalStyles.subtitle}>
                    Olá, preencha seus dados para voltar a gerenciar sua vida financeira!
                </Text>
                <View style={[globalStyles.container, authStyles.containerLogin]}>
                <Text style={globalStyles.label}>Email</Text>
                    <TextInput
                        placeholder="Digite seu email"
                        placeholderTextColor="#ccc"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={[globalStyles.container, authStyles.containerLogin]}>
                <Text style={globalStyles.label}>Senha</Text>
                    <View style={authStyles.passwordContainer}>
                        <TextInput
                            placeholder="Digite sua senha"
                            placeholderTextColor="#ccc"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Text style={authStyles.showPassword}>
                                <Image source={require('../../assets/images/Show.png')} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => alert('Recuperação de senha ainda não implementada')}>
                    <Text style={authStyles.forgotPassword}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={globalStyles.button} onPress={handleLogin} disabled={loading}>
                {loading ? (
                    <ActivityIndicator color="#FFF" />
                ) : (
                    <Text style={globalStyles.buttonText}>Entrar</Text>
                )}
            </TouchableOpacity>

        </View>
    );
};


export default LoginForm;
