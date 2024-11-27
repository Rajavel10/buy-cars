import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress, text, type="PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable onPress ={onPress} 
    style={[
        styles.container, 
        styles['container_${type}'],
        bgColor ? {backgroundColor: bgColor} : {}
        ]}>
      <Text 
      style={[
        styles.text, 
        styles['text_${type}'],
        fgColor ? {color: fgColor} : {}
        ]}>
            {text}
        </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 6,
    },
    container_PRIMARY: {
        backgroundColor: '#707d68',
    },
    container_TERTIARY: {},
    text: {
        fontWeight: 'bold',
        color: '#2b3b26',
    },
    text_TERTIARY: {
        color: '#2b3b26'
    },
});

export default CustomButton;