import { v1 } from "uuid";
import { MessageType } from "../../types/MessageType";
import "./Message.css";

const Message = ({ content }: MessageType) => {
  return (
    <div key={v1()} className="message-card">
      {content}
    </div>
  );
};

export default Message;
