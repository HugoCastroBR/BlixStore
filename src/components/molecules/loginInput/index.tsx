import React, { useEffect } from 'react';
import { View,StyleSheet } from 'react-native';
import StyledText from '../../atoms/StyledText';
import StyledTextInput from '../../atoms/StyledInput';
import useStore from '../../../hooks/useStore';
import { SetEmail, SetPassword } from '../../../store/actions';
import { validateEmail, validatePassword } from '../../../utils/validation';



interface LoginInputProps {
  isLoginValid: (value:boolean) => void;
}
const LoginInput = ({isLoginValid}:LoginInputProps) => {

  const { states,dispatch } = useStore()  
  const { email, password } = states.Login


  const HandlerChangeEmail = (value: string) => {
    dispatch(SetEmail(value))
  }

  const HandlerChangePassword = (value: string) => {
    dispatch(SetPassword(value))
  }

  useEffect(() => {
    AllowLogin()
  },[email,password])

  const [validEmail, setValidEmail] = React.useState(false)

  const HandlerValidEmail = () => {
    if(validateEmail(email)){
      setValidEmail(true)
    }else{
      setValidEmail(false)
    }
  }

  React.useEffect(() => {
    HandlerValidEmail()
  },[email])


  const [validPassword, setValidPassword] = React.useState(false)

  const HandlerValidPassword = () => {
    if(validatePassword(password)){
      setValidPassword(true)
    }else{
      setValidPassword(false)
    }
  }

  React.useEffect(() => {
    HandlerValidPassword()
  },[password])


  const AllowLogin = () => {
    if(validEmail && validPassword){
      isLoginValid(true)
    }else{
      isLoginValid(false)
    }
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
          isError={validEmail}
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
          isError={validPassword}
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