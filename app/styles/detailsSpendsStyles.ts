import { StyleSheet } from 'react-native';

export const detailsSpendStyle = StyleSheet.create({
    eatingFlexBox: {
        justifyContent: "center",
        alignItems: "center"
    },

    eatingOutParent: {
        borderRadius: 23,
        backgroundColor: "#3161b2",
        flexDirection: "row",
        color: "#fff",
        padding: 8,

    },
    groupParent: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    },
    formContainer: {
        marginBottom:50,
        justifyContent: 'center',
    },

    inputDetails: {
        flexDirection:"row",
        padding: 15,
        marginBottom: 20, 
        justifyContent: "space-between",
        borderRadius: 24,
        backgroundColor: "#EBF1F6",
    }


});
