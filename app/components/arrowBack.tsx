import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from 'react-native-svg';

import { useNavigation } from '@react-navigation/native';


const ArrowBack = () => {
    const navigation = useNavigation();

    const handleVoltar = () => {
        navigation.goBack();
    };
    return (
        <TouchableOpacity onPress={handleVoltar}>
            <View style={styles.arrowBackIcon}>
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M21.1431 12L2.8569 12" stroke="#3161B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <Path d="M9.85693 5L2.85693 12L9.85693 19" stroke="#3161B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </Svg>
            </View>
        </TouchableOpacity>

    );
};


const styles = StyleSheet.create({
    arrowBackIcon: {
        width: 14,
        height: 19,

    }
});

export default ArrowBack;
