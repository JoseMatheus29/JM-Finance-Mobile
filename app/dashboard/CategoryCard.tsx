import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CardCategory {
  value: number;
  total: number;
  name: string;
}

const CATEGORY_CONFIG: Record<string, { icon: string; color: string; bg: string }> = {
  Lazer: { icon: 'sports-esports', color: '#7998CD', bg: 'rgba(121,152,205,0.12)' },
  Transporte: { icon: 'directions-car', color: '#3161B2', bg: 'rgba(49,97,178,0.12)' },
  Alimentação: { icon: 'restaurant', color: '#36A83A', bg: 'rgba(54,168,58,0.12)' },
  Saúde: { icon: 'favorite', color: '#A83636', bg: 'rgba(168,54,54,0.12)' },
};

const DEFAULT_CONFIG = { icon: 'category', color: '#3161B2', bg: 'rgba(49,97,178,0.12)' };

export const CategoryCard: React.FC<CardCategory> = ({ value, total, name }) => {
  const config = CATEGORY_CONFIG[name] ?? DEFAULT_CONFIG;
  const pct = Math.min((value / total) * 100, 100);

  const formatCurrency = (v: number) =>
    v.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="flex-1 bg-white rounded-[20px] p-4 border border-[#EBF1F6] shadow-md shadow-[#3161B2]/5 elevation-3"
    >
      {/* Ícone */}
      <View
        className="w-11 h-11 rounded-[14px] items-center justify-center mb-3"
        style={{ backgroundColor: config.bg }}
      >
        <Icon name={config.icon} size={22} color={config.color} />
      </View>

      {/* Label */}
      <Text className="text-xs text-[#718096] font-medium mb-1">
        {name}
      </Text>

      {/* Valor */}
      <Text className="text-lg font-extrabold text-[#1A2B4A] mb-2.5">
        R$ {formatCurrency(value)}
      </Text>

      {/* Barra de progresso */}
      <View className="h-1 bg-[#EBF1F6] rounded-sm overflow-hidden">
        <View
          className="h-full rounded-sm"
          style={{ width: `${pct}%`, backgroundColor: config.color }}
        />
      </View>
      <Text className="text-[10px] text-[#A0AEC0] mt-1">
        {pct.toFixed(0)}% do orçamento
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
