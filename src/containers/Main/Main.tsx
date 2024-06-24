import { useState } from 'react';
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import ChatScreen from "../ChatScreen/ChatScreen";

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <ChatScreen isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default Main;
