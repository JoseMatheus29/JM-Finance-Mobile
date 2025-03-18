import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

interface BalanceCard {
    valueTot: number;
    valueEnt: number;
    valueSai: number;

}

export const CardBalance: React.FC<BalanceCard> = ({ valueTot, valueEnt, valueSai }) => {

    return (
        <View style={styles.rectangleParent}>

            
            <View style={styles.groupParent}>
                <View style={[styles.subtitle]}>
                    <Text style={[styles.entradas, styles.typo]}>{`R$ `}{valueEnt}</Text>
                    <Text style={[styles.totalDeEntradas, styles.labelSubtitle]}>{`Total de entradas `}</Text>
                </View>
                <View style={[styles.posSubtitleLabel, styles.subtitle]}>
                    <Text style={[styles.saidas, styles.typo]}>{`R$ `}{valueSai}</Text>
                    <Text style={[styles.totalDeEntradas, styles.labelSubtitle]}>Total de saidas</Text>
                </View>
            </View>
            <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
                <View style={[styles.groupWrapperLayout]}>
                <Text style={[styles.totalSaidas, styles.labelSubtitle]}>{`R$ `}{valueTot}</Text>
                    <View style={styles.arrow} />
                </View>
            </View>
            <Text style={[styles.saldoMensal, styles.labelSubtitle]}>{`Saldo Mensal `}</Text>
            <View style={styles.groupItem} />
        </View>);
};

const styles = StyleSheet.create({

    cartoChild: {
        top: 0,
        left: 0,
        borderRadius: 24,
        backgroundColor: "rgba(49, 97, 178, 0.85)",
        width: "100%",
        position: "absolute",
        height: 179
    },

    subtitle: {
        width: 123,
        height: 54,
        top: 0,
        position: "absolute"
    },
    typo: {
        textAlign: "left",
        fontFamily: "inter",
        lineHeight: 32,
        letterSpacing: 1,
        fontSize: 20,
        top: 22,
        fontWeight: "bold",
        left: 0,
        position: "absolute"
    },
    labelSubtitle: {
        color: "#3161b2",
        textAlign: "left",
        letterSpacing: 1,
        position: "absolute"
    },
    groupWrapperLayout: {
        height: 34,
        width: 219,
        position: "absolute"
    },

    entradas: {
        color: "#36a83a"
    },
    totalDeEntradas: {
        fontFamily: "Inter",
        lineHeight: 18,
        fontSize: 12,
        color: "#3161b2",
        fontWeight: "bold",
        left: 0,
        top: 0
    },

    saidas: {
        color: "#a83636"
    },
    posSubtitleLabel: {
        left: 168
    },
    groupParent: {
        top: 121,
        width: 291,
        height: 54,
        left: 12,
        position: "absolute"
    },
    totalSaidas: {
        fontSize: 32,
        lineHeight: 34,
        fontWeight: "700",
        fontFamily: "DMSans-Bold",
        left: 0,
        top: 0
    },
    arrow: {
        top: 5,
        left: 195,
        width: 24,
        height: 24,
        overflow: "hidden",
        position: "absolute"
    },

    groupWrapper: {
        top: 54,
        left: 12
    },
    saldoMensal: {
        top: 24,
        fontFamily: "Inter",
        fontWeight: "bold",

        lineHeight: 18,
        fontSize: 12,
        color: "#3161b2",
        left: 12
    },
    groupItem: {
        top: 104,
        backgroundColor: "#d9dbe9",
        width: 317,
        height: 1,
        left: 12,
        position: "absolute"
    },
    rectangleParent: {
        width: "100%",
        height: 191,
        borderRadius: 5,
        backgroundColor: "#EBF1F6"
    }
});

export default CardBalance;
