import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CardHorizontalProps {
  name?: string;
  date?: string;
  amount?: number;
  category?: string;
  type?: 'income' | 'expense';
}

const CATEGORY_ICONS: Record<string, string> = {
  Lazer: 'sports-esports',
  Transporte: 'directions-car',
  Alimentação: 'restaurant',
  Saúde: 'favorite',
  Shopping: 'shopping-bag',
  Mercado: 'shopping-cart',
  Carro: 'directions-car',
};

const CardHorizontal: React.FC<CardHorizontalProps> = ({
  name = 'Transação',
  date = '10 jan 2022',
  amount = 0,
  category = 'Outros',
  type = 'expense',
}) => {
  const isIncome = type === 'income' || amount > 0;
  const iconName = CATEGORY_ICONS[name] ?? CATEGORY_ICONS[category] ?? 'receipt';
  const iconColor = isIncome ? '#36A83A' : '#3161B2';
  const iconBg = isIncome ? 'rgba(54,168,58,0.1)' : 'rgba(49,97,178,0.1)';
  const amountColor = isIncome ? '#36A83A' : '#A83636';
  const amountPrefix = isIncome ? '+' : '-';

  const formatCurrency = (v: number) =>
    Math.abs(v).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 14,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#EBF1F6',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      {/* Ícone */}
      <View
        style={{
          width: 46,
          height: 46,
          borderRadius: 14,
          backgroundColor: iconBg,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 12,
        }}
      >
        <Icon name={iconName} size={22} color={iconColor} />
      </View>

      {/* Info */}
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 14, fontWeight: '700', color: '#1A2B4A', marginBottom: 3 }}>
          {name}
        </Text>
        <Text style={{ fontSize: 12, color: '#A0AEC0', fontWeight: '400' }}>
          {date}
        </Text>
      </View>

      {/* Valor */}
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 15, fontWeight: '800', color: amountColor }}>
          {amountPrefix} R$ {formatCurrency(amount)}
        </Text>
        <Text style={{ fontSize: 10, color: '#A0AEC0', marginTop: 2 }}>
          {category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardHorizontal;
