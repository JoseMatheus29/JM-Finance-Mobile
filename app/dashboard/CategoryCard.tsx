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
      style={{
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: '#EBF1F6',
        shadowColor: '#3161B2',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 12,
        elevation: 3,
      }}
    >
      {/* Ícone */}
      <View
        style={{
          width: 44,
          height: 44,
          borderRadius: 14,
          backgroundColor: config.bg,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 12,
        }}
      >
        <Icon name={config.icon} size={22} color={config.color} />
      </View>

      {/* Label */}
      <Text style={{ fontSize: 12, color: '#718096', fontWeight: '500', marginBottom: 4 }}>
        {name}
      </Text>

      {/* Valor */}
      <Text style={{ fontSize: 18, fontWeight: '800', color: '#1A2B4A', marginBottom: 10 }}>
        R$ {formatCurrency(value)}
      </Text>

      {/* Barra de progresso */}
      <View style={{ height: 4, backgroundColor: '#EBF1F6', borderRadius: 2, overflow: 'hidden' }}>
        <View
          style={{
            height: '100%',
            width: `${pct}%`,
            backgroundColor: config.color,
            borderRadius: 2,
          }}
        />
      </View>
      <Text style={{ fontSize: 10, color: '#A0AEC0', marginTop: 4 }}>
        {pct.toFixed(0)}% do orçamento
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
