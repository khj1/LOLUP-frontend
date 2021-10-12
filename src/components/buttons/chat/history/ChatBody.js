import React, { useState, useCallback } from 'react'; 
import MessageInsert from './MessageInsert'; 
import MessageList from './MessageList';  
import HistoryTemplate from './HistoryTemplate';


const ChatBody = () => {
    const [contents, setContents] = useState([]);

    const onInsert = data => {
        setContents(data);
    };

    return (
        <HistoryTemplate>
            <MessageList messages={contents} />
            <MessageInsert onInsert={onInsert} />
        </HistoryTemplate>
    );
}; 

export default ChatBody;
