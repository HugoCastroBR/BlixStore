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

export type RegisterProps = NativeStackScreenProps<RootStackParamList, 'Register'>;


const Register:React.FC<RegisterProps> = (props) => {

  const {states, dispatch} = useStore()
  useFocusEffect(
    React.useCallback(() => {
      dispatch(RegisterSetIsSuccess(false))
    }, [])
  )

  const HandlerGoBack = () => {
    props.navigation.navigate('Home')
  }

  const PostUserInDb = async () => {
    const request = await fetch(usersUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          username: states.Register.username,
          email: states.Register.email,
          password: states.Register.password
        }
      )
    })

    const response = await request.json()
    dispatch(RegisterSetIsLoading(false))
    return response
  }

  const HandlerRegister = () => {
    try {
      PostUserInDb()
    } catch (error) {
      console.log(error)
    }
    dispatch(RegisterSetIsSuccess(true))

    
  }

  return (
    <View style={styles.container}>

      <HomeLogo />
      {
        states.Register.isSuccess ? 
          <StyledText
            color="white"
          >Success!!</StyledText>
        : 
          <View>
            <RegisterInputs />
            <RegisterButton 
              onRegister={HandlerRegister}
            />
          </View>
      }
  

      <RegisterGoBack 
        success={states.Register.isSuccess}
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
