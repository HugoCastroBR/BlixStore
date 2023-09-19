import React,{useState} from 'react';
import { TextInput, StyleSheet } from 'react-native';
import useStore from '../../../hooks/useStore';

interface StyledInputProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  placeholder?: string;
  borderRadius?: number;
  onBlur?: () => void;
  onExit?: (value:string) => void;
}

const InputStyleSheet = StyleSheet.create({
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'transparent'
  },
});



const StyledTextInput = (
  {
    width,
    height,
    backgroundColor,
    borderRadius,
    placeholder,
    onExit,
  }: StyledInputProps,) => {

  const [text, onChangeText] = useState("");
  
  const onBlurHandler = () => {
    if(onExit){
      onExit(text)
    }
  }
  
  return <TextInput
    value={text}
    placeholder={placeholder}
    onBlur={() => onBlurHandler()}
    onChangeText={onChangeText}
    style={
      [
        InputStyleSheet.input,
        { width, height, backgroundColor, borderRadius },
      ]
    } />

}

export default StyledTextInput;