import { MessageType } from "../../types/MessageType";
import "./Message.css";

const Message = ({ id, text }: MessageType) => {
  return (
    <div key={id} className="message-card">
      {text}
    </div>
  );
};

export default Message;
