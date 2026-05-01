import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

import SideBar from '../components/sidebar';

// ── Tipos ─────────────────────────────────────────────────────
type TxType = 'expense' | 'income';

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  bg: string;
}

// ── Constantes ────────────────────────────────────────────────
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

// ── Componente ────────────────────────────────────────────────
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

  const handleAmountChange = (text: string) => {
    const raw = text.replace(/\D/g, '');
    setAmount(raw);
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
      {/* ── Header Dinâmico ── */}
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="pt-14 pb-[52px] px-6"
      >
        {/* Topo */}
        <View className="flex-row items-center justify-between mb-7">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-9 h-9 rounded-xl bg-white/20 items-center justify-center"
          >
            <Icon name="close" size={20} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white text-[17px] font-bold">Nova Transação</Text>
          <View className="w-9" />
        </View>

        {/* Toggle Entrada / Saída */}
        <View className="flex-row bg-white/15 rounded-[14px] p-1 mb-7">
          {(['expense', 'income'] as TxType[]).map((t) => {
            const active = type === t;
            return (
              <TouchableOpacity
                key={t}
                onPress={() => setType(t)}
                className={`flex-1 flex-row items-center justify-center gap-1.5 py-2.5 rounded-[11px] ${active ? 'bg-white/25' : 'bg-transparent'}`}
              >
                <Icon
                  name={t === 'expense' ? 'arrow-upward' : 'arrow-downward'}
                  size={16}
                  color="#fff"
                />
                <Text className={`text-white text-sm ${active ? 'font-bold' : 'font-normal'}`}>
                  {t === 'expense' ? 'Saída' : 'Entrada'}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Campo Valor em destaque */}
        <View className="items-center">
          <Text className="text-white/70 text-[13px] font-medium mb-1.5">
            Valor
          </Text>
          <View className="flex-row items-center">
            <Text className="text-white/80 text-[28px] font-bold mr-1">
              R$
            </Text>
            <TextInput
              className="text-white text-[42px] font-extrabold min-w-[100px] text-center"
              placeholder="0,00"
              placeholderTextColor="rgba(255,255,255,0.4)"
              keyboardType="numeric"
              value={amount ? formatAmount(amount) : ''}
              onChangeText={handleAmountChange}
            />
          </View>
          <View className="h-0.5 w-[140px] bg-white/35 mt-1 rounded-[1px]" />
        </View>
      </LinearGradient>

      <ScrollView
        className="flex-1 -mt-5"
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* ── Card Categoria ── */}
        <View className="bg-white rounded-[24px] p-5 mb-4 shadow-lg shadow-black/5 elevation-4">
          <Text className="text-[13px] font-bold text-[#1A2B4A] mb-3.5">
            Categoria
          </Text>
          <View className="flex-row flex-wrap gap-2.5">
            {CATEGORIES.map((cat) => {
              const active = selectedCat === cat.id;
              return (
                <TouchableOpacity
                  key={cat.id}
                  onPress={() => setSelectedCat(cat.id)}
                  activeOpacity={0.8}
                  className={`flex-row items-center gap-1.5 px-3 py-2 rounded-xl border-[1.5px] ${active ? '' : 'bg-[#F7F9FC] border-transparent'}`}
                  style={{ backgroundColor: active ? cat.bg : undefined, borderColor: active ? cat.color : undefined }}
                >
                  <Icon name={cat.icon} size={16} color={active ? cat.color : '#A0AEC0'} />
                  <Text className={`text-xs ${active ? 'font-bold' : 'font-medium'}`} style={{ color: active ? cat.color : '#718096' }}>
                    {cat.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* ── Card Detalhes ── */}
        <View className="bg-white rounded-[24px] p-5 mb-6 shadow-lg shadow-black/5 elevation-4">
          <Text className="text-[13px] font-bold text-[#1A2B4A] mb-3.5">
            Detalhes
          </Text>

          {/* Nome */}
          <View className="mb-3.5">
            <Text className="text-[11px] font-bold text-[#7998CD] tracking-[0.8px] uppercase mb-1.5">
              Nome
            </Text>
            <View className={`flex-row items-center bg-[#F7F9FC] rounded-[14px] border-[1.5px] px-3.5 h-[50px] ${focused === 'nome' ? 'border-[#3161B2]' : 'border-[#E8EEF5]'}`}>
              <Icon name="edit" size={16} color={focused === 'nome' ? primaryColor : '#A0AEC0'} />
              <TextInput
                className="flex-1 ml-2.5 text-[14px] text-[#1A2B4A]"
                placeholder="Ex: Almoço no restaurante"
                placeholderTextColor="#C0CCDA"
                value={nome}
                onChangeText={setNome}
                autoCapitalize="sentences"
                onFocus={() => setFocused('nome')}
                onBlur={() => setFocused('')}
              />
            </View>
          </View>

          {/* Descrição */}
          <View className="mb-3.5">
            <Text className="text-[11px] font-bold text-[#7998CD] tracking-[0.8px] uppercase mb-1.5">
              Descrição (opcional)
            </Text>
            <View className={`bg-[#F7F9FC] rounded-[14px] border-[1.5px] px-3.5 py-3 ${focused === 'desc' ? 'border-[#3161B2]' : 'border-[#E8EEF5]'}`}>
              <TextInput
                className="text-[14px] text-[#1A2B4A] min-h-[60px]"
                style={{ textAlignVertical: 'top' }}
                placeholder="Adicione uma observação..."
                placeholderTextColor="#C0CCDA"
                value={descricao}
                onChangeText={setDescricao}
                multiline
                numberOfLines={3}
                onFocus={() => setFocused('desc')}
                onBlur={() => setFocused('')}
              />
            </View>
          </View>

          {/* Data */}
          <View>
            <Text className="text-[11px] font-bold text-[#7998CD] tracking-[0.8px] uppercase mb-1.5">
              Data
            </Text>
            <TouchableOpacity className="flex-row items-center bg-[#F7F9FC] rounded-[14px] border-[1.5px] border-[#E8EEF5] px-3.5 h-[50px]">
              <Icon name="calendar-today" size={16} color="#A0AEC0" />
              <Text className="ml-2.5 text-[14px] text-[#718096]">
                {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
              </Text>
              <Icon name="chevron-right" size={18} color="#C0CCDA" className="ml-auto" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Botão Salvar ── */}
        <Pressable onPress={handleSalvar}>
          <LinearGradient
            colors={gradientColors.slice(0, 2) as [string, string]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="h-14 rounded-[18px] items-center justify-center flex-row gap-2 shadow-xl elevation-8"
            style={{ shadowColor: primaryColor }}
          >
            <Icon name="check-circle" size={20} color="#fff" />
            <Text className="text-white text-base font-bold">
              Registrar {isExpense ? 'Saída' : 'Entrada'}
            </Text>
          </LinearGradient>
        </Pressable>
      </ScrollView>

      <SideBar />
    </KeyboardAvoidingView>
  );
}
