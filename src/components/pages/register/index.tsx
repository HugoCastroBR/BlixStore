import { View,StyleSheet} from "react-native"
import React, {useState} from "react"

import RegisterInputs from "../../molecules/registerInputs"


const Register = () => {

  

  return (
    <View style={styles.container}>
      <RegisterInputs />
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
