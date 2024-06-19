import ChatHeading from "../../components/ChatHeading/ChatHeading";
import Disclaimer from "../../components/Disclaimer/Disclaimer";
import Searchbar from "../../components/Searchbar/Searchbar";
import Chat from "../Chat/Chat";
import './ChatScreen.css'
const ChatScreen = () => {
  return <div className="main-chat-screen">
    <ChatHeading />
    <Chat />
    <Searchbar />
    <Disclaimer />
    </div>;
};

export default ChatScreen;
