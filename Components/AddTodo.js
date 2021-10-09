import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const AddTodo = ({submitHandler}) => {

    const [text, setText] = useState({
        text : ''
    });

    const changeHandler = (val) => {
        setText(prevText => ({
            text : val
        }));
    }
    function submitAndClear (){
        submitHandler(text.text)
        // setText(prevText => ({
        //     text : ''
        // }));
    }

    return (
        <View>
            <TextInput
                style = {styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={submitAndClear} title='add todo' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})
export default AddTodo;