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
      {/* <div > */}
        <ChatScreen isSidebarOpen={isSidebarOpen} />
      {/* </div> */}
    </div>
  );
};

export default Main;
