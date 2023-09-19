import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import StyledText from '../../atoms/StyledText';
import StyledTextInput from '../../atoms/StyledInput';
import StyledButton from '../../atoms/StyledButton';
import { useNavigation } from '@react-navigation/native';
import { HomeProps } from '../../pages/home';

interface HomeButtonsProps {
  onRegister: () => void;
  onLogin: () => void;
}

const LoginButtons  = ({onRegister,onLogin}:HomeButtonsProps) => {

  const [isLoading, setIsLoading] = React.useState(false)

  const HandlerChangeToRegister = () => {
      onRegister()
  }
  const HandlerChangeToLogin = () => {
    console.log('Login1')
    setIsLoading(true)
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