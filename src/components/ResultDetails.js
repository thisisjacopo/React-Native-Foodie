import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetails = ({result}) => {
    return(
        <View>
        <Image style={styles.image} source={{uri: result.image_url}}></Image>
        <Text style={styles.text}>{result.name}</Text>
        <Text style={styles.text2}>{result.rating} Stars. {result.review_count} Reviews.</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginTop: 5,
        marginLeft: 15,
    },
    text2: {
        color: 'grey',
        fontSize: 14,
        letterSpacing: 1,
        marginTop: 3,
        marginLeft: 15,
    },
    
    image: {
        height: 150,
        width: 220,
        marginTop: 5,
        marginLeft: 15,
        borderRadius: 5,
    }
});

export default ResultDetails;
