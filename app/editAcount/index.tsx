import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ArrowBack from '../components/arrowBack';
import SideBar from '../components/sidebar';

// ── Campo de Input reutilizável ──────────────────────────────
import { FieldProps } from './editAcount-type';

const Field: React.FC<FieldProps> = ({
  label, placeholder, value, onChangeText,
  icon, keyboardType = 'default', secure = false, autoCapitalize = 'none',
}) => {
  const [focused, setFocused] = useState(false);
  const [showSecure, setShowSecure] = useState(false);

  return (
    <View className="mb-3.5">
      <Text className="text-[11px] font-bold text-[#7998CD] tracking-[0.8px] uppercase mb-1.5">
        {label}
      </Text>
      <View className={`flex-row items-center bg-[#F7F9FC] rounded-2xl border-[1.5px] px-3.5 h-[52px] ${focused ? 'border-[#3161B2]' : 'border-[#E8EEF5]'}`}>
        <Icon name={icon} size={18} color={focused ? '#3161B2' : '#A0AEC0'} />
        <TextInput
          className="flex-1 ml-2.5 text-[15px] text-[#1A2B4A]"
          placeholder={placeholder}
          placeholderTextColor="#C0CCDA"
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secure && !showSecure}
          autoCapitalize={autoCapitalize}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {secure && (
          <TouchableOpacity onPress={() => setShowSecure(!showSecure)}>
            <Icon name={showSecure ? 'visibility' : 'visibility-off'} size={18} color="#A0AEC0" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// ── Tela Principal ───────────────────────────────────────────
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

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-[#F7F9FC]"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* ── Header ── */}
      <LinearGradient
        colors={['#1E3F7A', '#3161B2', '#4A74BB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="pt-14 pb-[52px] px-6"
      >
        <View className="flex-row items-center gap-3 mb-6">
          <ArrowBack />
          <Text className="text-white text-xl font-bold">Meu Perfil</Text>
        </View>

        {/* Avatar centralizado que fica "flutuando" */}
        <View className="items-center">
          <View className="relative">
            <View className="w-[86px] h-[86px] rounded-full bg-white/20 items-center justify-center border-4 border-white/50">
              <Icon name="person" size={44} color="#fff" />
            </View>
            {/* Badge editar */}
            <TouchableOpacity className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-white items-center justify-center shadow-md elevation-4">
              <Icon name="camera-alt" size={14} color="#3161B2" />
            </TouchableOpacity>
          </View>
          <Text className="text-white text-[17px] font-bold mt-2.5">
            João Silva Souza
          </Text>
          <Text className="text-white/65 text-[13px] mt-0.5">
            joao@email.com
          </Text>
        </View>
      </LinearGradient>

      <ScrollView
        className="flex-1 -mt-6"
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* ── Card Informações Básicas ── */}
        <View className="bg-white rounded-[24px] p-5 mb-4 shadow-lg shadow-[#3161B2]/10 elevation-4">
          <View className="flex-row items-center gap-2 mb-4">
            <View className="w-8 h-8 rounded-xl bg-[#3161B2]/10 items-center justify-center">
              <Icon name="person" size={16} color="#3161B2" />
            </View>
            <Text className="text-[15px] font-bold text-[#1A2B4A]">
              Informações Básicas
            </Text>
          </View>

          <Field
            label="Nome completo"
            placeholder="João Silva Souza"
            value={nome}
            onChangeText={setNome}
            icon="badge"
            autoCapitalize="words"
          />
          <Field
            label="Email"
            placeholder="joao@email.com"
            value={email}
            onChangeText={setEmail}
            icon="email"
            keyboardType="email-address"
          />
          <Field
            label="Telefone"
            placeholder="(85) 99999-9999"
            value={telefone}
            onChangeText={setTelefone}
            icon="phone"
            keyboardType="phone-pad"
          />
        </View>

        {/* ── Card Alterar Senha ── */}
        <View className="bg-white rounded-[24px] p-5 mb-6 shadow-lg shadow-[#3161B2]/10 elevation-4">
          <View className="flex-row items-center gap-2 mb-4">
            <View className="w-8 h-8 rounded-xl bg-[#3161B2]/10 items-center justify-center">
              <Icon name="lock" size={16} color="#3161B2" />
            </View>
            <Text className="text-[15px] font-bold text-[#1A2B4A]">
              Alterar Senha
            </Text>
          </View>

          <Field
            label="Senha atual"
            placeholder="••••••••••••"
            value={senhaAtual}
            onChangeText={setSenhaAtual}
            icon="lock-outline"
            secure
          />
          <Field
            label="Nova senha"
            placeholder="••••••••••••"
            value={novaSenha}
            onChangeText={setNovaSenha}
            icon="lock"
            secure
          />
          <Field
            label="Confirmar nova senha"
            placeholder="••••••••••••"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            icon="lock"
            secure
          />
        </View>

        {/* ── Botão Salvar ── */}
        <Pressable onPress={handleSalvar}>
          <LinearGradient
            colors={['#3161B2', '#4A74BB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="h-[54px] rounded-2xl items-center justify-center flex-row gap-2 shadow-xl shadow-[#3161B2]/30 elevation-8"
          >
            <Icon name="check-circle" size={20} color="#fff" />
            <Text className="text-white text-base font-bold">Salvar Alterações</Text>
          </LinearGradient>
        </Pressable>

        {/* Link logout */}
        <TouchableOpacity
          className="items-center mt-5"
          onPress={() => Alert.alert('Sair', 'Deseja sair da conta?', [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Sair', style: 'destructive', onPress: () => {} },
          ])}
        >
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
