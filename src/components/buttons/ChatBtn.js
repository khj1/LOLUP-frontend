import { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import '../../css/ChatBtn.css';
import { chatModalOff, chatModalOn, setChatUser } from '../../_actions/userAction';

const memberId = localStorage.getItem("memberId");

function ChatBtn({chatModalIsOn}) {
    const dispatch = useDispatch();
    const chatModalHandler = () => {
        if(chatModalIsOn){
            dispatch(chatModalOff());
        } else {
            dispatch(setChatUser(null, memberId, memberId));
            dispatch(chatModalOn());
        }
    }

    return (
        <div className="wrap">
            <button 
                className="chatBtn"
                onClick={chatModalHandler}
            >CHAT</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        chatModalIsOn : state.chatModal.isOn
    }
}

export default connect(mapStateToProps)(ChatBtn);