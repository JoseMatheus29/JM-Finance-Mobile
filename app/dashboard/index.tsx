import React from 'react';
import { View, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

import SideBar from '../components/sidebar';
import CardBalance from './CardBalance';
import DashboardHeader from './components/DashboardHeader';
import CardsSection from './components/CardsSection';
import CategoriesSection from './components/CategoriesSection';

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#F7F9FC]">
      <DashboardHeader onProfilePress={() => router.push('/editAcount')} />

      <ScrollView
        className="flex-1 -mt-5"
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 0, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-7">
          <CardBalance
            valueTot={31627}
            valueEnt={10512}
            valueSai={3123}
          />
        </View>

        <CardsSection onSeeAll={() => router.push('/wallet')} />
        <CategoriesSection onSeeAll={() => router.push('/myDetailing')} />
      </ScrollView>

      <SideBar />
    </View>
  );
}
