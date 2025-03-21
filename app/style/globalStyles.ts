import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    pageConfig: {
        backgroundColor: "#fffF",
        flex: 1,
        padding: 15,
        width: "100%",
        display: 'flex',
        justifyContent: 'space-between',  // Distribui os itens com o maior espaço possível entre eles

    },

    formContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    container: {
        borderRadius: 24,
        marginBottom: 15,
        padding: 15,
        width: "100%",
      

    },

    inputContainer:{
          backgroundColor: "#EBF1F6"
    },
    selectedValue: {
        marginTop: 20,
        fontSize: 18,
      },

    title: {
        marginBottom: 15,
        fontSize: 24,
        fontFamily: "Inter",
        fontWeight: "bold",
        color: "#3161b2",
        textAlign: "left",
        borderRadius: 24
    },
    subtitle: {
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "500",
        color: "#292b2d",
        textAlign: "left",
        marginBottom: 15,
        width: '100%',
        borderRadius: 24
    },



    label: {
        fontFamily: "Inter",
        fontWeight: "medium",
        fontSize: 13,
        color: "#3161b2",
    },
    sectionTitle: {
        fontFamily: "Inter",
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "bold",
        color: "#3161b2",
        textAlign: "center",
        marginBottom: 10,
    },

    groupTitle: {
        fontFamily: "Inter",
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "bold",
        color: "#3161b2",
        textAlign: "left",
        marginBottom: 10,
    },


    button: {
        backgroundColor: '#3366CC',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 30,
        marginTop: 20,
        width: "100%",
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});


export default globalStyles; 
