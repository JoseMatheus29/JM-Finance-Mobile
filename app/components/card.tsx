import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CardValues {
  cardName: string;
  cardNumber: string;
  expensesAmount: number;
  backgroundColor?: string;
  style?: ViewStyle;
  isSelected?: boolean;
}

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

export const Card: React.FC<CardValues> = ({
  cardName,
  cardNumber,
  expensesAmount,
  backgroundColor,
  style,
  isSelected,
}) => {
  const baseColor = backgroundColor ?? '#3161B2';

  // Gera cor mais clara para gradient baseado na cor base
  const lighterColor = backgroundColor ?? '#4A74BB';

  return (
    <View
      style={[
        {
          borderRadius: 24,
          overflow: 'hidden',
          shadowColor: baseColor,
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.35,
          shadowRadius: 16,
          elevation: 10,
          transform: isSelected ? [{ scale: 1.02 }] : undefined,
        },
        style,
      ]}
    >
      <LinearGradient
        colors={[lighterColor, baseColor]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ height: 180, padding: 22 }}
      >
        {/* Círculos decorativos */}
        <View
          style={{
            position: 'absolute',
            top: -30,
            right: -30,
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: 'rgba(255,255,255,0.08)',
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: -20,
            right: 40,
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: 'rgba(255,255,255,0.06)',
          }}
        />

        {/* Topo do card */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'auto' }}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700', letterSpacing: 0.5 }}>
            {cardName}
          </Text>
          <Icon name="credit-card" size={22} color="rgba(255,255,255,0.7)" />
        </View>

        {/* Número */}
        <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, letterSpacing: 3, fontWeight: '500', marginTop: 28 }}>
          •••• •••• {cardNumber.replace(/\*/g, '')}
        </Text>

        {/* Rodapé */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 12 }}>
          <View>
            <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10, fontWeight: '500', marginBottom: 2, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Despesas
            </Text>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '800' }}>
              R$ {formatCurrency(expensesAmount)}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Card;
