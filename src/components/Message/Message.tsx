import { v1 } from "uuid";
import "./Message.css";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const Message = ({ content }: ChatCompletionMessageParam) => {
  return (
    <div key={v1()} className="message-card">
      {content?.toString()}
    </div>
  );
};

export default Message;
