import React, { useState, useRef, useCallback } from 'react'; 
import MessageInsert from './MessageInsert'; 
import MessageList from './MessageList';  
import HistoryTemplate from './HistoryTemplate';

const TestApp = () => {
    const [messages, setMessages] = useState([
        {
            id: 0,
            text: '', 
        }, 
    ]);

    const nextId = useRef(1);

    const onInsert = useCallback(text => {
        console.log("onInsert 호출")

        const message = {
            id: nextId.current,
            text, 
        };

        setMessages(messages.concat(message));
        nextId.current += 1; 
    }, [messages]);


    return (
        <HistoryTemplate>
            <MessageList messages={messages} />
            <MessageInsert onInsert={onInsert} />
        </HistoryTemplate>
    );
}; 

export default TestApp;
