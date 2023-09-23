import React from "react";
import { View, StyleSheet } from "react-native";
import StyledButton from "../../atoms/StyledButton";
import StyledText from "../../atoms/StyledText";


interface RegisterGoBackProps {
  onGoBack: () => void;
  success: boolean;
}


const RegisterGoBack = ({ onGoBack, success }: RegisterGoBackProps) => {

  if (success) {
    return (
      <View style={styles.containerSuccess}>
        <View style={styles.ItemContainer}>
          <StyledButton
            width={220}
            height={50}
            backgroundColor='#3B5998'
            borderRadius={10}
            onPress={() => onGoBack()}
          >
            <StyledText color="white" fontWeight="bold">Login</StyledText>
          </StyledButton>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.ItemContainer}>


        <StyledButton
          width={220}
          height={50}
          borderRadius={10}
          onPress={() => onGoBack()}
        >
          <StyledText color="white" fontWeight="100">Login</StyledText>
        </StyledButton>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSuccess: {
    marginTop: 20,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ItemContainer: {
    marginBottom: 10,
  }
})

export default RegisterGoBack;