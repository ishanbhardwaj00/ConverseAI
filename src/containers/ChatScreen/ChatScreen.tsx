import React from 'react';
import ChatHeading from "../../components/ChatHeading/ChatHeading";
import Disclaimer from "../../components/Disclaimer/Disclaimer";
import Chat from "../Chat/Chat";
import './ChatScreen.css'

interface ChatScreenProps{
  isSidebarOpen: boolean;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ isSidebarOpen }) => {

  return( 
    <div className={`main-chat-screen ${isSidebarOpen ? 'small' : ''}`}>
      <ChatHeading />
      <Chat />
      <Disclaimer />
    </div>
  );
};

export default ChatScreen;
