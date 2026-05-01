import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Card } from '../components/card';
import ArrowBack from '../components/arrowBack';
import SideBar from '../components/sidebar';
import CardHorizontal from '../components/cardHorizontal';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - 48;

interface CardType {
  id: number;
  name: string;
  number: string;
  color: string;
  lightColor: string;
  balance: number;
}

const CARDS: CardType[] = [
  { id: 1, name: 'Cartão Principal', number: '333', color: '#3161B2', lightColor: '#4A74BB', balance: 3578 },
  { id: 2, name: 'Cartão Secundário', number: '771', color: '#254E8F', lightColor: '#3161B2', balance: 1250 },
  { id: 3, name: 'Cartão Virtual', number: '982', color: '#4A74BB', lightColor: '#7998CD', balance: 890.50 },
];

const TRANSACTIONS = [
  { id: 1, name: 'Shopping', date: '10 jan 2022', amount: -200.80, category: 'Lazer', type: 'expense' as const },
  { id: 2, name: 'Mercado', date: '12 jan 2022', amount: 100.80, category: 'Alimentação', type: 'income' as const },
  { id: 3, name: 'Carro', date: '15 jan 2022', amount: -417.80, category: 'Transporte', type: 'expense' as const },
];

export default function WalletScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const activeCard = CARDS[activeIndex];

  const handleCardChange = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / CARD_WIDTH);
    setActiveIndex(index);
  };

  return (
    <View className="flex-1 bg-[#F7F9FC]">

      {/* Header */}
      <LinearGradient
        colors={['#254E8F', '#3161B2', '#4A74BB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="pt-14 pb-7 px-5"
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <ArrowBack />
            <Text className="text-white text-xl font-bold">Carteira</Text>
          </View>
          <TouchableOpacity className="w-9 h-9 rounded-xl bg-white/20 items-center justify-center">
            <Icon name="add" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView
        className="flex-1 -mt-4"
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Carrossel de Cards */}
        <View className="mb-3">
          <FlatList
            ref={flatListRef}
            data={CARDS}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH}
            decelerationRate="fast"
            contentContainerStyle={{ paddingHorizontal: 24 }}
            ItemSeparatorComponent={() => <View className="w-0" />}
            onMomentumScrollEnd={handleCardChange}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ width: CARD_WIDTH }}>
                <Card
                  cardName={item.name}
                  cardNumber={`****${item.number}`}
                  expensesAmount={item.balance}
                  backgroundColor={item.color}
                />
              </View>
            )}
          />

          {/* Dots indicadores */}
          <View className="flex-row justify-center gap-1.5 mt-3.5">
            {CARDS.map((_, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  flatListRef.current?.scrollToIndex({ index: i, animated: true });
                  setActiveIndex(i);
                }}
                className={`h-1.5 rounded-full ${i === activeIndex ? 'w-5 bg-[#3161B2]' : 'w-1.5 bg-[#CBD5E0]'}`}
              />
            ))}
          </View>
        </View>

        {/* Resumo do card ativo */}
        <View className="mx-4 bg-white rounded-[20px] p-4 mb-5 flex-row justify-around border border-[#EBF1F6]">
          {[
            { label: 'Receitas', value: 'R$ 1.250', icon: 'arrow-downward', color: '#36A83A', bg: 'rgba(54,168,58,0.1)' },
            { label: 'Despesas', value: 'R$ 618', icon: 'arrow-upward', color: '#A83636', bg: 'rgba(168,54,54,0.1)' },
            { label: 'Saldo', value: `R$ ${activeCard.balance.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}`, icon: 'account-balance', color: '#3161B2', bg: 'rgba(49,97,178,0.1)' },
          ].map((stat, i) => (
            <View key={i} className="items-center">
              <View className="w-9 h-9 rounded-xl items-center justify-center mb-1.5" style={{ backgroundColor: stat.bg }}>
                <Icon name={stat.icon} size={16} color={stat.color} />
              </View>
              <Text className="text-[13px] font-bold text-[#1A2B4A]">{stat.value}</Text>
              <Text className="text-[10px] text-[#A0AEC0] mt-0.5">{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Transações */}
        <View className="px-4">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-base font-bold text-[#1A2B4A]">Transações</Text>
            <TouchableOpacity>
              <Text className="text-[13px] text-[#3161B2] font-semibold">Filtrar</Text>
            </TouchableOpacity>
          </View>
          {TRANSACTIONS.map((t) => (
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