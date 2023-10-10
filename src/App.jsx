import { useState } from "react";

import Navber from "./components/Navber/Navber";
import Cards from "./components/Cards/Cards";
import UserProvider from "./context/UsersContext";
import ToggleProvider from "./context/ToggleContext";

function App() {
  return (
    <>
      <UserProvider>
        <ToggleProvider>
          <Navber />
          <Cards />
        </ToggleProvider>
      </UserProvider>
    </>
  );
}

export default App;
