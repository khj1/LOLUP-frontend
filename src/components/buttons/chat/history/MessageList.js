import React from 'react'; 
import MessageListItem from './MessageListItem';
import './MessageList.scss';

const MessageList = ({ messages }) => {
    return (
        <div className="MessageList">
            {messages.map(message => (
                <MessageListItem message={message} key={message.id} />
            ))}
        </div>
    );
}; 

export default MessageList;
