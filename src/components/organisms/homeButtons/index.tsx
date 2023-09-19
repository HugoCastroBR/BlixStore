import React from "react";
import LoginButtons from "../../molecules/loginButtons";
import useStore from "../../../hooks/useStore";
import { HomeProps } from "../../pages/home";


interface HomeButtonsProps {
  onRegister: () => void;
  onLogin: () => void;
}
const HomeButtons = ({onRegister,onLogin}:HomeButtonsProps) => {

  
  return <LoginButtons onLogin={onLogin} onRegister={onRegister} />;
}

export default HomeButtons;