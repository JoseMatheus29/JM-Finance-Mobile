import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
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
    <View style={{ flex: 1, backgroundColor: '#F7F9FC' }}>

      {/* Header */}
      <LinearGradient
        colors={['#254E8F', '#3161B2', '#4A74BB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ paddingTop: 52, paddingBottom: 28, paddingHorizontal: 20 }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <ArrowBack />
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>Carteira</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 36, height: 36, borderRadius: 12,
              backgroundColor: 'rgba(255,255,255,0.2)',
              alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Icon name="add" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView
        style={{ flex: 1, marginTop: -16 }}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Carrossel de Cards */}
        <View style={{ marginBottom: 12 }}>
          <FlatList
            ref={flatListRef}
            data={CARDS}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH}
            decelerationRate="fast"
            contentContainerStyle={{ paddingHorizontal: 24 }}
            ItemSeparatorComponent={() => <View style={{ width: 0 }} />}
            onMomentumScrollEnd={handleCardChange}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ width: CARD_WIDTH, paddingRight: 0 }}>
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
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 6, marginTop: 14 }}>
            {CARDS.map((_, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  flatListRef.current?.scrollToIndex({ index: i, animated: true });
                  setActiveIndex(i);
                }}
                style={{
                  width: i === activeIndex ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: i === activeIndex ? '#3161B2' : '#CBD5E0',
                }}
              />
            ))}
          </View>
        </View>

        {/* Resumo do card ativo */}
        <View
          style={{
            marginHorizontal: 16,
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: 16,
            marginBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderWidth: 1,
            borderColor: '#EBF1F6',
          }}
        >
          {[
            { label: 'Receitas', value: 'R$ 1.250', icon: 'arrow-downward', color: '#36A83A', bg: 'rgba(54,168,58,0.1)' },
            { label: 'Despesas', value: 'R$ 618', icon: 'arrow-upward', color: '#A83636', bg: 'rgba(168,54,54,0.1)' },
            { label: 'Saldo', value: `R$ ${activeCard.balance.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}`, icon: 'account-balance', color: '#3161B2', bg: 'rgba(49,97,178,0.1)' },
          ].map((stat, i) => (
            <View key={i} style={{ alignItems: 'center' }}>
              <View style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: stat.bg, alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
                <Icon name={stat.icon} size={16} color={stat.color} />
              </View>
              <Text style={{ fontSize: 13, fontWeight: '700', color: '#1A2B4A' }}>{stat.value}</Text>
              <Text style={{ fontSize: 10, color: '#A0AEC0', marginTop: 1 }}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Transações */}
        <View style={{ paddingHorizontal: 16 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#1A2B4A' }}>Transações</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 13, color: '#3161B2', fontWeight: '600' }}>Filtrar</Text>
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