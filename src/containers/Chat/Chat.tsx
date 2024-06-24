import Loading from '../../components/Loading';
import Message from '../../components/Message/Message';
import NewChat from '../../components/NewChat/NewChat';
import { IoFlaskOutline } from "react-icons/io5";
import { useState } from 'react';

import './Chat.css'
import axios from 'axios';

type MessageType =  {
  message: string
}

const Chat = () => {
  const [messages, setMessages] = useState([{
    message: "hello fvij'vwji;vvwjvwr;vw;rivwrjlvwrvliwrjvlviwrjvwlvjwrlvwrjv;lrvjwrilvrvlwir;jvwrlvjrwlvwrjvliwrvjr;lvwrj;vrwvil"
  }, {
    message: "hello, how can i assist you?"
  }]);

  // let messages :MessageType[] = [];
  const [searchQuery, setSearchQuery] = useState("");

  async function getAnswer(question: string) {
    console.log("gETTING Nawer");
    
    const prompt = question.trim();
    const response = await axios.post('http://192.168.251.212:5555/v1/completions', {
      model: "/Hard_Disk-2/coe_codestral",
      prompt: prompt,
      max_tokens: 256,
      temperature: 0.2
  });


  console.log(response.data.choices[0].text);
  
  }
  function appendMessage(message:string) {
    console.log("aeending mesggse");
    
    const msgs = messages;
    msgs.push({message});
    setMessages(msgs);
  }
  if(messages.length === 0) {
    return <NewChat />
  }
  return (
    <>
    <div className="chat">
      {messages.length === 0 ? <Loading />:  messages.map((message, index) => {
        if(index&1)
          return <div>{message.message}, {index}</div>
        else
          return <Message message={message.message} />
          
      })}
    </div>
    <div className="searchbar">
      <div className="search-container">
          <input value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} type="text" placeholder='Ask us something'/>
          <IoFlaskOutline className='search-icon' size={28} onClick={() => {appendMessage(searchQuery); setSearchQuery("");}}/>
      </div>

    </div>
    </>
  )
}

export default Chat