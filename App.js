import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [nameStatus, setName] = useState(true);
  const btnOnClick = () => {
    setName(!nameStatus);
  }
  return (
    <View style={styles.container}>
      <Text>Hi ! My name is {nameStatus ? `Vish` : `Nightwish`}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Click Me !" onPress={btnOnClick}/>
      </View>
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
  buttonContainer: {
    marginTop: 20
  }
});
