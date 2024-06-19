import './Message.css'

type MessageType =  {
    message: string
}

const Message = ({message}: MessageType) => {
  return (
    <div className='message-card'>{message}</div>
  )
}

export default Message