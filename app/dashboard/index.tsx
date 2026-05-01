import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

import CardBalance from './CardBalance';
import CategoryCard from './CategoryCard';
import Card from '../components/card';
import SideBar from '../components/sidebar';

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#F7F9FC]">

      {/* ── Header Gradient ── */}
      <LinearGradient
        colors={['#1E3F7A', '#3161B2', '#4A74BB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="pt-14 pb-10 px-6"
      >
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-white/70 text-sm mb-1">
              Bem-vindo de volta 👋
            </Text>
            <Text className="text-white text-2xl font-extrabold tracking-tight">
              Dashboard
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push('/editAcount')}
            className="w-11 h-11 rounded-full bg-white/20 items-center justify-center"
          >
            <Icon name="person" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* ── Scroll com card sobreposição ── */}
      <ScrollView
        className="flex-1 -mt-5"
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 0, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Resumo */}
        <View className="mb-7">
          <CardBalance
            valueTot={31627}
            valueEnt={10512}
            valueSai={3123}
          />
        </View>

        {/* Cartões */}
        <View className="mb-7">
          <View className="flex-row justify-between items-center mb-3.5">
            <Text className="text-[17px] font-bold text-[#1A2B4A]">Meus Cartões</Text>
            <TouchableOpacity onPress={() => router.push('/wallet')}>
              <Text className="text-[13px] text-[#3161B2] font-semibold">Ver todos</Text>
            </TouchableOpacity>
          </View>
          <Card
            cardName="Cartão 01"
            cardNumber="****333"
            expensesAmount={3578}
          />
        </View>

        {/* Categorias */}
        <View className="mb-3">
          <View className="flex-row justify-between items-center mb-3.5">
            <Text className="text-[17px] font-bold text-[#1A2B4A]">Categorias</Text>
            <TouchableOpacity onPress={() => router.push('/myDetailing')}>
              <Text className="text-[13px] text-[#3161B2] font-semibold">Ver detalhes</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row gap-3">
            <CategoryCard name="Transporte" value={1800} total={5000} />
            <CategoryCard name="Lazer" value={1200} total={5000} />
          </View>
        </View>
      </ScrollView>

      <SideBar />
    </View>
  );
}
