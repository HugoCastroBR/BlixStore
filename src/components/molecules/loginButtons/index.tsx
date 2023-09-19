import React from 'react';
import { View,StyleSheet } from 'react-native';
import StyledText from '../../atoms/StyledText';
import StyledTextInput from '../../atoms/StyledInput';
import StyledButton from '../../atoms/StyledButton';

const LoginButtons = () => {
  return(
    <View style={styles.container}>
      <View style={styles.ItemContainer}>
        <StyledButton 
          width={220}
          height={50}
          backgroundColor='#3B5998'
          borderRadius={10}
          onPress={() => console.log('Login')}
        >
          <StyledText color='white'>Login</StyledText>
        </StyledButton>
      </View>
      <View style={styles.ItemContainer}>
        <StyledButton width={220} height={50} borderRadius={10}>
          <StyledText color='white' fontWeight='100' fontSize={20} >Register</StyledText>
        </StyledButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ItemContainer:{
    marginBottom: 10,
  }
})

export default LoginButtons;