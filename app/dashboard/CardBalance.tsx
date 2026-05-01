import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface BalanceCard {
  valueTot: number;
  valueEnt: number;
  valueSai: number;
}

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

export const CardBalance: React.FC<BalanceCard> = ({ valueTot, valueEnt, valueSai }) => {
  return (
    <LinearGradient
      colors={['rgba(49,97,178,0.08)', '#EBF1F6']}
      className="rounded-[24px] p-6 border border-[#D4E1EF]"
    >
      {/* Saldo principal */}
      <View className="mb-5">
        <Text className="text-xs text-[#7998CD] font-semibold tracking-[0.8px] uppercase mb-1">
          Saldo Mensal
        </Text>
        <Text className="text-[32px] font-extrabold text-[#1A2B4A] tracking-tight">
          R$ {formatCurrency(valueTot)}
        </Text>
      </View>

      {/* Divisor */}
      <View className="h-[1px] bg-[#D4E1EF] mb-4" />

      {/* Entradas e Saídas */}
      <View className="flex-row justify-between">
        {/* Entradas */}
        <View className="flex-1">
          <View className="flex-row items-center gap-1.5 mb-1">
            <View className="w-7 h-7 rounded-full bg-[rgba(54,168,58,0.12)] items-center justify-center">
              <Icon name="arrow-downward" size={14} color="#36A83A" />
            </View>
            <Text className="text-xs text-[#718096] font-medium">Entradas</Text>
          </View>
          <Text className="text-lg font-bold text-[#36A83A]">
            R$ {formatCurrency(valueEnt)}
          </Text>
        </View>

        {/* Separador vertical */}
        <View className="w-[1px] bg-[#D4E1EF] mx-4" />

        {/* Saídas */}
        <View className="flex-1">
          <View className="flex-row items-center gap-1.5 mb-1">
            <View className="w-7 h-7 rounded-full bg-[rgba(168,54,54,0.12)] items-center justify-center">
              <Icon name="arrow-upward" size={14} color="#A83636" />
            </View>
            <Text className="text-xs text-[#718096] font-medium">Saídas</Text>
          </View>
          <Text className="text-lg font-bold text-[#A83636]">
            R$ {formatCurrency(valueSai)}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default CardBalance;
