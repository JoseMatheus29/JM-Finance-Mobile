import * as React from "react";
import {  StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';


export const ArrowBack = () => {
    const navigation = useNavigation();

    const handleVoltar = () => {
        navigation.goBack();
    };
    return (
        <TouchableOpacity>
            <Icon name="arrow-back" size={24} color="#3161B2" />
        </TouchableOpacity>

    );
};


const styles = StyleSheet.create({
    arrowBackIcon: {
        width: 14,
        height: 19,

    }
});


