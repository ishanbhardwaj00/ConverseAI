import Loading from "../../components/Loading";
import Message from "../../components/Message/Message";
import NewChat from "../../components/NewChat/NewChat";
import { IoFlaskOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

import "./Chat.css";
import axios from "axios";
import Reply from "../Reply/Reply";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { v1 } from "uuid";

const Chat = () => {
  type MessageType = {
    id: string;
    type: string;
    message: string;
  };
  // const [messages, setMessages] = useState([
  //   {
  //     message: "hello"
  //   },
  //   {
  //     message: `const mongoose = require('mongoose');
  //     const userSchema = new mongoose.Schema({
  //       username: {
  //         type: String,
  //         required: true,
  //         unique: true
  //       },
  //       email: {
  //         type: String,
  //         required: true,
  //         unique: true
  //       },
  //       password: {
  //         type: String,
  //         required: true
  //       },
  //       isAdmin: {
  //         type: Boolean,
  //         default: false
  //       },
  //       createdAt: {
  //         type: Date,
  //         default: Date.now
  //       }
  //     });

  //     module.exports = mongoose.model('User', userSchema)`,
  //   },
  // ]);

  const [messages, setMessages] = useState<MessageType[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [searchBarSelected, setSearchBarSelected] = useState(false);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  function submitQuery() {
    if (!loading && searchQuery.length) {
      appendMessage({ message: searchQuery, type: "text", id: v1() });
      setSearchQuery("");
      getAnswer(searchQuery);
    } else {
      console.log("Loading....... Cannot request");
    }
  }
  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  async function getAnswer(question: string) {
    console.log("Getting  answer");
    setLoading(true);
    const prompt = question.trim();
    if (prompt) {
      try {
        const response = await axios.post(
          "http://192.168.251.212:5555/v1/completions",
          {
            model: "/Hard_Disk-2/coe_codestral",
            prompt: prompt,
            max_tokens: 1024,
            temperature: 0.2,
          }
        );
        appendMessage({
          message: response.data.choices[0].text,
          type: "text",
          id: v1(),
        });
        console.log(response.data);
      } catch (error) {
        appendMessage({ message: "Error", type: "error", id: v1() });
      }
      setLoading(false);
    }
  }
  function appendMessage(message: MessageType) {
    console.log("appending message");
    const msgs = messages;
    msgs.push(message);
    setMessages(msgs);
  }
  return (
    <>
      {messages.length === 0 ? (
        <NewChat />
      ) : (
        <div id="chat">
          {messages.map((message, index) => {
            if (index & 1) {
              if (message.type === "error") {
                return <ErrorMessage message={message.message} />;
              }
              return <Reply id={message.id} message={message.message} />;
            } else return <Message message={message.message} />;
          })}
          {loading && <Loading />}
          <div ref={messagesEndRef}></div>
        </div>
      )}
      <div
        className={`searchbar ${searchBarSelected ? "selected" : "not-selected"}`}
      >
        <div className="search-container">
          <input
            onFocus={() => {
              setSearchBarSelected(true);
            }}
            onBlur={() => {
              setSearchBarSelected(false);
            }}
            // onKeyDown={(e) => {
            //   if (e.key === "ENTER") {
            //     submitQuery();
            //   }
            // }}
            // onSelect={() => {
            //   setSearchBarSelected(true);
            // }}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            type="text"
            placeholder="Ask us something"
          />
          <IoFlaskOutline
            className="search-icon"
            size={28}
            onClick={submitQuery}
          />
        </div>
      </div>
    </>
  );
};

export default Chat;
