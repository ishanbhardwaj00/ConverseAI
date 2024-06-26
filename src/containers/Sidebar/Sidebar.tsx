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
      <div className="toggle-button">
        <Hamburger size={25} toggled={isSidebarOpen} toggle={toggleSidebar} />
      </div>
        {isSidebarOpen ? 
          <p>this is just a sidebar.</p>
         : <div>.</div>}
    </div>
  );
};

export default Sidebar;
