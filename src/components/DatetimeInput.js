import { useState } from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DatetimeInput(props) {
    const [showDatetime, setShowDatetime] = useState(false);
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        props.vModel(currentDate);
        setShowDatetime(false);
    };


    const openDateTime = () => {
        if (!props.value) props.vModel(new Date());
        setShowDatetime(true)
    }


    return (
        <View style={Style.input}>
            <TouchableWithoutFeedback style={Style.datatimeStyle} onPress={openDateTime}>
                { props.value 
                    ? (<Text>{props.value.toLocaleTimeString()}</Text>)
                    : (<Text style={Style.placeholder}>{props.placeholder}</Text>)
                }
            </TouchableWithoutFeedback>
            { showDatetime && 
                (<DateTimePicker
                    value={props.value}
                    mode={'time'}
                    is24Hour={true}
                    onChange={onChange}
                />)
            }
            <Ionicons style={Style.icon} name="ios-time-outline" size={24} color="#898686" />
        </View>
    )
}

const Style = StyleSheet.create({
    input: {
        borderColor: '#898686',
        borderWidth: 2,
        width: Dimensions.get('window').width - 60,
        height: 50,
        borderRadius: 5,
        margin: 12,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    placeholder: {
        color: '#898686'
    },
    icon: {
        position: 'absolute',
        top: 11,
        right: 10
    }
})