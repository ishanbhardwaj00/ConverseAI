import Loading from "../../components/Loading";
import Message from "../../components/Message/Message";
import NewChat from "../../components/NewChat/NewChat";
import { useEffect, useRef, useState } from "react";

import "./Chat.css";
import Reply from "../Reply/Reply";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Searchbar from "../../components/Searchbar/Searchbar";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const Chat = () => {
  // const [messages, setMessages] = useState([
  //   {
  //     message: "hello",
  //   },
  //   {
  //     message: `
  //     {

  //         ListNode* slow = node;

  //         ListNode* fast = node;

  //         while(fast != NULL && fast->next != NULL)

  //         {

  //             slow = slow->next;

  //             fast = fast->next->next;

  //         }

  //         return slow; }
  //     "`,
  //   },
  // ]);

  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);
  console.log(messages);

  return (
    <>
      {messages.length === 0 ? (
        <NewChat />
      ) : (
        <div id="chat">
          {messages.map((message, index) => {
            if (message.role === "assistant") {
              if (message.content && message.content.length === 0) {
                return <ErrorMessage message="errors" />;
              }
              return <Reply {...message} />;
            } else return <Message {...message} />;
          })}
          {loading && <Loading />}
          <div ref={messagesEndRef}></div>
        </div>
      )}

      <Searchbar
        messages={messages}
        setMessages={setMessages}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
};

export default Chat;
