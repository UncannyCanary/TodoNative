import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";

export default function App() {
  const [todos, settodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play paladins", key: "3" },
  ]);

  const submitHandler = (text) => {
    if (text.length > 3) {
      settodos((prevState) => {
        return [{ text: text, key: Math.random().toString() }, ...prevState];
      });
    }
    else {
      Alert.alert('OOPS !', 'Todos must be over 3 characters long', [{text : 'Understood', onPress() {console.log("Alert Closed !")}}]);
    }
  };

  const pressHandler = (key) => {
    settodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
             showsHorizontalScrollIndicator={false}
             showsVerticalScrollIndicator={false}
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex : 1
  },
  list: {
    marginTop: 20,
    flex : 1
  },
});
