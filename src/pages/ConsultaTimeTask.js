import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";

import Title1 from '../components/Title1';
import Title2 from '../components/Title2';
import Input from '../components/Input';
import Button from '../components/Button';
import ButtonMenu from '../components/ButtonMenu';
import SelectInput from '../components/SelectInput';

export default function ConsultaTimeTask({ navigation }) {

    return (
        <ScrollView style={Style.screenViewStyle}>
            <View style={Style.container}>
                <ButtonMenu navigation={navigation}/>
                <Title1 text={'Time Task'} />
                <Title2 text={'CONSULTAR TIME TASK'} />
                <SelectInput
                    placeholder="Selecione a squad"
                />
                <SelectInput
                    placeholder="Selecione o projeto"
                />

                <Input
                    placeholder={'Mapeamento de cenários'}
                />
                <Input
                    placeholder={'Execução dos testes'}
                />

                <Button
                    setType={'primary'}
                    label={'VOLTAR'}
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
    },
 })
