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
      style={{
        borderRadius: 24,
        padding: 24,
        borderWidth: 1,
        borderColor: '#D4E1EF',
      }}
    >
      {/* Saldo principal */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 12, color: '#7998CD', fontWeight: '600', letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 4 }}>
          Saldo Mensal
        </Text>
        <Text style={{ fontSize: 32, fontWeight: '800', color: '#1A2B4A', letterSpacing: -0.5 }}>
          R$ {formatCurrency(valueTot)}
        </Text>
      </View>

      {/* Divisor */}
      <View style={{ height: 1, backgroundColor: '#D4E1EF', marginBottom: 16 }} />

      {/* Entradas e Saídas */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* Entradas */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <View style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: 'rgba(54,168,58,0.12)', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="arrow-downward" size={14} color="#36A83A" />
            </View>
            <Text style={{ fontSize: 12, color: '#718096', fontWeight: '500' }}>Entradas</Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#36A83A' }}>
            R$ {formatCurrency(valueEnt)}
          </Text>
        </View>

        {/* Separador vertical */}
        <View style={{ width: 1, backgroundColor: '#D4E1EF', marginHorizontal: 16 }} />

        {/* Saídas */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <View style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: 'rgba(168,54,54,0.12)', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="arrow-upward" size={14} color="#A83636" />
            </View>
            <Text style={{ fontSize: 12, color: '#718096', fontWeight: '500' }}>Saídas</Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#A83636' }}>
            R$ {formatCurrency(valueSai)}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default CardBalance;
