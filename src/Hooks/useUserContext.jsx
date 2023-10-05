import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

const useUserContext = () => {
  return useContext(UsersContext);
};

export default useUserContext;
