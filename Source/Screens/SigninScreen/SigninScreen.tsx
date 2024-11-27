import React, {useState} from 'react';
import { StyleSheet ,Image , Text, View , useWindowDimensions} from 'react-native';
import Logo from '../../../Assets/Logo_1.png';
import CustomInput from '../../Component/CustomInput';
import CustomButton from '../../Component/CustomButton';

const SigninScreen = () => {
const [username, setusername] = useState('');
const [password, setpassword] = useState ('');

const {height} = useWindowDimensions();
const onSignInPressed = () => {
  console.warn("Sign In")
}
const onForgotPasswordPressed = () => {
  console.warn("Forgot password")
}

const onSignInFacebook = () => {
  console.warn("Facebook")
}

const onSignInGoogle = () => {
  console.warn("Google")
}

const onSignInApple = () => {
  console.warn("Apple")
}

  return (
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
      
      <CustomButton 
      text="Sign In with Facebook" 
      onPress={onSignInFacebook}
      bgColor="#E7EAF4"
      fgColor="#4765A9"
      type="TERTIARY"
      />

      <CustomButton 
      text="Sign In with Google" 
      onPress={onSignInGoogle}
      bgColor="#FAE9EA"
      fgColor="#DD4D44"
      type="TERTIARY"
      />

      <CustomButton 
      text="Sign In with Apple" 
      onPress={onSignInApple}
      bgColor="#e3e3e3"
      fgColor="#363636"
      type="TERTIARY"
      />

    </View>
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