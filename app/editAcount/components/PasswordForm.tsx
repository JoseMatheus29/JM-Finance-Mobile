import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Field from '../../components/ui/Field';

interface PasswordFormProps {
  senhaAtual: string;
  setSenhaAtual: (v: string) => void;
  novaSenha: string;
  setNovaSenha: (v: string) => void;
  confirmarSenha: string;
  setConfirmarSenha: (v: string) => void;
}

export default function PasswordForm({
  senhaAtual, setSenhaAtual, novaSenha, setNovaSenha, confirmarSenha, setConfirmarSenha
}: PasswordFormProps) {
  return (
    <View className="bg-white rounded-[24px] p-5 mb-6 shadow-lg shadow-[#3161B2]/10 elevation-4">
      <View className="flex-row items-center gap-2 mb-4">
        <View className="w-8 h-8 rounded-xl bg-[#3161B2]/10 items-center justify-center">
          <Icon name="lock" size={16} color="#3161B2" />
        </View>
        <Text className="text-[15px] font-bold text-[#1A2B4A]">Alterar Senha</Text>
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
  );
}
