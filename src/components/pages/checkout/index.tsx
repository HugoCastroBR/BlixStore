import { View,StyleSheet, Alert} from "react-native"
import React, {useState} from "react"

import RegisterInputs from "../../molecules/registerInputs"
import RegisterButton from "../../molecules/RegisterButtons"
import HomeLogo from "../../organisms/homeLogo"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../types/RootStackParams"
import RegisterGoBack from "../../molecules/RegisterGoBack"
import useStore from "../../../hooks/useStore"
import { usersUrl } from "../../../utils/api"
import { RegisterSetIsLoading, RegisterSetIsSuccess } from "../../../store/actions"
import StyledText from "../../atoms/StyledText"
import { useFocusEffect } from "@react-navigation/native"
import CheckoutInputs from "../../organisms/checkoutInputs"

export type Checkout = NativeStackScreenProps<RootStackParamList, 'Checkout'>;


const Checkout:React.FC<Checkout> = (props,route) => {


  const HandlerGoBack = () => {
    props.navigation.navigate('Feed')
  }

  return (
    <View style={styles.container}>
      <CheckoutInputs
        goBack={HandlerGoBack}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#05C3CB',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }
})

export default Checkout
