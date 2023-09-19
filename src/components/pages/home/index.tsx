import { View, Text,StyleSheet, Image } from "react-native"
import React, {useState} from "react"
import LoginInput from "../../molecules/loginInput"
import LoginButtons from "../../molecules/loginButtons"


const Home = () => {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <View style={styles.container}>
      <Image 
      source={require('../../../../assets/Logoborboleta.png')}
      style={{width: 200, height: 200, marginTop: -100}}
      />
      <LoginInput />
      <LoginButtons />
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
