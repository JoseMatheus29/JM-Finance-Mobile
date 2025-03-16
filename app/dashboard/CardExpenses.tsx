import React from 'react';
import { View, Text } from 'react-native';
import { dashboardStyles } from '../style/dashboardStyles';
interface CardExpensesProps {
    cardName: string;
    lastDigits: string;
    expense: number;
}
export const CardExpenses: React.FC<CardExpensesProps> = ({ cardName, lastDigits, expense }) => {
    return (
        <View style={dashboardStyles.cardBlue}>
            <Text style={dashboardStyles.cardText}>{cardName} ****{lastDigits}</Text>
            <Text >Despesas</Text>
            <Text style={dashboardStyles.cardExpense}>R$ {expense.toFixed(2)}</Text>
        </View>
    );
};

export default CardExpenses;
