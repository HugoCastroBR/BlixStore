import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import Product, { ProductProps } from "../../molecules/product";
import { productsUrl } from "../../../utils/api";


const mockedProduct: ProductProps = {
  id: 1,
  name: "Burger",
  description: "Tasty",
  price: 10,
  image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"
}


const getProducts = async () => {
  const request = await fetch(productsUrl)
  const response = await request.json()
  return response
}


const renderProducts = (products: ProductProps[]) => {

  console.log(products[1])


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

  const [products, setProducts] = React.useState<ProductProps[]>([])

  useEffect(() => {
    const getProductsAsync = async () => {
      try {
        const response = await getProducts()
        setProducts(response)
      } catch (error) {
        console.log(error)
      }
    }
    getProductsAsync()
  }, [])


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