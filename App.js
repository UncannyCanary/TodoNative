import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [people, setpeople] = useState([
    {name: 'Vish1', key: '1'},
    {name: 'Vish2', key: '2'},
    {name: 'Vish3', key: '3'},
    {name: 'Vish4', key: '4'},
    {name: 'Vish5', key: '5'},
    {name: 'Vish6', key: '6'},
    {name: 'Vish7', key: '7'},
    {name: 'Vish8', key: '8'},
    {name: 'Vish9', key: '9'},
    {name: 'Vish10', key: '10'}
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({item}) => (
          <View><Text style={styles.person}>{item.name}</Text></View>
        )}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
