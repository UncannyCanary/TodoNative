import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [people, setpeople] = useState([
    { name: "Vish1", id: "1" },
    { name: "Vish2", id: "2" },
    { name: "Vish3", id: "3" },
    { name: "Vish4", id: "4" },
    { name: "Vish5", id: "5" },
    { name: "Vish6", id: "6" },
    { name: "Vish7", id: "7" },
    { name: "Vish8", id: "8" },
    { name: "Vish9", id: "9" },
    { name: "Vish10", id: "10" },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.person}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  person: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
