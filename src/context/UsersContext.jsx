import React, { createContext, useState } from "react";

export const UsersContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([
    {
      name: "Fahmida Yeasmin",
      img: "https://rameem2003.github.io/oursite/img/gallery/fahmida.jpg",
      id: 451628,
    },
    {
      name: "Jehedul Islam Rasel",
      img: "https://rameem2003.github.io/oursite/img/gallery/jahid_rasel.jpg",
      id: 451670,
    },
    {
      name: "Abdul baten",
      img: "https://rameem2003.github.io/oursite/img/gallery/baten.jpg",
      id: 451627,
    },
  ]);

  return (
    <UsersContext.Provider value={{ userData, setUserData }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UserProvider;
