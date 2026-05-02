import React from 'react';
import { View, ScrollView } from 'react-native';

import SideBar from '../components/sidebar';
import ScreenHeader from '../components/ui/ScreenHeader';
import TransactionList, { Transaction } from '../components/ui/TransactionList';
import ExpenseChart from './components/ExpenseChart';
import MonthlyProgress from './components/MonthlyProgress';

const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 1, name: 'Shopping', date: '10 jan 2022', amount: -200.80, category: 'Lazer', type: 'expense' },
  { id: 2, name: 'Mercado', date: '12 jan 2022', amount: 100.80, category: 'Alimentação', type: 'income' },
  { id: 3, name: 'Carro', date: '15 jan 2022', amount: -417.80, category: 'Transporte', type: 'expense' },
];

const PIE_DATA = [
  { value: 40, color: '#3161B2', label: 'Transporte' },
  { value: 35, color: '#7998CD', label: 'Lazer' },
  { value: 25, color: '#4A74BB', label: 'Outros' },
];

export default function MyDetailing() {
  const totalGastos = 3578;

  return (
    <View className="flex-1 bg-[#F7F9FC]">
      <ScreenHeader
        title="Meu Detalhamento"
        gradientColors={['#254E8F', '#3161B2', '#4A74BB']}
      />

      <ScrollView
        className="flex-1 -mt-4"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <ExpenseChart pieData={PIE_DATA} totalGastos={totalGastos} />

        <MonthlyProgress
          totalGastos={totalGastos}
          progress={0.72}
          percentage={72}
        />

        <TransactionList
          title="Seus Gastos"
          actionLabel="Ver todos"
          transactions={MOCK_TRANSACTIONS}
        />
      </ScrollView>

      <SideBar />
    </View>
  );
}
