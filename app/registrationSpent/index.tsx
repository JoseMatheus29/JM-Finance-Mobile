import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ArrowBack from '../components/arrowBack';

import { globalStyles } from '../style/globalStyles';

export default function RegistrationSpent() {
    return (
        <View style={{ flex: 1 }}>

            <View style={globalStyles.pageConfig}>
                <View style={{ flexDirection: "row", paddingStart: 15, marginBottom: 20, justifyContent: "space-between" }}>
                    <ArrowBack />
                    <Text style={globalStyles.sectionTitle}>Cadastrar Categorias</Text>
                    <Text ></Text>

                </View>

                <View style={globalStyles.formContainer}>
                    <View style={[globalStyles.container, globalStyles.inputContainer]}>
                        <Text style={globalStyles.label}>Nome</Text>
                        <TextInput
                            placeholder="Digite o nome da transação"
                            placeholderTextColor="#ccc"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={[globalStyles.container, globalStyles.inputContainer]}>
                        <Text style={globalStyles.label}>Descrição</Text>
                        <TextInput
                            placeholder="Digite a descrição da transação"
                            placeholderTextColor="#ccc"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={[globalStyles.container, globalStyles.inputContainer]}>
                        <Text style={globalStyles.label}>Categoria</Text>
                        <TextInput
                            placeholder="Digite a categoria da transação"
                            placeholderTextColor="#ccc"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={[globalStyles.container, globalStyles.inputContainer]}>
                        <Text style={globalStyles.label}>Valor</Text>
                        <TextInput
                            placeholder="Digite o valor da transação"
                            placeholderTextColor="#ccc"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                   
                </View>
                <TouchableOpacity style={globalStyles.button} >

                    <Text style={globalStyles.buttonText}>Cadastrar Transação</Text>

                </TouchableOpacity>
            </View>
          
        </View>
    );
};
