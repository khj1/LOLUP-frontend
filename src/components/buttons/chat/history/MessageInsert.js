import React, { useState, useEffect } from 'react'; 
import Stomp from 'stompjs'
import SockJS from 'sockjs-client';
import './MessageInsert.scss';
import { API_DOMAIN } from '../../../../utils/Env';
import { connect } from 'react-redux';

const memberId = localStorage.getItem("memberId");

const MessageInsert = ({ onInsert, chatUserId }) => {
    const [message, setMessage] = useState("");
    const sock = new SockJS(`${API_DOMAIN}/websocket-chat`);
    const client = Stomp.over(sock);

    useEffect(() => {
        client.connect({}, ()=> {
            client.subscribe(`/queue/user/${chatUserId}`, (event) => {
                    const result = JSON.parse(event.body);
                    onInsert(result.message);
                    setMessage('');
                })
            }
        );

        return () => client.disconnect();
    }, [])

    const onChange = (event => {
        setMessage(event.currentTarget.value);
    });

    const onSubmit = (event => {
        const payload = {
            memberId: memberId,
            roomId: chatUserId,
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
        chatUserId : state.chatUser.chatUserId
    }
}

export default connect(mapStateToProps)(MessageInsert);
