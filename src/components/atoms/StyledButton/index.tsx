import React, { useEffect } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import useStore from '../../../hooks/useStore';

interface StyledButtonProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  children: React.ReactNode;
  borderRadius?: number;
  onPress?: () => void;
  style?: any;
  disabled?: boolean;
}

const ButtonStyleSheet = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: '#838383'
  }
});




const StyledButton = ({
  width,
  height,
  backgroundColor,
  children,
  borderRadius,
  onPress,
  style,
  disabled = false
}: StyledButtonProps,) => {

  const onPressHandler = () => {
    if (onPress) {
      onPress()
    }
  }

  return <TouchableOpacity
    disabled={disabled}
    style={
      [
        ButtonStyleSheet.button,
        { width, height, backgroundColor, borderRadius },
        style,
        disabled ? ButtonStyleSheet.disabled : {}
      ]
    }
    onPress={onPressHandler}
  >
    {children}
  </TouchableOpacity>;
}

export default StyledButton;