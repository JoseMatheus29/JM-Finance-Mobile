import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import ArrowBack from '../components/arrowBack';
import { globalStyles } from '../style/globalStyles';
import SideBar from '../components/sidebar';

import { detailsSpendStyle } from './detailsSpendsStyles';


export default function detailsSpends() {
    return (
        <View style={{ flex: 1 }}>
            <View style={globalStyles.pageConfig}>

                <View style={detailsSpendStyle.formContainer}>
                    <View style={{ flexDirection: "row", paddingStart: 15, marginBottom: 20, justifyContent: "space-between" }}>
                        <ArrowBack />
                        <Text style={globalStyles.sectionTitle}>Datalhes Transação</Text>
                        <Text ></Text>
                    </View>
                    <View style={detailsSpendStyle.groupParent}>
                        <View style={globalStyles.title}>
                            <Text style={globalStyles.title}>R$ 100,00</Text>
                        </View>
                        <View style={globalStyles.title}>
                            <Text style={globalStyles.title}>Mercado</Text>
                        </View>
                        <View style={[detailsSpendStyle.eatingOutParent, detailsSpendStyle.eatingFlexBox]}>
                            <Text style={[detailsSpendStyle.eatingOutParent, detailsSpendStyle.eatingFlexBox]}>Comida</Text>
                        </View>
                    </View>
                </View>

                <View style={detailsSpendStyle.formContainer}>

                    <View style={[detailsSpendStyle.inputDetails]}>
                        <Text style={globalStyles.groupTitle}>Tipo</Text>
                        <Text style={globalStyles.groupTitle}>Credito</Text>
                    </View>
                    <View style={[detailsSpendStyle.inputDetails]}>
                        <Text style={globalStyles.groupTitle}>Descrição</Text>
                        <Text style={globalStyles.groupTitle}>Lanche de domingo</Text>
                    </View>
                    <View style={[detailsSpendStyle.inputDetails]}>
                        <Text style={globalStyles.groupTitle}>Banco</Text>
                        <Text style={globalStyles.groupTitle}>Nubank</Text>
                    </View>
                    <View style={[detailsSpendStyle.inputDetails]}>
                        <Text style={globalStyles.groupTitle}>Valor</Text>
                        <Text style={globalStyles.groupTitle}>R$ 50,00</Text>
                    </View>
                
                </View>

            </View>
            <SideBar />
        </View>
    )


};





