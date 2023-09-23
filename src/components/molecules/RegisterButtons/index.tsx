import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import StyledText from '../../atoms/StyledText';
import StyledTextInput from '../../atoms/StyledInput';
import StyledButton from '../../atoms/StyledButton';
import { useNavigation } from '@react-navigation/native';
import { HomeProps } from '../../pages/home';
import useStore from '../../../hooks/useStore';
import { RegisterSetIsLoading } from '../../../store/actions';

interface HomeButtonsProps {
  onRegister: () => void;
}

const RegisterButton  = ({onRegister}:HomeButtonsProps) => {

  // const [isLoading, setIsLoading] = React.useState(false)
  const {states, dispatch} = useStore()
  const isLoading = states.Register.isLoading

  const HandlerRegisterTouch = () => {
      dispatch(RegisterSetIsLoading(true))
      onRegister()
  }

  return (
    <View style={styles.container}>
      <View style={styles.ItemContainer}>
        <StyledButton
          width={220}
          height={50}
          backgroundColor='#3B5998'
          borderRadius={10}
          onPress={() => HandlerRegisterTouch()}
        >
          {!isLoading ? <StyledText color='white'>Register</StyledText> : <ActivityIndicator size="small" color="white" />}
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

export default RegisterButton;