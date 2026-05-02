import React, { useState } from 'react';
import {
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

import SideBar from '../components/sidebar';
import GradientButton from '../components/ui/GradientButton';
import DynamicHeader from './components/DynamicHeader';
import CategorySelector from './components/CategorySelector';
import TransactionDetails from './components/TransactionDetails';
import { TxType, Category } from './registrationSpent-type';

const CATEGORIES: Category[] = [
  { id: 'food',      name: 'Alimentação',  icon: 'restaurant',         color: '#E67E22', bg: 'rgba(230,126,34,0.12)'  },
  { id: 'transport', name: 'Transporte',   icon: 'directions-car',     color: '#3161B2', bg: 'rgba(49,97,178,0.12)'   },
  { id: 'leisure',   name: 'Lazer',        icon: 'sports-esports',     color: '#7998CD', bg: 'rgba(121,152,205,0.12)' },
  { id: 'health',    name: 'Saúde',        icon: 'favorite',           color: '#A83636', bg: 'rgba(168,54,54,0.12)'   },
  { id: 'shopping',  name: 'Shopping',     icon: 'shopping-bag',       color: '#9B59B6', bg: 'rgba(155,89,182,0.12)'  },
  { id: 'salary',    name: 'Salário',      icon: 'account-balance',    color: '#36A83A', bg: 'rgba(54,168,58,0.12)'   },
  { id: 'invest',    name: 'Investimento', icon: 'trending-up',        color: '#1ABC9C', bg: 'rgba(26,188,156,0.12)'  },
  { id: 'other',     name: 'Outros',       icon: 'category',           color: '#95A5A6', bg: 'rgba(149,165,166,0.12)' },
];

export default function RegistrationSpent() {
  const router = useRouter();

  const [type, setType]               = useState<TxType>('expense');
  const [amount, setAmount]           = useState('');
  const [nome, setNome]               = useState('');
  const [descricao, setDescricao]     = useState('');
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [focused, setFocused]         = useState('');

  const isExpense = type === 'expense';
  const primaryColor = isExpense ? '#A83636' : '#36A83A';
  const gradientColors: [string, string, string] = isExpense
    ? ['#7A1F1F', '#A83636', '#C0514A']
    : ['#1A5C1F', '#36A83A', '#4ABD4F'];

  const formatAmount = (raw: string) => {
    const nums = raw.replace(/\D/g, '');
    if (!nums) return '';
    const cents = parseInt(nums, 10);
    return (cents / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  };

  const handleSalvar = () => {
    if (!amount) { Alert.alert('Atenção', 'Informe o valor da transação.'); return; }
    if (!selectedCat) { Alert.alert('Atenção', 'Selecione uma categoria.'); return; }
    if (!nome.trim()) { Alert.alert('Atenção', 'Informe o nome da transação.'); return; }
    Alert.alert('✅ Transação salva!', `${isExpense ? 'Saída' : 'Entrada'} de R$ ${formatAmount(amount)} registrada.`, [
      { text: 'Ok', onPress: () => router.push('/dashboard') },
    ]);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-[#F7F9FC]"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <DynamicHeader
        type={type} setType={setType}
        amount={amount} setAmount={setAmount}
        gradientColors={gradientColors}
        formatAmount={formatAmount}
      />

      <ScrollView
        className="flex-1 -mt-5"
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <CategorySelector
          categories={CATEGORIES}
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
        />

        <TransactionDetails
          nome={nome} setNome={setNome}
          descricao={descricao} setDescricao={setDescricao}
          focused={focused} setFocused={setFocused}
          primaryColor={primaryColor}
        />

        <GradientButton
          title={`Registrar ${isExpense ? 'Saída' : 'Entrada'}`}
          onPress={handleSalvar}
          colors={gradientColors.slice(0, 2) as [string, string]}
          shadowColor={primaryColor}
        />
      </ScrollView>

      <SideBar />
    </KeyboardAvoidingView>
  );
}
