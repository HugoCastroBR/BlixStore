import React from "react";
import { Image,ActivityIndicator } from "react-native";
const HomeLogo = () => {



  return (
    <Image
      source={require('../../../../assets/Logoborboleta.png')}
      style={{ width: 200, height: 200, marginTop: -100 }}
    />
  )
}

export default HomeLogo