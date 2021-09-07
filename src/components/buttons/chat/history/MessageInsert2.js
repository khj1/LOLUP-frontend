import React, { useState, useEffect, useRef } from 'react'; 
import * as StompJS from '@stomp/stompjs'
import * as SockJS from 'sockjs-client';
import './MessageInsert.scss';
import { API_DOMAIN } from '../../../../utils/Env';
import { connect } from 'react-redux';

const memberId = localStorage.getItem("memberId");
const ROOM_SEQ = 1;

const MessageInsert = ({ onInsert }) => {
    const client = useRef({});
    const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        connect();
        return () => disconnect();
    }, [])

    const connect = () => {
        client.current = new StompJS.Client({
            webSocketFactory: () => new SockJS(`${API_DOMAIN}/websocket-chat`),
            debug: function (str) {
                console.log(str);
            },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
            onConnect: () => {
                subscribe();
            },
            onStompError: (frame) => {
                console.error(frame);
            }
        });

        client.current.activate();
    };
    
    const disconnect = () => {
        client.current.deactivate();
    }

    const subscribe = () => {
        client.current.subscribe(`/queue/user/${ROOM_SEQ}`, ({ body }) => {
            setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
        });
    };

    const publish = (message) => {
        if(!client.current.connected) {
            return;
        }

        client.current.publish({
            destination: "/user-all",
            body: JSON.stringify({roomSeq: ROOM_SEQ, message})
        });

        setMessage("");
    }

    return (
        <form className="MessageInsert">
            <input
                placeholder="메세지를 입력해주세요."
                value={message}
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageInsert;
