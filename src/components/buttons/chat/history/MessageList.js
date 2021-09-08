import React, { useEffect } from 'react'; 
import MessageListItem from './MessageListItem';
import './MessageList.scss';

const MessageList = ({ messages }) => {
    const scrollToBottom = () => {
        const messageList = document.getElementById("messageList");
        messageList.scrollTop = messageList.scrollHeight - messageList.clientHeight;
    }
    
    useEffect(() => {
        scrollToBottom();
    })
    
    return (
        <div id="messageList" className="MessageList">
            {messages.map(data => (
                <MessageListItem 
                    message={data.message} 
                    key={data.messageId} 
                    date={data.date}
                    isMyChat={data.isMyChat}
                />
            ))}
        </div>
    );
}; 

export default MessageList;
