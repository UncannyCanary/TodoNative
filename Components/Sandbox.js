import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Sandbox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

export default Sandbox;

const styles = StyleSheet.create({
    container: {
        // flex : 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: "#333"
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10
    },
    boxTwo: {
        flex : 1,
        backgroundColor: 'indigo',
        padding: 20
    },
    boxThree: {
        flex : 1,
        backgroundColor: 'green',
        padding: 30
    },
    boxFour: {
        flex : 1,
        backgroundColor: 'yellow',
        padding: 40
    }
})
