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
interface FieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (v: string) => void;
  icon: string;
  keyboardType?: any;
  secure?: boolean;
  autoCapitalize?: any;
}

const Field: React.FC<FieldProps> = ({
  label, placeholder, value, onChangeText,
  icon, keyboardType = 'default', secure = false, autoCapitalize = 'none',
}) => {
  const [focused, setFocused] = useState(false);
  const [showSecure, setShowSecure] = useState(false);

  return (
    <View style={{ marginBottom: 14 }}>
      <Text style={{ fontSize: 11, fontWeight: '700', color: '#7998CD', letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 6 }}>
        {label}
      </Text>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F9FC',
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: focused ? '#3161B2' : '#E8EEF5',
        paddingHorizontal: 14,
        height: 52,
      }}>
        <Icon name={icon} size={18} color={focused ? '#3161B2' : '#A0AEC0'} />
        <TextInput
          style={{ flex: 1, marginLeft: 10, fontSize: 15, color: '#1A2B4A' }}
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
      style={{ flex: 1, backgroundColor: '#F7F9FC' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* ── Header ── */}
      <LinearGradient
        colors={['#1E3F7A', '#3161B2', '#4A74BB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ paddingTop: 56, paddingBottom: 52, paddingHorizontal: 24 }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <ArrowBack />
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>Meu Perfil</Text>
        </View>

        {/* Avatar centralizado que fica "flutuando" */}
        <View style={{ alignItems: 'center' }}>
          <View style={{ position: 'relative' }}>
            <View style={{
              width: 86, height: 86, borderRadius: 43,
              backgroundColor: 'rgba(255,255,255,0.2)',
              alignItems: 'center', justifyContent: 'center',
              borderWidth: 3, borderColor: 'rgba(255,255,255,0.5)',
            }}>
              <Icon name="person" size={44} color="#fff" />
            </View>
            {/* Badge editar */}
            <TouchableOpacity style={{
              position: 'absolute', bottom: 0, right: 0,
              width: 28, height: 28, borderRadius: 14,
              backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
              shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 4, elevation: 4,
            }}>
              <Icon name="camera-alt" size={14} color="#3161B2" />
            </TouchableOpacity>
          </View>
          <Text style={{ color: '#fff', fontSize: 17, fontWeight: '700', marginTop: 10 }}>
            João Silva Souza
          </Text>
          <Text style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, marginTop: 2 }}>
            joao@email.com
          </Text>
        </View>
      </LinearGradient>

      <ScrollView
        style={{ flex: 1, marginTop: -24 }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* ── Card Informações Básicas ── */}
        <View style={{
          backgroundColor: '#fff', borderRadius: 24,
          padding: 20, marginBottom: 16,
          shadowColor: '#3161B2', shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.07, shadowRadius: 16, elevation: 4,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 18 }}>
            <View style={{ width: 32, height: 32, borderRadius: 10, backgroundColor: 'rgba(49,97,178,0.1)', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="person" size={16} color="#3161B2" />
            </View>
            <Text style={{ fontSize: 15, fontWeight: '700', color: '#1A2B4A' }}>
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
        <View style={{
          backgroundColor: '#fff', borderRadius: 24,
          padding: 20, marginBottom: 24,
          shadowColor: '#3161B2', shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.07, shadowRadius: 16, elevation: 4,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 18 }}>
            <View style={{ width: 32, height: 32, borderRadius: 10, backgroundColor: 'rgba(49,97,178,0.1)', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="lock" size={16} color="#3161B2" />
            </View>
            <Text style={{ fontSize: 15, fontWeight: '700', color: '#1A2B4A' }}>
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
            style={{
              height: 54, borderRadius: 18,
              alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 8,
              shadowColor: '#3161B2', shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.3, shadowRadius: 12, elevation: 8,
            }}
          >
            <Icon name="check-circle" size={20} color="#fff" />
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>Salvar Alterações</Text>
          </LinearGradient>
        </Pressable>

        {/* Link logout */}
        <TouchableOpacity
          style={{ alignItems: 'center', marginTop: 20 }}
          onPress={() => Alert.alert('Sair', 'Deseja sair da conta?', [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Sair', style: 'destructive', onPress: () => {} },
          ])}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Icon name="logout" size={16} color="#A83636" />
            <Text style={{ color: '#A83636', fontSize: 14, fontWeight: '600' }}>Sair da conta</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <SideBar />
    </KeyboardAvoidingView>
  );
}
