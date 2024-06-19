import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import ChatScreen from "../ChatScreen/ChatScreen";

const Main = () => {
  return (
    <div className="main">
      <Sidebar />
      <ChatScreen />
    </div>
  );
};

export default Main;
