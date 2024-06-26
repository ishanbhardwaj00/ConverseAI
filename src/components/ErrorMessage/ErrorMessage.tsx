import "./ErrorMessage.css";

const ErrorMessage = ({ message }: { message: string }) => {
  return <div className="message">{message}</div>;
  // return message;
};

export default ErrorMessage;
