 import React, { useState, useEffect } from 'react'; 
import Stomp from 'stompjs'
import SockJS from 'sockjs-client';
import './MessageInsert.scss';
import { API_DOMAIN } from '../../../../utils/Env';
import { connect } from 'react-redux';

let sock;
let client;

const MessageInsert = ({ onInsert, chatRoomId }) => {
    const [message, setMessage] = useState("");
    const [contents, setContents] = useState([]);
    const memberId = localStorage.getItem("memberId");

    useEffect(() => {
        sock = new SockJS(`${API_DOMAIN}/websocket-message`);
        client = Stomp.over(sock);
        client.connect({}, ()=> {
            client.subscribe(`/queue/user/${chatRoomId}`, (data) => {
                    console.log("data", data);
                    makePayload(JSON.parse(data.body));
                    setMessage('');
                })
            }
        );
    }, []);

    const makePayload = result => {
        let isMyChat = checkIsMyChat(result.memberId);

        const content = {
            messageId: result.messageId,
            message: result.message,
            date: result.date,
            isMyChat: isMyChat
        };

        setContents((prev) => [...prev, content]);
        onInsert((prev) => [...prev, content]);
    };

    const checkIsMyChat = id => {
        return memberId == id;
    }

    const onChange = event => {
        setMessage(event.currentTarget.value);
    };

    const onSubmit = (event => {
        const payload = {
            memberId: memberId,
            roomId: chatRoomId,
            message: message
        }
        client.send('/app/user-all', {}, JSON.stringify(payload));
        event.preventDefault();
    });

    return (
        <form className="MessageInsert" onSubmit={onSubmit}>
            <input
                placeholder="메세지를 입력해주세요."
                value={message}
                onChange={onChange}
            />
            <button type="submit">Send</button>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        chatRoomId : state.chatUser.chatRoomId
    }
}

export default connect(mapStateToProps)(MessageInsert);
