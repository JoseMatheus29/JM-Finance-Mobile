import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SideBar from '../components/sidebar';
import GradientButton from '../components/ui/GradientButton';
import ProfileHeader from './components/ProfileHeader';
import BasicInfoForm from './components/BasicInfoForm';
import PasswordForm from './components/PasswordForm';

export default function EditAcount() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSalvar = () => {
    Alert.alert('Salvo!', 'Suas informações foram atualizadas com sucesso.');
  };

  const handleLogout = () => {
    Alert.alert('Sair', 'Deseja sair da conta?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sair', style: 'destructive', onPress: () => {} },
    ]);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-[#F7F9FC]"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ProfileHeader name="João Silva Souza" email="joao@email.com" />

      <ScrollView
        className="flex-1 -mt-6"
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <BasicInfoForm
          nome={nome} setNome={setNome}
          email={email} setEmail={setEmail}
          telefone={telefone} setTelefone={setTelefone}
        />

        <PasswordForm
          senhaAtual={senhaAtual} setSenhaAtual={setSenhaAtual}
          novaSenha={novaSenha} setNovaSenha={setNovaSenha}
          confirmarSenha={confirmarSenha} setConfirmarSenha={setConfirmarSenha}
        />

        <GradientButton title="Salvar Alterações" onPress={handleSalvar} />

        <TouchableOpacity className="items-center mt-5" onPress={handleLogout}>
          <View className="flex-row items-center gap-1.5">
            <Icon name="logout" size={16} color="#A83636" />
            <Text className="text-[#A83636] text-sm font-semibold">Sair da conta</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <SideBar />
    </KeyboardAvoidingView>
  );
}
