import React, {useState} from 'react';
import { StyleSheet , Text, View , useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from '../../Component/CustomInput';
import CustomButton from '../../Component/CustomButton';

const ForgotPassword: React.FC<any> = (_props) => {
const [username, setUsername] = useState('');

const onSignUpPressed = () => {
  console.warn('Back to Sign In')
};

const onSendPressed = () => {
  console.warn("Code Sent");
};

  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Reset password</Text>
      
      <Text style={styles.titlea}>Username*</Text>
      
      
      <CustomInput placeholder="Username" value={username} setValue={setUsername} />
      


      <CustomButton text="Send" onPress={onSendPressed}/>


      <CustomButton text="Back to Sign In" onPress={onSignUpPressed} type="TERTIARY"/>

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
    titlea: {
      fontSize: 15,
      marginVertical: 10,
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
export default ForgotPassword; 