/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";
export const SideBarContext = createContext();
export const SideBarContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <SideBarContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarContext;
