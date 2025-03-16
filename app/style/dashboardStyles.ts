import { StyleSheet } from 'react-native';

export const dashboardStyles = StyleSheet.create({
    card: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    balance: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3366CC',
    },
    income: {
        fontSize: 14,
        color: 'green',
    },
    expense: {
        fontSize: 14,
        color: 'red',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    cardBlue: {
        backgroundColor: '#3366CC',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    cardText: {
        fontSize: 16,
        color: '#fff',
    },
    cardExpense: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
      },
      categoryAmount: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      categoryText: {
        fontSize: 14,
        color: '#666',
      },
      categoryCard: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: 120,
      },
});
export default dashboardStyles; 
