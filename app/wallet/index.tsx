import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import globalStyles from '../style/globalStyles';
import { walletStyle } from './walletStyle';
import { Card } from '../components/card';
import ArrowBack from '../components/arrowBack';
import SideBar from '../components/sidebar';

interface CardType {
    id: number;
    name: string;
    number: string;
    color: string;
}
const initialCards: CardType[] = [
    {
        id: 1,
        name: 'Cartão 01',
        number: '****333',
        color: '#7998CD'
    },
    {
        id: 2,
        name: 'Cartão 02',
        number: '****333',
        color: '#4A74BB'
    },

    {
        id: 3,
        name: 'Cartão 03',
        number: '****333',
        color: '#3161B2'
    }
];

const transactions = [
    { id: 1, name: 'Shopping', date: '10 jan 2022', amount: -200.80 },
    { id: 2, name: 'Mercado', date: '10 jan 2022', amount: 100.80 },
    { id: 3, name: 'Carro', date: '10 jan 2022', amount: 417.80 },
];

export default function wallet() {
    const [selectedCardId, setSelectedCardId] = useState<number | null>(3);

    const getOrderedCards = (): CardType[] => {
        if (!selectedCardId) return initialCards;

        const selectedCard = initialCards.find(card => card.id === selectedCardId);
        if (!selectedCard) return initialCards;

        const otherCards = initialCards.filter(card => card.id !== selectedCardId);
        return [...otherCards, selectedCard];
    };

    const handleCardSelect = (cardId: number) => {
        setSelectedCardId(cardId === selectedCardId ? null : cardId);
    };

    const orderedCards = getOrderedCards();

    return (
        <View style={{ flex: 1 }}>


            <View style={globalStyles.pageConfig}>

                <View style={{ flexDirection: "row", paddingStart: 15, marginBottom: 20, justifyContent: "space-between" }}>
                    <ArrowBack />
                    <Text style={globalStyles.sectionTitle}>Carteira</Text>
                    <Text ></Text>

                </View>

                <View style={styles.cardsContainer}>
                    {orderedCards.map((card, index) => (
                        <TouchableOpacity
                            key={card.id}
                            onPress={() => handleCardSelect(card.id)}
                            activeOpacity={0.9}
                            style={styles.cardWrapper}
                        >
                            <Card
                                cardName={card.name}
                                cardNumber={card.number}
                                expensesAmount={3578}
                                backgroundColor={card.color}
                                style={{
                                    position: 'absolute',
                                    top: index * 70,
                                    width: '100%',
                                    zIndex: orderedCards.length - index,
                                    transform: [
                                        {
                                            scale: card.id === selectedCardId ? 1 : 0.98
                                        }
                                    ]
                                }}
                            />
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.containerTransition}>
                    <Text style={styles.sectionTitle}>Transações</Text>
                    <FlatList
                        data={transactions}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.transactionItem}>
                                <View>
                                    <Text style={globalStyles.label}>{item.name}</Text>
                                    <Text style={styles.transactionDate}>{item.date}</Text>
                                </View>
                                <Text style={[styles.transactionAmount, item.amount < 0 ? styles.negative : styles.positive]}>
                                    {item.amount < 0 ? `- R$${Math.abs(item.amount)}` : `+ R$${item.amount}`}
                                </Text>
                            </View>
                        )}
                    />
                </View>
            </View>
            <SideBar />
        </View>
    );
}


const styles = StyleSheet.create({
    cardsContainer: {
        position: 'relative',
        height: 350,
        marginBottom: 20,
        paddingTop: 50,
        paddingBottom: 50,
    } as ViewStyle,

    cardWrapper: {
        position: 'absolute',
        width: '100%',
    } as ViewStyle,


    containerTransition: {
        marginBottom: 20,
        paddingTop: 50,
        width: '100%',
    },

    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    transactionName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3161B2',
    },
    transactionDate: {
        fontSize: 12,
        color: '#A0A0A0',
        marginTop: 4,
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    positive: {
        color: '#36A83A',
    },
    negative: {
        color: '#A83636',
    },
    sectionTitle: {
        fontFamily: "Inter",
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "bold",
        color: "#3161b2",
        textAlign: "left",
        marginBottom: 10,
    },

});