import { View,StyleSheet} from "react-native"
import React, {useState} from "react"

import RegisterInputs from "../../molecules/registerInputs"
import RegisterButton from "../../molecules/RegisterButtons"
import HomeLogo from "../../organisms/homeLogo"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../types/RootStackParams"
import RegisterGoBack from "../../molecules/RegisterGoBack"

export type RegisterProps = NativeStackScreenProps<RootStackParamList, 'Register'>;


const Register:React.FC<RegisterProps> = (props) => {

  const HandlerGoBack = () => {
    props.navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>

      <HomeLogo />
      <RegisterInputs />
      <RegisterButton 
        onRegister={() => console.log('Register')}
      />
      <RegisterGoBack 
        onGoBack={() => HandlerGoBack()}
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

export default Register
