import React from 'react';
import { RiMenuFill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import './Sidebar.css'

interface SidebarProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
  }

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {

  return (
    <div className={`sidebar-container ${isSidebarOpen ? 'open' : 'closed'}`}>
        <button onClick={toggleSidebar} className="toggle-button">
          {isSidebarOpen ? <MdOutlineClose /> : <RiMenuFill />}
        </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <p>This is the sidebar content</p>
      </div>
    </div>
  );
};

export default Sidebar;
