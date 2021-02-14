import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errMessage] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.home}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {!errMessage ? null : {errMessage}}
      <ScrollView>
      <ResultsList navigation={navigation} results={filterResultByPrice("$")} title="Easy Food" />
      <ResultsList navigation={navigation} results={filterResultByPrice("$$")} title="Good Vibes" />
      <ResultsList navigation={navigation} results={filterResultByPrice("$$$")} title="Fancy Night" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#212935",
    height: "100%",
    flex: 1,
    
  },

  text: {
    color: "#fff",
    fontSize: 20,
    margin: 15,
  },
});

export default SearchScreen;
