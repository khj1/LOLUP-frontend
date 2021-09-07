import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import { API_DOMAIN } from './Env';

const memberId = localStorage.getItem("memberId");
const summonerName = localStorage.getItem("summonerName");

function ChatTest() {
    const [message, setMessage] = useState("");

    const sock = new SockJS(`${API_DOMAIN}/websocket-chat`);
    const client = Stomp.over(sock);

    const messageSendHandler = () => {
        const payload = {
            memberId: memberId,
            message: message
        }
        client.send('/app/user-all', {}, JSON.stringify(payload));
    }

    const messageHandler = (event) => {
        setMessage(event.currentTarget.value);
    }

    useEffect(() => {
        client.connect({}, ()=> {
            client.subscribe('/topic/user', (event) => {
                const result = JSON.parse(event.body);
                console.log('message=', result.message);
                console.log('memberId=', result.memberId);
            })
        });
    }, [])

    return (
        <div>
            <input 
                type="text"
                style={inputStyle}
                value={message}
                onChange={messageHandler} 
            />
            <Button onClick={messageSendHandler}> send</Button>
        </div>
    )
}

const inputStyle = {
    marginTop : "100px"
}

export default ChatTest;
