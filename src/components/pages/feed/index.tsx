import { View, StyleSheet } from "react-native"
import React, { useState } from "react"
import HomeLogo from "../../organisms/homeLogo"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../types/RootStackParams"
import Product from "../../molecules/product"
import ProductList from "../../organisms/productList"
import GoBackHeader from "../../molecules/goBackHeader"

export type FeedProps = NativeStackScreenProps<RootStackParamList, 'Feed'>;

const Feed: React.FC<FeedProps> = (props) => {

  return (
    <View style={styles.container}>
      <GoBackHeader onGoBack={() => props.navigation.navigate('Home')}/>
      <ProductList
        onBuy={(id) => props.navigation.navigate('Checkout', {id})}
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

export default Feed
