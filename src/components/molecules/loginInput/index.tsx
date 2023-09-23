import React from 'react';
import { View,StyleSheet } from 'react-native';
import StyledText from '../../atoms/StyledText';
import StyledTextInput from '../../atoms/StyledInput';
import useStore from '../../../hooks/useStore';
import { SetEmail, SetPassword } from '../../../store/actions';
const LoginInput = () => {

  const { states,dispatch } = useStore()  
  const { email, password } = states.Login


  const HandlerChangeEmail = (value: string) => {
    console.log(value)
    dispatch(SetEmail(value))
  }

  const HandlerChangePassword = (value: string) => {
    console.log(value)
    dispatch(SetPassword(value))
  }


  return(
    <View style={styles.container}>
      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>Email</StyledText>
        <StyledTextInput 
          backgroundColor='#F3F3F3' 
          width={220} 
          height={32} 
          placeholder='Email'
          onExit={(value) => HandlerChangeEmail(value)}
          />
      </View>
      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>Password</StyledText>
        <StyledTextInput
          backgroundColor='#F3F3F3'
          width={220}
          height={32}
          placeholder='Password'
          onExit={(value) => HandlerChangePassword(value)}
          isSecret
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

export default LoginInput;