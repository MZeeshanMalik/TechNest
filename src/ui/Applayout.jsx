import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { SideBarContextProvider } from "./SideBarContext";

function Applayout() {
  const navigation = useNavigate();
  return (
    <div>
      <SideBarContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </SideBarContextProvider>
    </div>
  );
}

export default Applayout;
