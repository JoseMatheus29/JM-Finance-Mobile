import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
    input: {
        backgroundColor: '#F0F0F0',
        paddingVertical: 10,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    showPassword: {
        fontSize: 16,
        color: '#3366CC',
        marginRight: 20,
    },
    forgotPassword: {
        fontSize: 14,
        color: '#3366CC',
        textAlign: 'right',
        marginTop: 10,
    },
});
export default authStyles; 
