import React, { useState, useRef } from 'react';
import { View, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SideBar from '../components/sidebar';
import ScreenHeader from '../components/ui/ScreenHeader';
import TransactionList, { Transaction } from '../components/ui/TransactionList';
import CardCarousel from './components/CardCarousel';
import WalletSummary from './components/WalletSummary';
import { CardType } from './wallet-type';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - 48;

const CARDS: CardType[] = [
  { id: 1, name: 'Cartão Principal', number: '333', color: '#3161B2', lightColor: '#4A74BB', balance: 3578 },
  { id: 2, name: 'Cartão Secundário', number: '771', color: '#254E8F', lightColor: '#3161B2', balance: 1250 },
  { id: 3, name: 'Cartão Virtual', number: '982', color: '#4A74BB', lightColor: '#7998CD', balance: 890.50 },
];

const TRANSACTIONS: Transaction[] = [
  { id: 1, name: 'Shopping', date: '10 jan 2022', amount: -200.80, category: 'Lazer', type: 'expense' },
  { id: 2, name: 'Mercado', date: '12 jan 2022', amount: 100.80, category: 'Alimentação', type: 'income' },
  { id: 3, name: 'Carro', date: '15 jan 2022', amount: -417.80, category: 'Transporte', type: 'expense' },
];

export default function WalletScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const activeCard = CARDS[activeIndex];

  return (
    <View className="flex-1 bg-[#F7F9FC]">
      <ScreenHeader
        title="Carteira"
        gradientColors={['#254E8F', '#3161B2', '#4A74BB']}
        rightComponent={
          <TouchableOpacity className="w-9 h-9 rounded-xl bg-white/20 items-center justify-center">
            <Icon name="add" size={20} color="#fff" />
          </TouchableOpacity>
        }
      />

      <ScrollView
        className="flex-1 -mt-4"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <CardCarousel
          cards={CARDS}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          flatListRef={flatListRef}
          cardWidth={CARD_WIDTH}
        />

        <WalletSummary activeCard={activeCard} />

        <TransactionList
          title="Transações"
          actionLabel="Filtrar"
          transactions={TRANSACTIONS}
        />
      </ScrollView>

      <SideBar />
    </View>
  );
}