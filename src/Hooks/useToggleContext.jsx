import React, { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext";

const useToggleContext = () => {
  return useContext(ToggleContext);
};

export default useToggleContext;
