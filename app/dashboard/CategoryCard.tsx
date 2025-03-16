import React from 'react';
import { View, Text } from 'react-native';
import { dashboardStyles } from '../style/dashboardStyles';

interface CategoryCardProps {
    category: string;
    amount: number;
}
export const CategoryCard: React.FC<CategoryCardProps> = ({ category, amount }) => {
    return (
        <View style={dashboardStyles.categoryCard}>
            <Text style={dashboardStyles.categoryAmount}>${amount.toFixed(2)}</Text>
            <Text style={dashboardStyles.categoryText}>{category}</Text>
        </View>
    );
};

export default CategoryCard;
