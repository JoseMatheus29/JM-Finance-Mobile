import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CategoryCard from '../CategoryCard';

interface CategoriesSectionProps {
  onSeeAll: () => void;
}

export default function CategoriesSection({ onSeeAll }: CategoriesSectionProps) {
  return (
    <View className="mb-3">
      <View className="flex-row justify-between items-center mb-3.5">
        <Text className="text-[17px] font-bold text-[#1A2B4A]">Categorias</Text>
        <TouchableOpacity onPress={onSeeAll}>
          <Text className="text-[13px] text-[#3161B2] font-semibold">Ver detalhes</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row gap-3">
        <CategoryCard name="Transporte" value={1800} total={5000} />
        <CategoryCard name="Lazer" value={1200} total={5000} />
      </View>
    </View>
  );
}
