import React from 'react';
import { TextInput,StyleSheet } from 'react-native';

function AppTextInput({placeholder,value,onChangeText}) {
    return (
        <TextInput
        placeholder={placeholder}
        style={styles.inputBox}
        value={value}
        onChangeText={onChangeText}
        />
    );
}

const styles = StyleSheet.create({
    inputBox:{
        //borderWidth: 2,
        //borderColor: 'black',
        width:'75%',
        height:40,
        borderRadius: 5,
        backgroundColor:'#fff',
        padding:10
    }
})
export default AppTextInput;