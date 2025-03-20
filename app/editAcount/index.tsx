import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import ArrowBack from '../components/arrowBack';
import { globalStyles } from '../style/globalStyles';
import SideBar from '../components/sidebar';

import { editAcountStyle } from './editAcountStyles';


export default function editAcount() {
    return (
        <View style={{ flex: 1 }}>
            <View style={globalStyles.pageConfig}>
            <View style={editAcountStyle.formContainer}>
                <View style={{ flexDirection: "row", paddingStart: 15, marginBottom: 20, justifyContent: "space-between" }}>
                    <ArrowBack />
                    <Text style={globalStyles.sectionTitle}>Editar Conta</Text>
                    <Text ></Text>
                </View>
                </View>
                <View style={editAcountStyle.formContainer}>
                    <Text  style={editAcountStyle.subtitle}>Informações Basicas</Text>
                    <View style={[globalStyles.container, globalStyles.inputContainer]}>
                        <Text style={globalStyles.label}>Nome</Text>
                        <TextInput
                            placeholder="João Silva Souza"
                            placeholderTextColor="#ccc"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={[globalStyles.container, globalStyles.inputContainer]}>
                        <Text style={globalStyles.label}>Email</Text>
                        <TextInput
                            placeholder="joao@email.com"
                            placeholderTextColor="#ccc"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={[globalStyles.container, globalStyles.inputContainer]}>
                        <Text style={globalStyles.label}>Telefone</Text>
                        <TextInput
                            placeholder="(85) 99999-9999"
                            placeholderTextColor="#ccc"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                </View>

                <View style={editAcountStyle.formContainer}>
                    <Text  style={editAcountStyle.subtitle}>Alterar Senha</Text>
                    <View style={[globalStyles.container, globalStyles.inputContainer]}>
                        <Text style={globalStyles.label}>Senha atual</Text>
                        <TextInput
                            placeholder="*************"
                            placeholderTextColor="#ccc"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={[globalStyles.container, globalStyles.inputContainer]}>
                        <Text style={globalStyles.label}>Nova senha</Text>
                        <TextInput
                            placeholder="*************"
                            placeholderTextColor="#ccc"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={[globalStyles.container, globalStyles.inputContainer]}>
                        <Text style={globalStyles.label}>Confirmar senha</Text>
                        <TextInput
                            placeholder="*************"
                            placeholderTextColor="#ccc"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>


                </View>

            </View>
            <SideBar />
        </View>
    )


};





