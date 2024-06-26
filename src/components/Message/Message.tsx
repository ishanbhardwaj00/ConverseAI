import "./Message.css";
import { v1 } from "uuid";
type MessageType = {
  message: string;
};

const Message = ({ message }: MessageType) => {
  return (
    <div key={v1()} className="message-card">
      {message}
    </div>
  );
};

export default Message;
