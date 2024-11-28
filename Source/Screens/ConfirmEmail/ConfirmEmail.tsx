import React, {useState} from 'react';
import { StyleSheet , Text, View , useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from '../../Component/CustomInput';
import CustomButton from '../../Component/CustomButton';

const ConfirmEmail: React.FC<any>= (_props) => {
const [code, setCode] = useState('');

const onConfirmPressed = () => {
  console.warn("Registered Successfully")
};

const onSignUpPressed = () => {
  console.warn('Sign Up')
};

const onResendPressed = () => {
  console.warn("Code Sent");
};

  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Confirm Your Email</Text>
      
      <CustomInput
      placeholder="Enter Your Confirmation Code" 
      value={code} 
      setValue={setCode} 
      />
      


      <CustomButton
      text="Confirm" 
      onPress={onConfirmPressed}
      />

      <CustomButton
      text="Resend Code"
      onPress={onResendPressed}
      type="SECONDARY"
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
export default ConfirmEmail; 