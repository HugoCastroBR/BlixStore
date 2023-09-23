import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import Product, { ProductProps } from "../../molecules/product";
import { productsUrl } from "../../../utils/api";
import useStore from "../../../hooks/useStore";
import { getAndSetProducts } from "../../../store/actions";



const renderProducts = (products: ProductProps[]) => {
  return products.filter((product) => product != null).map((product) => (
    <Product
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
      image={product.image}
      onBuy={(id) => { 
        console.log('Buy product',id)
      }}  
    />
  ))
}

const ProductList = () => {

  const {states,dispatch} = useStore()

  useEffect(() => {
    dispatch(getAndSetProducts())
  },[])


  const products = states.Products.products
  

  return (
    <View style={styles.container}>
      {
        products.length > 0 ? renderProducts(products) : <ActivityIndicator size="large" color="#0000ff" />
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    paddingTop: 20,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  }
})

export default ProductList;