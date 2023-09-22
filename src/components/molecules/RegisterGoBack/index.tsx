import React from "react";
import { View, StyleSheet } from "react-native";
import StyledButton from "../../atoms/StyledButton";
import StyledText from "../../atoms/StyledText";


interface RegisterGoBackProps {
  onGoBack: () => void;
}
const RegisterGoBack = ({onGoBack}:RegisterGoBackProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.ItemContainer}>
        <StyledButton
          width={220}
          height={50}
          borderRadius={10}
          onPress={() => onGoBack()}
        >
          <StyledText color="white" fontWeight="100">Go Back</StyledText>
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
  ItemContainer: {
    marginBottom: 10,
  }
})

export default RegisterGoBack;