import React from "react";
import LoginButtons from "../../molecules/loginButtons";
import useStore from "../../../hooks/useStore";
import { HomeProps } from "../../pages/home";


interface HomeButtonsProps {
  onRegister: () => void;
  onLogin: () => void;
  toggleValid : () => boolean;
}
const HomeButtons = ({onRegister,onLogin,toggleValid}:HomeButtonsProps) => {

  
  return <LoginButtons toggleValid={toggleValid} onLogin={onLogin} onRegister={onRegister} />;
}

export default HomeButtons;