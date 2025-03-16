import React from 'react';
import { View, Text } from 'react-native';
import { dashboardStyles } from '../style/dashboardStyles';

interface CardBalanceProps {
    balance: number;
    income: number;
    expense: number;
}

export const CardBalance: React.FC<CardBalanceProps> = ({ balance, income, expense }) => {
    return (
        <View style={dashboardStyles.card}>
            <Text >Saldo Mensal</Text>
            <Text style={dashboardStyles.balance}>R$ {balance.toFixed(2)}</Text>

            <View style={dashboardStyles.row}>
                <Text style={dashboardStyles.income}>Total de entradas: R$ {income.toFixed(2)}</Text>
                <Text style={dashboardStyles.expense}>Total de saídas: R$ {expense.toFixed(2)}</Text>
            </View>
        </View>
    );
};

export default CardBalance;
