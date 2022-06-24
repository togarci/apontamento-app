import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";

import Title1 from '../components/Title1';
import Title2 from '../components/Title2';
import Input from '../components/Input';
import Button from '../components/Button';
import ButtonMenu from '../components/ButtonMenu';
import SelectInput from '../components/SelectInput';
import DatetimeInput from '../components/DatetimeInput';

export default function ApontamentoHoras({ navigation }) {
    const [startTime, setStartTime] = useState(null);
    const [finishTime, setFinishTime] = useState(null);

    return (
        <ScrollView style={Style.screenViewStyle}>
            <View style={Style.container}>
                <ButtonMenu navigation={navigation}/>
                <Title1 text={'Time Task'} />
                <Title2 text={'APONTAR HORAS'} />
                <Input
                    placeholder={'Descreva sua task'}
                />
                <SelectInput
                    placeholder="Selecione um projeto"
                />

                <DatetimeInput
                    placeholder="Iniciado"
                    vModel={setStartTime}
                    value={startTime}
                />
                <DatetimeInput
                    placeholder="Finalizado"
                    vModel={setFinishTime}
                    value={finishTime}
                />
                <Button
                    setType={'primary'}
                    label={'SALVAR'}
                    actionOnPress={ () => navigation.navigate('MenuRoute') }
                />
                <Button
                    setType={'primary'}
                    label={'CONSULTAR'}
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
