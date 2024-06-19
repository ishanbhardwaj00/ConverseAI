import Loading from '../../components/Loading';
import Message from '../../components/Message/Message';
import NewChat from '../../components/NewChat/NewChat';
import './Chat.css'

type MessageType =  {
  message: string
}

const Chat = () => {
  let messages:MessageType[] = [{
    message: "hello"
  }, {
    message: "hello, how can i assist you?"
  }];
  // let messages :MessageType[] = [];

  if(messages.length === 0) {
    return <NewChat />
  }
  return (
    <div className="chat">
      {messages.length === 0 ? <Loading />:  messages.map((message, index) => {
        if(index&1)
          return <div>{message.message}, {index}</div>
        else
          return <Message message={message.message} />
          
      })}
    </div>
  )
}

export default Chat