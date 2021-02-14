import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultDetails from './ResultDetails';


const ResultsList = ({ title, results, navigation }) => {
  if(!results.length){
    return null;
  }
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <FlatList horizontal data={results} 
        showsHorizontalScrollIndicator={false}
        keyExtractor={result => result.id} 
        renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => {navigation.navigate('ResultShowScreen', {id: item.id })}}>
                <ResultDetails result={item} />
              </TouchableOpacity>)
          }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 15,
    marginVertical: 7,
  },
});

export default ResultsList;
