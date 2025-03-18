import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CardBalance from './CardBalance';
import CategoryCard from './CategoryCard';

import Card from '../components/card';
import SideBar from '../components/sidebar';
import ArrowBack from '../components/arrowBack';

import { dashboardStyles } from './dashboardStyles';
import { globalStyles } from '../style/globalStyles';

export default function DashboardScreen() {
    return (
        <View style={{ flex: 1 }}>

            <View style={globalStyles.pageConfig}>
                <View style={{ flexDirection: "row", paddingStart: 15, marginBottom: 20, justifyContent: "space-between" }}>
                    <ArrowBack />
                    <Text style={globalStyles.sectionTitle}>Dashboard</Text>
                    <Text ></Text>

                </View>

                <View style={globalStyles.formContainer}>
                    <View style={globalStyles.container}>
                        <Text style={globalStyles.groupTitle}>Resumo</Text>
                        <CardBalance
                            valueTot={31.627}
                            valueEnt={10.512}
                            valueSai={3.123}
                        />
                    </View>

                    <View style={globalStyles.container}>
                        <Text style={globalStyles.groupTitle}>Cartões</Text>
                        <Card
                            cardName="Cartão 01"
                            cardNumber="****333"
                            expensesAmount={3.578} />
                    </View>

                    <View style={globalStyles.container}>
                        <Text style={globalStyles.groupTitle}>Categorias</Text>
                        <View style={dashboardStyles.categoryContainer}>
                            <CategoryCard name="Transporte" value={1800} />
                            <CategoryCard name="Lazer" value={1800} />
                        </View>

                    </View>
                </View>

            </View>
            <SideBar />

        </View>
    );
};
