import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";



interface CardCategory {
    value: number;
    name: string;

}

export const CategoryCard: React.FC<CardCategory>  =  ({ value, name }) => {
    let imageSource;

    switch (name) {
      case 'Lazer':
        imageSource = require('../../assets/images/LazerIcone.png');
        break;
      case 'Transporte':
        imageSource = require('../../assets/images/TransporteIcone.png');
        break;
      default:
        imageSource = require('../../assets/images/Ellipse.svg');
    }

    return (
        <View style={styles.rectangleParent}>
            <View style={styles.groupChild} />
            <TouchableOpacity style={[styles.parentImg, styles.parentPosition]}>
                <Image source={imageSource} />
            </TouchableOpacity>
            <View style={[styles.parent, styles.parentPosition]}>
                <Text style={styles.text}>{value}</Text>
                <Text style={styles.transporte}>{name}</Text>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    parentPosition: {
        left: 20,
        position: "absolute"
    },
    groupChild: {
        top: 0,
        left: 0,
        borderRadius: 24,
        backgroundColor: "#EBF1F6",
        width: 155,
        position: "absolute",
        height: 171
    },
    groupItem: {
        top: 20
    },
    text: {
        fontSize: 17,
        lineHeight: 24,
        fontWeight: "bold",
        fontFamily: "Inter",
        color: "#4a5568",
        textAlign: "left"
    },
    transporte: {
        fontSize: 14,
        fontFamily: "Inter",
        fontWeight: "regular",
        color: "#3161b2",
        textAlign: "left"
    },
    parentImg: {
        top: 10,
        gap: 6
    },
    parent: {
        top: 107,
        gap: 6
    },
    rectangleParent: {
        flex: 1,
        width: "100%",
        height: 171
    }
});

export default CategoryCard;
