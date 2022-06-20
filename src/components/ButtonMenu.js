import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ButtonMenu(props) {
    return (
        <TouchableOpacity onPress={() => { props.navigation.openDrawer() }} style={Style.buttonContent}>
            <View style={Style.barMenu}></View>
            <View style={Style.barMenu}></View>
            <View style={Style.barMenu}></View>
        </TouchableOpacity>
    )
}

const Style = StyleSheet.create({
    buttonContent: {
        width: 35,
        height: 30,
        position: 'absolute',
        top: 50,
        left: 20
    },
    barMenu: {
        width: 35,
        height: 3,
        backgroundColor: '#000',
        marginTop: 5
    }
})
