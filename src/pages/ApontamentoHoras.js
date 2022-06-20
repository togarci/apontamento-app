import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { Picker } from '@react-native-picker/picker';

import Title1 from '../components/Title1';
import Title2 from '../components/Title2';
import Divider from '../components/Divider';
import Input from '../components/Input';
import Button from '../components/Button';
import ButtonMenu from '../components/ButtonMenu';

export default function ApontamentoHoras({ navigation }) {
    return (
        <ScrollView style={Style.screenViewStyle}>
            <View style={Style.container}>
                <ButtonMenu navigation={navigation}/>
                <Title1 text={'Time Task'} />
                <Title2 text={'CADASTRAR PROJETOS'} />
                <Title2 text={'Preencha os campos abaixo'} />
                <Divider/>
                <Input
                    placeholder={'Squad'}
                />
                <Input
                    placeholder={'Nome do Projeto'}
                />
                <Button
                    setType={'primary'}
                    label={'CADASTRAR'}
                    actionOnPress={ () => navigation.navigate('MenuRoute') }
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
