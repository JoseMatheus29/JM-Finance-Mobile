import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
   
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3366CC',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 30,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
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
    button: {
        backgroundColor: '#3366CC',
        padding: 15,
        borderRadius: 30,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
