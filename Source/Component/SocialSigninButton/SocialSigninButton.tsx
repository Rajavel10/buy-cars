import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const SocialSigninButton = () => {
    const onSignInFacebook = () => {
        console.warn("Facebook")
      };
      
      const onSignInGoogle = () => {
        console.warn("Google")
      };
      
      const onSignInApple = () => {
        console.warn("Apple")
      };
  return (
    <>
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
    </>
  );
};

export default SocialSigninButton;