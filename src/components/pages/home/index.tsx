import { View, StyleSheet } from "react-native"
import React, { useState } from "react"
import HomeButtons from "../../organisms/homeButtons"
import HomeInputs from "../../organisms/homeInputs"
import HomeLogo from "../../organisms/homeLogo"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../types/RootStackParams"
import useStore from "../../../hooks/useStore"
import { usersUrl } from "../../../utils/api"

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeProps> = (props) => {

  const { states } = useStore()

  const HandlerOnRegister = () => {
    props.navigation.navigate('Register')
  }
  const HandlerOnLogin = async () => {
    const request = await fetch(usersUrl)
    const response = await request.json()
    // find user if exists
    console.log('response', response)


    const data = Object.values(response)
    .find((user: any) => user.email === states.Login.email && user.password === states.Login.password)

    const user = data as any
    console.log('user', user)
    if(!!user){
      props.navigation.navigate('Feed')
    }
  }

  const [isLoginValid, setIsLoginValid] = useState(false)
  
  return (
    <View style={styles.container}>
      <HomeLogo />
      <HomeInputs 
        isLoginValid={setIsLoginValid}
      />
      <HomeButtons 
        onRegister={HandlerOnRegister} 
        onLogin={HandlerOnLogin} 
        toggleValid={() => !isLoginValid}
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

export default Home
