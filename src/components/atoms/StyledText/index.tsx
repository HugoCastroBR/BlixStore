import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface StyledTextProps {
  color?: string;
  fontSize?: number;
  fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
  children: React.ReactNode;
}

const TextStyleSheet = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const StyledText = ({ color, fontSize,fontWeight, children }: StyledTextProps,) => {
  return <Text style={
    [
      TextStyleSheet.text,
      { color, fontSize,fontWeight },
    ]
  }>
    {children}
  </Text>;
}



export default StyledText;