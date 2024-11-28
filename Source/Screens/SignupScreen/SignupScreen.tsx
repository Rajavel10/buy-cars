import React, {useState} from 'react';
import { StyleSheet , Text, View , useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from '../../Component/CustomInput';
import CustomButton from '../../Component/CustomButton';
import SocialSigninButton from '../../Component/SocialSigninButton';

const SignupScreen: React.FC<any> = (_props) => {
const [username, setusername] = useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState ('');
const [passwordRepeat, setPasswordRepeat] = useState('');

const onRegisterPressed = () => {
  console.warn("Registered Successfully")
};

const onSignUpPressed = () => {
  console.warn('Sign Up')
}

const onTermsOfUsePressed = () => {
  console.warn("Terms Of Use");
};

const onPrivacyPressed = () => {
  console.warn("Privacy Policy");
};

  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Create Account</Text>
      
      <CustomInput
      placeholder="User Name" 
      value={username} 
      setValue={setusername} 
      />
      <CustomInput
      placeholder="Email" 
      value={email} 
      setValue={setemail} 
      />
      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setpassword} 
      secureTextEntry={true}
      />
      
      <CustomInput 
      placeholder="Repeat Password" 
      value={passwordRepeat} 
      setValue={setPasswordRepeat} 
      secureTextEntry={true}
      />

      <CustomButton
      text="Register" 
      onPress={onRegisterPressed}
      />

      <Text style={styles.text}>By registering, you confirm that you accept our{' '}
      <Text style={styles.link} onPress={onTermsOfUsePressed} >Terms of Use </Text> and {' '}
      <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
      </Text>

      <SocialSigninButton />

      <CustomButton
      text="Have an Account? Sign In"
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
export default SignupScreen; 