import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PieChart } from 'react-native-gifted-charts';
import * as Progress from 'react-native-progress';

import ArrowBack from '../components/arrowBack';
import SideBar from '../components/sidebar';
import CardHorizontal from '../components/cardHorizontal';

const MOCK_TRANSACTIONS = [
  { id: 1, name: 'Shopping', date: '10 jan 2022', amount: -200.80, category: 'Lazer', type: 'expense' as const },
  { id: 2, name: 'Mercado', date: '12 jan 2022', amount: 100.80, category: 'Alimentação', type: 'income' as const },
  { id: 3, name: 'Carro', date: '15 jan 2022', amount: -417.80, category: 'Transporte', type: 'expense' as const },
];

const PIE_DATA = [
  { value: 40, color: '#3161B2', label: 'Transporte' },
  { value: 35, color: '#7998CD', label: 'Lazer' },
  { value: 25, color: '#4A74BB', label: 'Outros' },
];

export default function MyDetailing() {
  const totalGastos = 3578;

  return (
    <View className="flex-1 bg-[#F7F9FC]">
      {/* Header */}
      <LinearGradient
        colors={['#254E8F', '#3161B2', '#4A74BB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="pt-[52px] pb-7 px-5"
      >
        <View className="flex-row items-center gap-3">
          <ArrowBack />
          <Text className="text-white text-xl font-bold">Meu Detalhamento</Text>
        </View>
      </LinearGradient>

      <ScrollView
        className="flex-1 -mt-4"
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Gráfico Pizza */}
        <View className="bg-white mx-4 rounded-3xl p-5 mb-4 shadow-lg shadow-[#3161B2]/10 elevation-4">
          <Text className="text-sm font-bold text-[#1A2B4A] mb-4">
            Distribuição de Gastos
          </Text>

          <View className="flex-row items-center gap-5">
            {/* Chart */}
            <View className="items-center justify-center">
              <PieChart
                data={PIE_DATA}
                radius={80}
                innerRadius={50}
                centerLabelComponent={() => (
                  <View className="items-center">
                    <Text className="text-[11px] text-[#A0AEC0] font-medium">Total</Text>
                    <Text className="text-[15px] text-[#1A2B4A] font-extrabold">
                      R${totalGastos.toLocaleString('pt-BR')}
                    </Text>
                  </View>
                )}
              />
            </View>

            {/* Legenda */}
            <View className="flex-1 gap-2.5">
              {PIE_DATA.map((item, i) => (
                <View key={i} className="flex-row items-center gap-2">
                  <View className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <View className="flex-1">
                    <Text className="text-xs font-semibold text-[#1A2B4A]">{item.label}</Text>
                    <Text className="text-[10px] text-[#A0AEC0]">{item.value}%</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Card Gastos do Mês */}
        <LinearGradient
          colors={['#3161B2', '#4A74BB']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="mx-4 rounded-[20px] p-5 mb-5"
        >
          <Text className="text-white/75 text-xs font-medium mb-1">
            Gastos do Mês
          </Text>
          <Text className="text-white text-[28px] font-extrabold mb-4">
            R$ {totalGastos.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </Text>
          <Progress.Bar
            progress={0.72}
            width={null}
            color="rgba(255,255,255,0.9)"
            unfilledColor="rgba(255,255,255,0.25)"
            borderWidth={0}
            borderRadius={4}
            height={6}
          />
          <Text className="text-white/65 text-[11px] mt-1.5">
            72% do orçamento utilizado
          </Text>
        </LinearGradient>

        {/* Lista de Transações */}
        <View className="px-4">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-base font-bold text-[#1A2B4A]">Seus Gastos</Text>
            <TouchableOpacity>
              <Text className="text-[13px] text-[#3161B2] font-semibold">Ver todos</Text>
            </TouchableOpacity>
          </View>
          {MOCK_TRANSACTIONS.map((t) => (
            <CardHorizontal
              key={t.id}
              name={t.name}
              date={t.date}
              amount={t.amount}
              category={t.category}
              type={t.type}
            />
          ))}
        </View>
      </ScrollView>

      <SideBar />
    </View>
  );
}
