import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CardType } from '../wallet-type';

interface WalletSummaryProps {
  activeCard: CardType;
}

export default function WalletSummary({ activeCard }: WalletSummaryProps) {
  return (
    <View className="mx-4 bg-white rounded-[20px] p-4 mb-5 flex-row justify-around border border-[#EBF1F6]">
      {[
        { label: 'Receitas', value: 'R$ 1.250', icon: 'arrow-downward', color: '#36A83A', bg: 'rgba(54,168,58,0.1)' },
        { label: 'Despesas', value: 'R$ 618', icon: 'arrow-upward', color: '#A83636', bg: 'rgba(168,54,54,0.1)' },
        { label: 'Saldo', value: `R$ ${activeCard.balance.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}`, icon: 'account-balance', color: '#3161B2', bg: 'rgba(49,97,178,0.1)' },
      ].map((stat, i) => (
        <View key={i} className="items-center">
          <View className="w-9 h-9 rounded-xl items-center justify-center mb-1.5" style={{ backgroundColor: stat.bg }}>
            <Icon name={stat.icon} size={16} color={stat.color} />
          </View>
          <Text className="text-[13px] font-bold text-[#1A2B4A]">{stat.value}</Text>
          <Text className="text-[10px] text-[#A0AEC0] mt-0.5">{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}
