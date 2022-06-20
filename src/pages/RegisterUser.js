import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";

import generalStyle from './../assets/generalStyle';
import Title1 from '../components/Title1';
import Title2 from '../components/Title2';
import Divider from '../components/Divider';
import Input from '../components/Input';
import Button from '../components/Button';
import GoogleButton from '../components/GoogleButton';


export default function Login({ navigation }) {
    return (
        <ScrollView style={Style.screenViewStyle}>
            <View style={Style.container}>
                <Title1 text={'Time Task'} />
                <Title2 text={'CRIE SUA CONTA'} />
                <Title2 text={'Preencha os campos abaixo'} />
                <Divider/>
                <Input
                    placeholder={'Nome completo'}
                />
                <Input
                    placeholder={'E-mail corporativo'}
                />
                <Input
                    placeholder={'Senha'}
                />
                <GoogleButton 
                    
                />
                <Button 
                    setType={'primary'}
                    label={'CADASTRAR'}
                />
                <Button 
                    label={'Login'}
                    actionOnPress={ () => navigation.navigate('Login') }
                />
            </View>
        </ScrollView>
    )
}


const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: Dimensions.get('screen').height,
    },
    screenViewStyle: {
        flex: 1,
        backgroundColor: 'red',
        height: Dimensions.get('window').height,
        padding: 0 
    }
 })