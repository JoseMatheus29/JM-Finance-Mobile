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

  const selectedCategory = CATEGORIES.find(c => c.id === selectedCat);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#F7F9FC' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* ── Header Dinâmico ── */}
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ paddingTop: 56, paddingBottom: 52, paddingHorizontal: 24 }}
      >
        {/* Topo */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center' }}
          >
            <Icon name="close" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={{ color: '#fff', fontSize: 17, fontWeight: '700' }}>Nova Transação</Text>
          <View style={{ width: 36 }} />
        </View>

        {/* Toggle Entrada / Saída */}
        <View style={{
          flexDirection: 'row',
          backgroundColor: 'rgba(255,255,255,0.15)',
          borderRadius: 14,
          padding: 4,
          marginBottom: 28,
        }}>
          {(['expense', 'income'] as TxType[]).map((t) => {
            const active = type === t;
            return (
              <TouchableOpacity
                key={t}
                onPress={() => setType(t)}
                style={{
                  flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6,
                  paddingVertical: 10,
                  borderRadius: 11,
                  backgroundColor: active ? 'rgba(255,255,255,0.25)' : 'transparent',
                }}
              >
                <Icon
                  name={t === 'expense' ? 'arrow-upward' : 'arrow-downward'}
                  size={16}
                  color="#fff"
                />
                <Text style={{ color: '#fff', fontWeight: active ? '700' : '400', fontSize: 14 }}>
                  {t === 'expense' ? 'Saída' : 'Entrada'}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Campo Valor em destaque */}
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: '500', marginBottom: 6 }}>
            Valor
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 28, fontWeight: '700', marginRight: 4 }}>
              R$
            </Text>
            <TextInput
              style={{ color: '#fff', fontSize: 42, fontWeight: '800', minWidth: 100, textAlign: 'center' }}
              placeholder="0,00"
              placeholderTextColor="rgba(255,255,255,0.4)"
              keyboardType="numeric"
              value={amount ? formatAmount(amount) : ''}
              onChangeText={handleAmountChange}
            />
          </View>
          <View style={{ height: 2, width: 140, backgroundColor: 'rgba(255,255,255,0.35)', marginTop: 4, borderRadius: 1 }} />
        </View>
      </LinearGradient>

      <ScrollView
        style={{ flex: 1, marginTop: -20 }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* ── Card Categoria ── */}
        <View style={{
          backgroundColor: '#fff', borderRadius: 24, padding: 20, marginBottom: 16,
          shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.06, shadowRadius: 16, elevation: 4,
        }}>
          <Text style={{ fontSize: 13, fontWeight: '700', color: '#1A2B4A', marginBottom: 14 }}>
            Categoria
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {CATEGORIES.map((cat) => {
              const active = selectedCat === cat.id;
              return (
                <TouchableOpacity
                  key={cat.id}
                  onPress={() => setSelectedCat(cat.id)}
                  activeOpacity={0.8}
                  style={{
                    flexDirection: 'row', alignItems: 'center', gap: 6,
                    paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12,
                    backgroundColor: active ? cat.bg : '#F7F9FC',
                    borderWidth: 1.5,
                    borderColor: active ? cat.color : 'transparent',
                  }}
                >
                  <Icon name={cat.icon} size={16} color={active ? cat.color : '#A0AEC0'} />
                  <Text style={{ fontSize: 12, fontWeight: active ? '700' : '500', color: active ? cat.color : '#718096' }}>
                    {cat.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* ── Card Detalhes ── */}
        <View style={{
          backgroundColor: '#fff', borderRadius: 24, padding: 20, marginBottom: 24,
          shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.06, shadowRadius: 16, elevation: 4,
        }}>
          <Text style={{ fontSize: 13, fontWeight: '700', color: '#1A2B4A', marginBottom: 14 }}>
            Detalhes
          </Text>

          {/* Nome */}
          <View style={{ marginBottom: 14 }}>
            <Text style={{ fontSize: 11, fontWeight: '700', color: '#7998CD', letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 6 }}>
              Nome
            </Text>
            <View style={{
              flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F9FC',
              borderRadius: 14, borderWidth: 1.5, borderColor: focused === 'nome' ? primaryColor : '#E8EEF5',
              paddingHorizontal: 14, height: 50,
            }}>
              <Icon name="edit" size={16} color={focused === 'nome' ? primaryColor : '#A0AEC0'} />
              <TextInput
                style={{ flex: 1, marginLeft: 10, fontSize: 14, color: '#1A2B4A' }}
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
          <View style={{ marginBottom: 14 }}>
            <Text style={{ fontSize: 11, fontWeight: '700', color: '#7998CD', letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 6 }}>
              Descrição (opcional)
            </Text>
            <View style={{
              backgroundColor: '#F7F9FC', borderRadius: 14,
              borderWidth: 1.5, borderColor: focused === 'desc' ? primaryColor : '#E8EEF5',
              paddingHorizontal: 14, paddingVertical: 12,
            }}>
              <TextInput
                style={{ fontSize: 14, color: '#1A2B4A', minHeight: 60, textAlignVertical: 'top' }}
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

          {/* Data (estático por hora) */}
          <View>
            <Text style={{ fontSize: 11, fontWeight: '700', color: '#7998CD', letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 6 }}>
              Data
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F9FC',
                borderRadius: 14, borderWidth: 1.5, borderColor: '#E8EEF5',
                paddingHorizontal: 14, height: 50,
              }}
            >
              <Icon name="calendar-today" size={16} color="#A0AEC0" />
              <Text style={{ marginLeft: 10, fontSize: 14, color: '#718096' }}>
                {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
              </Text>
              <Icon name="chevron-right" size={18} color="#C0CCDA" style={{ marginLeft: 'auto' }} />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Botão Salvar ── */}
        <Pressable onPress={handleSalvar}>
          <LinearGradient
            colors={gradientColors.slice(0, 2) as [string, string]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              height: 56, borderRadius: 18,
              alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 8,
              shadowColor: primaryColor, shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.35, shadowRadius: 12, elevation: 8,
            }}
          >
            <Icon name="check-circle" size={20} color="#fff" />
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>
              Registrar {isExpense ? 'Saída' : 'Entrada'}
            </Text>
          </LinearGradient>
        </Pressable>
      </ScrollView>

      <SideBar />
    </KeyboardAvoidingView>
  );
}
