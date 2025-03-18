import * as React from "react";
import { StyleSheet, View, Text } from "react-native";


interface CardValues {
    cardName: string;
    cardNumber: string;
    expensesAmount: number;
}


export const Card: React.FC<CardValues> = ({ cardName, cardNumber, expensesAmount }) => {
    return (
        <View style={styles.carto}>
            <View style={styles.cartoChild} />
            <Text style={[styles.nameCardStyle, styles.textTypo]}>{cardName}</Text>
            <Text style={[styles.numberCardStyle, styles.textTypo]}>{cardNumber}</Text>
            <View style={styles.despesasParent}>
                <Text style={[styles.despesas, styles.textTypo]}>Despesas</Text>
                <Text style={[styles.r3578, styles.textTypo]}>{`R$ ${expensesAmount}`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textTypo: {
        textAlign: "left",
        color: "#fff",
        fontFamily: "Inter-SemiBold",
        fontWeight: "600"
    },
    cartoChild: {
        top: 0,
        left: 0,
        borderRadius: 24,
        backgroundColor: "rgba(49, 97, 178, 0.85)",
        width: "100%",
        position: "absolute",
        height: 179
    },
    nameCardStyle: {
        lineHeight: 18,
        letterSpacing: 1,
        fontSize: 15,
        top: 24,
        color: "#fff",
        fontFamily: "Inter",
        fontWeight: "bold",
        position: "absolute",
        left: 21
    },
    numberCardStyle: {
        left: 247,
        lineHeight: 18,
        letterSpacing: 1,
        fontSize: 15,
        top: 24,
        color: "#fff",
        fontFamily: "Inter",
        fontWeight: "bold",
        position: "absolute"
    },
    despesas: {
        fontSize: 15,
        lineHeight: 20,
        width: 98,
        height: 12
    },
    r3578: {
        fontSize: 20,
        letterSpacing: -0.2,
        lineHeight: 34
    },
    despesasParent: {
        top: 106,
        gap: 11,
        left: 21,
        position: "absolute"
    },
    carto: {
        width: "100%",
        height: 179
    }
});

export default Card;
