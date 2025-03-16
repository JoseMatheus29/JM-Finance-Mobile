import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CardBalance from './CardBalance';
import CardExpenses from './CardExpenses';
import CategoryCard from './CategoryCard';

import { dashboardStyles } from '../style/dashboardStyles';
import { globalStyles } from '../style/globalStyles';


export default function DashboardScreen() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Dashboard</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CardBalance balance={31627.80} income={31477.50} expense={31477.50} />
                <CardExpenses cardName="Cartão 01" lastDigits="333" expense={3578} />
                <Text style={globalStyles.sectionTitle}>Categorias</Text>
                <View style={dashboardStyles.categoryContainer}>
                    <CategoryCard category="Transporte" amount={1800} />
                    <CategoryCard category="Lazer" amount={1800} />
                </View>
            </ScrollView>
        </View>
    );
};

