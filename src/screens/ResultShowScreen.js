import React, {useState, useEffect} from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import yelp from '../api/yelp'

const ResultShowScreen = ({route, navigation}) => {
   const id =  route.params.id;
   const [result, setResult] = useState(null);

   const getResult = async id => {
       const response = await yelp.get(`/${id}`);
       setResult(response.data);
   };
   useEffect(() => {
       getResult(id);
   }, [])

   if(!result){
       return null
   }
    return(
        <View style={styles.view}>
            <Text style={styles.text}>Welcome to {result.name}</Text>
            <FlatList data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem = {({item}) => {
                    return <Image style={styles.image} source={{uri: item}}/>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#212935",
        height: 1000,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    image: {
        height: 200,
        width: 300,
        marginTop: 25,
    },

    text:{
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 15,

    }
})

export default ResultShowScreen;