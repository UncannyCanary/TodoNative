import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setname] = useState("Vishwanath");
  const [age, setage] = useState("24");
  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput style={styles.input} 
        placeholder="eg. Kory" 
        onChangeText={(val) => setname(val)}
        />

      <Text>Enter age:</Text>
      <TextInput style={styles.input} 
        placeholder="eg. 20" 
        onChangeText={(val) => setage(val)}
        keyboardType="numeric"
        />
      <Text>
        Hi my name is {name} and my age is {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 5,
    paddingLeft: 12,
    margin: 5,
    minWidth: 200,
  },
});
