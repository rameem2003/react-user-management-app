import { useState } from "react";

import Navber from "./components/Navber/Navber";
import Cards from "./components/Cards/Cards";
import UserProvider from "./context/UsersContext";

function App() {
  return (
    <>
      <UserProvider>
        <Navber />
        <Cards />
      </UserProvider>
    </>
  );
}

export default App;
