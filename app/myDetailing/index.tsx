import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PieChart } from 'react-native-gifted-charts';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  const [selectedSlice, setSelectedSlice] = useState<number | null>(null);
  const totalGastos = 3578;

  return (
    <View style={{ flex: 1, backgroundColor: '#F7F9FC' }}>

      {/* Header */}
      <LinearGradient
        colors={['#254E8F', '#3161B2', '#4A74BB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ paddingTop: 52, paddingBottom: 28, paddingHorizontal: 20 }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <ArrowBack />
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>
            Meu Detalhamento
          </Text>
        </View>
      </LinearGradient>

      <ScrollView
        style={{ flex: 1, marginTop: -16 }}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Gráfico Pizza */}
        <View
          style={{
            backgroundColor: '#fff',
            marginHorizontal: 16,
            borderRadius: 24,
            padding: 20,
            marginBottom: 16,
            shadowColor: '#3161B2',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.08,
            shadowRadius: 16,
            elevation: 4,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '700', color: '#1A2B4A', marginBottom: 16 }}>
            Distribuição de Gastos
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            {/* Chart */}
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <PieChart
                data={PIE_DATA}
                radius={80}
                innerRadius={50}
                centerLabelComponent={() => (
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 11, color: '#A0AEC0', fontWeight: '500' }}>Total</Text>
                    <Text style={{ fontSize: 15, color: '#1A2B4A', fontWeight: '800' }}>
                      R${totalGastos.toLocaleString('pt-BR')}
                    </Text>
                  </View>
                )}
              />
            </View>

            {/* Legenda */}
            <View style={{ flex: 1, gap: 10 }}>
              {PIE_DATA.map((item, i) => (
                <View key={i} style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: item.color }} />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12, fontWeight: '600', color: '#1A2B4A' }}>{item.label}</Text>
                    <Text style={{ fontSize: 10, color: '#A0AEC0' }}>{item.value}%</Text>
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
          style={{
            marginHorizontal: 16,
            borderRadius: 20,
            padding: 20,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12, fontWeight: '500', marginBottom: 4 }}>
            Gastos do Mês
          </Text>
          <Text style={{ color: '#fff', fontSize: 28, fontWeight: '800', marginBottom: 16 }}>
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
          <Text style={{ color: 'rgba(255,255,255,0.65)', fontSize: 11, marginTop: 6 }}>
            72% do orçamento utilizado
          </Text>
        </LinearGradient>

        {/* Lista de Transações */}
        <View style={{ paddingHorizontal: 16 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#1A2B4A' }}>Seus Gastos</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 13, color: '#3161B2', fontWeight: '600' }}>Ver todos</Text>
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
