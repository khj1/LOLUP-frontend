 import React, { useState, useEffect } from 'react'; 
import Stomp from 'stompjs'
import SockJS from 'sockjs-client';
import './MessageInsert.scss';
import { API_DOMAIN } from '../../../../utils/Env';
import { connect } from 'react-redux';

const memberId = localStorage.getItem("memberId");

const MessageInsert = ({ onInsert, chatRoomId }) => {
    const [message, setMessage] = useState("");
    const sock = new SockJS(`${API_DOMAIN}/websocket-chat`);
    const client = Stomp.over(sock);

    useEffect(() => {
        client.connect({}, ()=> {
            client.subscribe(`/queue/user/${chatRoomId}`, (event) => {
                    const result = JSON.parse(event.body);
                    onInsert(result);
                    setMessage('');
                })
            }
        );

        return () => client.disconnect();
    }, [onInsert])

    const onChange = (event => {
        setMessage(event.currentTarget.value);
    });

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
