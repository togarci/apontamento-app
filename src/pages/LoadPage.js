import React, { useEffect } from 'react';
import { StyleSheet } from "react-native";
import { ActivityIndicator, View, Text } from 'react-native';
import generalStyle from './../assets/generalStyle';

export default function LoadPage({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0, 
                routes: [{ name: 'Login' }]
            });
        }, 2000)
    });

    return (
        <View style={generalStyle.fullScreenContainer}>
            <View style={Style.container}>
                <Text style={Style.textStyle}>Bem Vindo !</Text>
                <ActivityIndicator  size={'large'} color={'#fff'}/>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B125B4'
    },
    textStyle: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 100
    }
});