/* eslint-disable react/prop-types */
import { Sidebar } from "./NavbarStyles";

function SideBar({ position, children, isSidebarOpen }) {
  return (
    <>
      <Sidebar $position={position} $isOpen={isSidebarOpen}>
        {children}
      </Sidebar>
    </>
  );
}

export default SideBar;
