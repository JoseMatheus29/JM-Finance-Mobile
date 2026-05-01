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
      className="flex-row items-center bg-white rounded-2xl p-3.5 mb-2.5 border border-[#EBF1F6] shadow-sm shadow-black/5 elevation-2"
    >
      {/* Ícone */}
      <View
        className="w-[46px] h-[46px] rounded-[14px] items-center justify-center mr-3"
        style={{ backgroundColor: iconBg }}
      >
        <Icon name={iconName} size={22} color={iconColor} />
      </View>

      {/* Info */}
      <View className="flex-1">
        <Text className="text-sm font-bold text-[#1A2B4A] mb-1">
          {name}
        </Text>
        <Text className="text-xs text-[#A0AEC0] font-normal">
          {date}
        </Text>
      </View>

      {/* Valor */}
      <View className="items-end">
        <Text className="text-[15px] font-extrabold" style={{ color: amountColor }}>
          {amountPrefix} R$ {formatCurrency(amount)}
        </Text>
        <Text className="text-[10px] text-[#A0AEC0] mt-0.5">
          {category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardHorizontal;
