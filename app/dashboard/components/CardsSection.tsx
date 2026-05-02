import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Card from '../../components/card';

interface CardsSectionProps {
  onSeeAll: () => void;
}

export default function CardsSection({ onSeeAll }: CardsSectionProps) {
  return (
    <View className="mb-7">
      <View className="flex-row justify-between items-center mb-3.5">
        <Text className="text-[17px] font-bold text-[#1A2B4A]">Meus Cartões</Text>
        <TouchableOpacity onPress={onSeeAll}>
          <Text className="text-[13px] text-[#3161B2] font-semibold">Ver todos</Text>
        </TouchableOpacity>
      </View>
      <Card
        cardName="Cartão 01"
        cardNumber="****333"
        expensesAmount={3578}
      />
    </View>
  );
}
