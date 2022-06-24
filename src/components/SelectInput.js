import { StyleSheet, Dimensions, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function SelectInput(props) {
    return (
        <View style={Style.input}>
            <Picker
                selectedValue={props.value}
                onValueChange={value => props.vModel(value)}
                style={props.value ? Style.selectedStyle : Style.selectStyle }
            >
                <Picker.Item label={props.placeholder} style={{ fontSize: 14}} enabled={false} />
                {props.listOptions && props.listOptions}
            </Picker>
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
        paddingLeft: 2,
    },
    selectStyle: {
        color: '#898686'
    },
    selectedStyle: {
        color: '#000'
    }
});