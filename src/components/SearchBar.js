import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.bar}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search..."
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "#E0E0E0",
    height: 50,
    borderRadius: 15,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 12,
    marginBottom: 8,
  },

  input: {
    flex: 1,
    fontSize: 18,
  },

  icon: {
    fontSize: 40,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
