import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ArrowBack from '../components/arrowBack';
import SideBar from '../components/sidebar';

export default function DetailsSpends() {
  const isIncome = false; // Mock
  const amountColor = isIncome ? '#36A83A' : '#A83636';
  const prefix = isIncome ? '+' : '-';

  return (
    <View className="flex-1 bg-[#F7F9FC]">
      {/* Header */}
      <LinearGradient
        colors={['#1E3F7A', '#3161B2', '#4A74BB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="pt-14 pb-[52px] px-6"
      >
        <View className="flex-row items-center gap-3 mb-6">
          <ArrowBack />
          <Text className="text-white text-xl font-bold">Detalhes Transação</Text>
        </View>

        {/* Resumo no Header */}
        <View className="items-center">
          <View className="w-[72px] h-[72px] rounded-full bg-white/20 items-center justify-center mb-3">
            <Icon name="restaurant" size={32} color="#fff" />
          </View>
          <Text className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-1">
            Mercado
          </Text>
          <Text className="text-white text-[32px] font-extrabold tracking-tight">
            {prefix} R$ 100,00
          </Text>
        </View>
      </LinearGradient>

      {/* Card Detalhes */}
      <ScrollView
        className="flex-1 -mt-6"
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-white rounded-[24px] p-6 shadow-lg shadow-[#3161B2]/10 elevation-4">
          
          <View className="flex-row justify-between items-center py-4 border-b border-[#EBF1F6]">
            <Text className="text-sm font-bold text-[#A0AEC0]">Tipo</Text>
            <Text className="text-base font-bold text-[#1A2B4A]">Crédito</Text>
          </View>

          <View className="flex-row justify-between items-center py-4 border-b border-[#EBF1F6]">
            <Text className="text-sm font-bold text-[#A0AEC0]">Descrição</Text>
            <Text className="text-base font-bold text-[#1A2B4A]">Lanche de domingo</Text>
          </View>

          <View className="flex-row justify-between items-center py-4 border-b border-[#EBF1F6]">
            <Text className="text-sm font-bold text-[#A0AEC0]">Banco</Text>
            <Text className="text-base font-bold text-[#1A2B4A]">Nubank</Text>
          </View>

          <View className="flex-row justify-between items-center py-4">
            <Text className="text-sm font-bold text-[#A0AEC0]">Data</Text>
            <Text className="text-base font-bold text-[#1A2B4A]">10 de Jan. 2022</Text>
          </View>

        </View>
      </ScrollView>

      <SideBar />
    </View>
  );
}
