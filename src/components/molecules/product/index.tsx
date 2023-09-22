import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledButton from "../../atoms/StyledButton";
import StyledText from "../../atoms/StyledText";



export interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  onBuy?: (id:number) => void;
}



const Product = ({
  id,
  name,
  description,
  price,
  image,
  onBuy
}:ProductProps) => {
  return (
    <View style={styles.container} key={id}>
      <View>
        <Image
          style={{
            width: 276,
            height: 200,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          source={{ uri: image }}
        />
      </View>
      <View
        style={{
          paddingTop: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledText color="#05C3CB" fontWeight="bold">{name}</StyledText>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledText color="#05C3CB" fontWeight="bold">${price}</StyledText>
      </View>
      <View>
        <StyledButton
          width={276}
          height={56}
          backgroundColor="#5C41A0"
          onPress={() => onBuy && onBuy(id)}
          style={
            {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }
          }
        >
          <StyledText color="white" fontWeight="bold">Buy</StyledText>
        </StyledButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    display: 'flex',
    justifyContent: 'space-between',
    width: 280,
    height: 360,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
  }
})

export default Product;