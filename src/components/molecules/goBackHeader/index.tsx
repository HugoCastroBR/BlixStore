import React from "react";
import { View, StyleSheet } from "react-native";
import StyledButton from "../../atoms/StyledButton";
import StyledText from "../../atoms/StyledText";


interface GoBackHeaderProps {
  onGoBack: () => void;
}
const GoBackHeader = ({onGoBack}:GoBackHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.ItemContainer}>
        <StyledButton
          width={220}
          height={50}
          borderRadius={10}
          onPress={() => onGoBack()}
        >
          <StyledText color="white" fontWeight="400">Go Back</StyledText>
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
    paddingTop: 10,
    marginTop: 20,
  }
})

export default GoBackHeader;