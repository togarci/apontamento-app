import React from 'react';
import { StyleSheet, TextInput, Dimensions } from 'react-native';


export default function Input(props) {
    return (
        <TextInput 
            style={Style.input}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={text => props.vModel(text)}
        />
    )
}


const Style = StyleSheet.create({
    input: {
        borderColor: '#898686',
        borderWidth: 2,
        width: Dimensions.get('window').width - 60,
        height: 50,
        padding: 15,
        borderRadius: 5,
        margin: 12
    }
});