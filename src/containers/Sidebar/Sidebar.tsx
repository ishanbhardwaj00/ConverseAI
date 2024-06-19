import React, { useState } from "react";
import './Sidebar.css'

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="welcome">
        <p>Welcome To Codestral AI</p>
      </div>
      <div>
        <button onClick={toggleSidebar} className="toggle-button">
          {isSidebarOpen ? '❌' : '☰'}
        </button>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <p>This is the sidebar content</p>
      </div>
    </div>
  );
};

export default Sidebar;
