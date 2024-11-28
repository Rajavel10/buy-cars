import React, {useState} from 'react';
import { StyleSheet , Text, View , useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from '../../Component/CustomInput';
import CustomButton from '../../Component/CustomButton';

const NewPassword: React.FC<any> = (_props) => {
const [code, setCode] = useState('');
const [newPass, setNewPass] = useState('');

const onConfirmPressed = () => {
  console.warn("Registered Successfully");
};

const onSignUpPressed = () => {
  console.warn('Back to Sign In');
};

const onsubmitPressed = () => {
  console.warn("Password Changed Successfully");
};

  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Reset password</Text>
      
      
      
      <CustomInput
      placeholder="Code"
      value={code} 
      setValue={setCode} 
      />

      <CustomInput
      placeholder="Enter New Password"
      value={newPass} 
      setValue={setNewPass} 
      />

      <CustomButton
      text="Submit" 
      onPress={onsubmitPressed}
      />


      <CustomButton
      text="Back to Sign In"
      onPress={onSignUpPressed}
      type="TERTIARY"
      />

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2b3b26',
        margin: 10,
    },

    text: {
      color:'gray',
      marginVertical: 10,
    },
    link: {
      color: '#1b1f3b',
      fontWeight: 'bold',
    },
});
export default NewPassword; 