import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder} 
      style={styles.input}
      secureTextEntry={secureTextEntry} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: '#2b3b26',
        width: '100%',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 10,
        marginVertical: 7,
    },
    input: {}
})

export default CustomInput;