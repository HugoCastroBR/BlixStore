import React from 'react';
import { View,StyleSheet } from 'react-native';
import StyledText from '../../atoms/StyledText';
import StyledTextInput from '../../atoms/StyledInput';
import useStore from '../../../hooks/useStore';
import { RegisterSetConfirmPassword, RegisterSetEmail, RegisterSetPassword } from '../../../store/actions';
const RegisterInputs = () => {

  const { states,dispatch } = useStore()  



  const HandlerRegisterUsername = (value:string) => {
    dispatch(RegisterSetPassword(value))
  }

  const HandlerRegisterEmail = (value:string) => {
    dispatch(RegisterSetEmail(value))
  }

  const HandlerRegisterPassword = (value:string) => {
    dispatch(RegisterSetPassword(value))
  }

  const HandlerRegisterRepeatPassword = (value:string) => {
    dispatch(RegisterSetConfirmPassword(value))
  }



  return(
    <View style={styles.container}>
      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>Username</StyledText>
        <StyledTextInput 
          backgroundColor='#F3F3F3' 
          width={220} 
          height={32} 
          placeholder='Username'
          onExit={(value) => HandlerRegisterUsername(value)}
          />
      </View>
      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>Email</StyledText>
        <StyledTextInput 
          backgroundColor='#F3F3F3' 
          width={220} 
          height={32} 
          placeholder='Email'
          onExit={(value) => HandlerRegisterEmail(value)}
          />
      </View>
      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>Password</StyledText>
        <StyledTextInput
          backgroundColor='#F3F3F3'
          width={220}
          height={32}
          placeholder='Password'
          onExit={(value) => HandlerRegisterPassword(value)}
          />
      </View>
      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>Repeat Password</StyledText>
        <StyledTextInput
          backgroundColor='#F3F3F3'
          width={220}
          height={32}
          placeholder='Repeat Password'
          onExit={(value) => HandlerRegisterRepeatPassword(value)}
          />
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
    marginTop: -20,
  },
  ItemContainer:{
    marginBottom: 20,
  }
})

export default RegisterInputs;