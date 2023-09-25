
import React from 'react'
import LoginInput from '../../molecules/loginInput'

interface HomeInputsProps {
  isLoginValid: (value: boolean) => void;
}

const HomeInputs = ({isLoginValid}:HomeInputsProps) => {
  return <LoginInput
    isLoginValid={isLoginValid}
  />
}

export default HomeInputs