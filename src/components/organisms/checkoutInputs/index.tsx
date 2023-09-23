import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from '../../atoms/StyledText';
import StyledTextInput from '../../atoms/StyledInput';
import useStore from '../../../hooks/useStore';
import { setAddress, setCardCvv, setCardExpiration, setCardName, setCardNumber, setCity, setCountry, setFirstName, setLastName, setState, setZip } from '../../../store/actions';
import { CheckoutProps } from './../../../store/reducers/checkout';
import StyledButton from '../../atoms/StyledButton';


interface CheckoutInputsProps {
  goBack: () => void;
}

const CheckoutInputs = ({goBack}:CheckoutInputsProps) => {

  const { states, dispatch } = useStore()


  const onCheckout = () => {
    console.log(states.Checkout)
  }


  const HandlerRegisterCardNumber = (value: string) => {
    dispatch(setCardNumber(value))
  }
  const HandlerRegisterCardName = (value: string) => {
    dispatch(setCardName(value));
  }

  const HandlerRegisterCardExpiration = (value: string) => {
    dispatch(setCardExpiration(value));
  }

  const HandlerRegisterCardCvv = (value: string) => {
    dispatch(setCardCvv(value));
  }

  const HandlerRegisterFirstName = (value: string) => {
    dispatch(setFirstName(value));
  }

  const HandlerRegisterLastName = (value: string) => {
    dispatch(setLastName(value));
  }

  const HandlerRegisterAddress = (value: string) => {
    dispatch(setAddress(value));
  }

  const HandlerRegisterCity = (value: string) => {
    dispatch(setCity(value));
  }

  const HandlerRegisterState = (value: string) => {
    dispatch(setState(value));
  }

  const HandlerRegisterZip = (value: string) => {
    dispatch(setZip(value));
  }

  const HandlerRegisterCountry = (value: string) => {
    dispatch(setCountry(value));
  }






  return (
    <View style={styles.container}>
      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>Card Number</StyledText>
        <StyledTextInput
          backgroundColor='#F3F3F3'
          width={220}
          height={32}
          placeholder='Card Number'
          onExit={(value) => HandlerRegisterCardNumber(value)}
        />
      </View>

      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>Card Name</StyledText>
        <StyledTextInput
          backgroundColor='#F3F3F3'
          width={220}
          height={32}
          placeholder='Card Name'
          onExit={(value) => HandlerRegisterCardName(value)}
        />
      </View>

      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>Card Expiration</StyledText>
        <StyledTextInput
          backgroundColor='#F3F3F3'
          width={220}
          height={32}
          placeholder='Card Expiration'
          onExit={(value) => HandlerRegisterCardExpiration(value)}
        />
      </View>

      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>Card CVV</StyledText>
        <StyledTextInput
          backgroundColor='#F3F3F3'
          width={220}
          height={32}
          placeholder='Card CVV'
          onExit={(value) => HandlerRegisterCardCvv(value)}
        />
      </View>

      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>First Name</StyledText>
        <StyledTextInput
          backgroundColor='#F3F3F3'
          width={220}
          height={32}
          placeholder='First Name'
          onExit={(value) => HandlerRegisterFirstName(value)}
        />
      </View>

      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>Last Name</StyledText>
        <StyledTextInput
          backgroundColor='#F3F3F3'
          width={220}
          height={32}
          placeholder='Last Name'
          onExit={(value) => HandlerRegisterLastName(value)}
        />
      </View>

      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>Address</StyledText>
        <StyledTextInput
          backgroundColor='#F3F3F3'
          width={220}
          height={32}
          placeholder='Address'
          onExit={(value) => HandlerRegisterAddress(value)}
        />
      </View>

      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>City</StyledText>
        <StyledTextInput
          backgroundColor='#F3F3F3'
          width={220}
          height={32}
          placeholder='City'
          onExit={(value) => HandlerRegisterCity(value)}
        />
      </View>

      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>State</StyledText>
        <StyledTextInput
          backgroundColor='#F3F3F3'
          width={220}
          height={32}
          placeholder='State'
          onExit={(value) => HandlerRegisterState(value)}
        />
      </View>

      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>ZIP</StyledText>
        <StyledTextInput
          backgroundColor='#F3F3F3'
          width={220}
          height={32}
          placeholder='ZIP'
          onExit={(value) => HandlerRegisterZip(value)}
        />
      </View>

      <View style={styles.ItemContainer}>
        <StyledText color='#532D81'>Country</StyledText>
        <StyledTextInput
          backgroundColor='#F3F3F3'
          width={220}
          height={32}
          placeholder='Country'
          onExit={(value) => HandlerRegisterCountry(value)}
        />
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <StyledButton
          backgroundColor='#532D81'
          width={220}
          height={50}
          borderRadius={10}
          onPress={onCheckout}
        >
          <StyledText color='#F3F3F3'>Checkout</StyledText>
        </StyledButton>
        


      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
        }}
      >
        <StyledButton
          width={220}
          height={50}
          borderRadius={10}
          onPress={goBack}
        >
          <StyledText color='#F3F3F3' fontWeight='100' >Go Back</StyledText>
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
    height: '100%',
    width: '100%',
    paddingTop: 50,
    paddingBottom: 50,
  },
  ItemContainer: {
    marginBottom: 5,
  }
})

export default CheckoutInputs;