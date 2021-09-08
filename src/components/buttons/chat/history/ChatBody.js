import React, { useState, useCallback } from 'react'; 
import MessageInsert from './MessageInsert'; 
import MessageList from './MessageList';  
import HistoryTemplate from './HistoryTemplate';

const memberId = localStorage.getItem("memberId");

const ChatBody = () => {
    const [messages, setMessages] = useState([]);

    const onInsert = useCallback(result => {
        let isMyChat;
        if(memberId == result.memberId){
            isMyChat = true;
        } else {
            isMyChat = false;
        }

        const message = {
            messageId: result.messageId,
            message: result.message,
            date: result.date,
            isMyChat: isMyChat
        };

        setMessages([...messages, message]);
    });

    return (
        <HistoryTemplate>
            <MessageList messages={messages} />
            <MessageInsert onInsert={onInsert} />
        </HistoryTemplate>
    );
}; 

export default ChatBody;
