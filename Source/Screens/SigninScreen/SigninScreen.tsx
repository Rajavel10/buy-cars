import React, {useState} from 'react';
import { StyleSheet ,Image , Text, View , useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../Assets/Logo_1.png';
import CustomInput from '../../Component/CustomInput';
import CustomButton from '../../Component/CustomButton';
import SocialSigninButton from '../../Component/SocialSigninButton';

const SigninScreen: React.FC<any> = (_props) => {
const [username, setusername] = useState('');
const [password, setpassword] = useState ('');

const {height} = useWindowDimensions();
const onSignInPressed = () => {
  console.warn("Sign In")
}
const onForgotPasswordPressed = () => {
  console.warn("Forgot password")
}

  return (
    <ScrollView>
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]}resizeMode="contain" />
      <CustomInput
      placeholder="User Name" 
      value={username} 
      setValue={setusername} 
      />
      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setpassword} 
      secureTextEntry={true}
      />
      
      <CustomButton
      text="Sign In" 
      onPress={onSignInPressed}
      />

      <CustomButton
      text="Forgot Password" 
      onPress={onForgotPasswordPressed}
      type="TERTIARY"
      />
      
      <SocialSigninButton />

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '90%',
        maxWidth: 300,
        maxHeight: 200,
    },
});
export default SigninScreen; 