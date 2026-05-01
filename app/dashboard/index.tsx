import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
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
    <View style={{ flex: 1, backgroundColor: '#F7F9FC' }}>

      {/* ── Header Gradient ── */}
      <LinearGradient
        colors={['#1E3F7A', '#3161B2', '#4A74BB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ paddingTop: 56, paddingBottom: 40, paddingHorizontal: 24 }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={{ color: 'rgba(255,255,255,0.70)', fontSize: 14, marginBottom: 4 }}>
              Bem-vindo de volta 👋
            </Text>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: '800', letterSpacing: -0.3 }}>
              Dashboard
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push('/editAcount')}
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: 'rgba(255,255,255,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon name="person" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* ── Scroll com card sobreposição ── */}
      <ScrollView
        style={{ flex: 1, marginTop: -20 }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 0, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Resumo */}
        <View style={{ marginBottom: 28 }}>
          <CardBalance
            valueTot={31627}
            valueEnt={10512}
            valueSai={3123}
          />
        </View>

        {/* Cartões */}
        <View style={{ marginBottom: 28 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <Text style={{ fontSize: 17, fontWeight: '700', color: '#1A2B4A' }}>Meus Cartões</Text>
            <TouchableOpacity onPress={() => router.push('/wallet')}>
              <Text style={{ fontSize: 13, color: '#3161B2', fontWeight: '600' }}>Ver todos</Text>
            </TouchableOpacity>
          </View>
          <Card
            cardName="Cartão 01"
            cardNumber="****333"
            expensesAmount={3578}
          />
        </View>

        {/* Categorias */}
        <View style={{ marginBottom: 12 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <Text style={{ fontSize: 17, fontWeight: '700', color: '#1A2B4A' }}>Categorias</Text>
            <TouchableOpacity onPress={() => router.push('/myDetailing')}>
              <Text style={{ fontSize: 13, color: '#3161B2', fontWeight: '600' }}>Ver detalhes</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <CategoryCard name="Transporte" value={1800} total={5000} />
            <CategoryCard name="Lazer" value={1200} total={5000} />
          </View>
        </View>
      </ScrollView>

      <SideBar />
    </View>
  );
}
