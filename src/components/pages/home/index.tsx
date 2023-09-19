import { View, StyleSheet } from "react-native"
import React, { useState } from "react"
import HomeButtons from "../../organisms/homeButtons"
import HomeInputs from "../../organisms/homeInputs"
import HomeLogo from "../../organisms/homeLogo"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../types/RootStackParams"

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeProps> = (props) => {

  const HandlerOnRegister = () => {
    props.navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>
      <HomeLogo />
      <HomeInputs />
      <HomeButtons onRegister={HandlerOnRegister} onLogin={(
        () => {
          console.log('Login')
        }

      )} />
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
