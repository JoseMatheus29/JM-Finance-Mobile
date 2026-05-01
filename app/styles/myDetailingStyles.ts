import { StyleSheet } from 'react-native';

export const myDetailingStyle = StyleSheet.create({
    cardValue: {
        borderRadius: 20,
        backgroundColor: "rgba(49, 97, 178, 0.85)",
        width: "100%",
        height: 104,
        alignItems: 'center',
        paddingTop:20,
    },
    cardPosition: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '90%',
      },

    subtitle: {
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "500",
        color: "#fff",
        textAlign: "left",
        marginBottom: 15,
        width: '100%',
        borderRadius: 24
    },
    title: {
        marginBottom: 15,
        fontSize: 24,
        fontFamily: "Inter",
        fontWeight: "bold",
        color: "#fff",
        textAlign: "left",
        borderRadius: 24
    },
    sectionTitle: {
        fontFamily: "Inter",
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "bold",
        color: "#3161b2",
        textAlign: "left",
        marginBottom: 10,
    },
    valueGraf:{
        fontSize: 30,
        lineHeight: 20,
        fontWeight: "bold",
        color: "#3161b2",
        position: 'absolute',
        top: '46%',    
        left: '35%',   

       
    }
});
