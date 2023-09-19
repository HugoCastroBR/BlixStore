import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

interface StyledButtonProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  children: React.ReactNode;
  borderRadius?: number;
  onPress?: () => void;
}

const ButtonStyleSheet = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const StyledButton = ({ width, height, backgroundColor, children, borderRadius,onPress }: StyledButtonProps,) => {
  
  const onPressHandler = () => {
    if(onPress){
      onPress()
    }
  }
  
  return <TouchableOpacity style={
    [
      ButtonStyleSheet.button,
      { width, height, backgroundColor, borderRadius },
    ]
  }
  onPress={onPressHandler}
  >
    {children}
  </TouchableOpacity>;
}

export default StyledButton;