import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { globalStyles } from '../style/globalStyles';

const cardHorizontal = () => {

    return (
        <View style={styles.containerCard}>
            <View style={styles.cardHorizontalChild}>
                <View style={styles.frameChild} />
                <View style={{alignItems:'flex-start', padding:10}}>
                    <Text style={globalStyles.sectionTitle}>Lazer</Text>
                    <Text style={globalStyles.subtitle}>10 jan 2022</Text>
                </View>
            </View>
            <View style={{ alignItems:'stretch'}}>
                <Text style={globalStyles.sectionTitle}>{`R$200.80 `}</Text>
                <Text style={globalStyles.subtitle}>Dinheiro</Text>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    containerCard: {
        borderRadius: 20,
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderColor: "#cbd5e0",
        borderWidth: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: "100%",
        overflow: "hidden",
        alignItems: "center",
        height: 104,
        padding:20
    },
    frameChild: {
        borderRadius: 18,
        backgroundColor: "#a0aec0",
        width: 65,
        height: 65,
    },
    

    cardHorizontalChild: {
        flexDirection: 'row',
    }


});

export default cardHorizontal;
