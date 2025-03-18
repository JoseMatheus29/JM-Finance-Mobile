import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',

    },
    showPassword: {
        fontSize: 14,
        color: '#3366CC',
        marginRight: 10, 
    },
    forgotPassword: {
        fontSize: 14,
        color: '#3366CC',
        textAlign: 'right',
        marginTop: 10,
    },
    containerLogin:{
        backgroundColor: "#EBF1F6"
    }
});

export default authStyles; 
