import React from "react";
import Hamburger from "hamburger-react";

import "./Sidebar.css";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar-container ${isSidebarOpen ? "open" : "closed"}`}>
      <Hamburger size={24} toggled={isSidebarOpen} toggle={toggleSidebar} />
      {/* <div onClick={toggleSidebar} className="toggle-button">
        {isSidebarOpen ? <VscMenu size={28} /> : <VscMenu size={28} />}
      </div> */}
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <p>This is the sidebar content</p>
      </div>
    </div>
  );
};

export default Sidebar;
