import React, {useState, useEffect} from 'react';
import './MessageListItem.scss';

const MessageListItem = ({ message, date, isMyChat }) => {
    const [chatTime, setChatTime] = useState("");
    const chatComp = () => {
        if(isMyChat) {
            return (
                <>
                    <span className= "chatTime">{chatTime}</span>
                    <div className= "chat myChat">{message}</div>
                </>
            )
        } else {
            return (
                <>
                    <div className= "chat notMyChat">{message}</div>
                    <span className= "chatTime">{chatTime}</span>
                </>
            )
        }
    }

    useEffect(() => {
        const chatDate = new Date(date);

        let hours = chatDate.getHours();
        let minutes = chatDate.getMinutes();
        
        setChatTime(hours + ":" + minutes);
    }, [])

    return (
    <div className="MessageListItem">
        <div className={isMyChat ? "wrapper myWrapper" : "wrapper notWrapper"} > 
            {chatComp()}
        </div> 
    </div>
    );
};

export default MessageListItem;