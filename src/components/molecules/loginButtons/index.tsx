import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import StyledText from '../../atoms/StyledText';
import StyledTextInput from '../../atoms/StyledInput';
import StyledButton from '../../atoms/StyledButton';
import { useNavigation } from '@react-navigation/native';
import { HomeProps } from '../../pages/home';
import useStore from '../../../hooks/useStore';
import { useEffect } from 'react';

interface HomeButtonsProps {
  onRegister: () => void;
  onLogin: () => void;
  toggleValid: () => boolean;
}

const LoginButtons  = ({onRegister,onLogin,toggleValid}:HomeButtonsProps) => {

  const [isLoading, setIsLoading] = React.useState(false)
  // const [LoginValid, setLoginValid] = React.useState(false)


  const HandlerChangeToRegister = () => {
      onRegister()
  }
  const HandlerChangeToLogin = () => {
    setIsLoading(true)
    onLogin()
  }


  return (
    <View style={styles.container}>
      <View style={styles.ItemContainer}>
        <StyledButton
          width={220}
          height={50}
          backgroundColor='#3B5998'
          borderRadius={10}
          onPress={() => HandlerChangeToLogin()}
          disabled={false}
        >
          {!isLoading ? <StyledText color='white'>Login</StyledText> : <ActivityIndicator size="small" color="white" />}

        </StyledButton>
      </View>
      <View style={styles.ItemContainer}>
        <StyledButton
          width={220}
          height={50}
          borderRadius={10}
          onPress={() => HandlerChangeToRegister()}
          >
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
  ItemContainer: {
    marginBottom: 10,
  }
})

export default LoginButtons;