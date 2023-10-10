import { createContext, useState } from "react";

export const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ show, setShow }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;
