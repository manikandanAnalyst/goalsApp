import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
function AppButton({onPress,title,onColor,offColor,textColor,style}) {
    return (
        <Pressable
        style={({pressed}) => [
            {
              backgroundColor: pressed ? onColor : offColor,
            },
            styles.buttonContainer,style
          ]}
        onPress={onPress}>
          <Text style={{color:textColor}}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:'30%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 5,
        alignSelf:'center'
      }
})

export default AppButton;