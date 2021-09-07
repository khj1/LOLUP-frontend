import React, {useRef, useEffect, useCallback} from 'react'; 
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';    
import MessageForm from './SendMessage/MessageForm'; 
import TestApp from './history/TestApp';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { chatModalOff } from '../../../_actions/userAction';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs'
import { API_DOMAIN } from '../../../utils/Env';

const Background = styled.div`
    width: 100%;
    height: 100%; 
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`; 

const ModalWrapper = styled.div`
    transform: translate(-20%, -50%); 
    right: 0;
    top: 630px;
    width: 480px;
    height: fit-content;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.03);
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 10;
    border-radius: 10px;
`;

const ModalHeader = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    align-items: center;
    line-height: 5;
    color: #141414;
    background: #F2F5F8;
    border: 1px;
    border-color:white;
    word-break:break-all;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    color: #141414;
    background: #F2F5F8;
`;

const ModalFooter = styled.div`
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    line-height: 2;
    background: #F2F5F8;
`;

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height :32px;
    padding: 0;
    z-index: 10px;
`;

export const ChatModal = ({chatModalIsOn, chatUserName}) => {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(chatModalOff());
    };

    const keyPress = useCallback(event => {
        if(event.keyCode==='Escape' && chatModalIsOn) {
            dispatch(chatModalOff)
        }   
    });

    return (
        <>
            <Background > 
                <ModalWrapper> 
                    <ModalHeader>{chatUserName}님과의 채팅</ModalHeader>
                    <ModalContent>     
                        <TestApp />
                    </ModalContent> 
                    <CloseModalButton aria-label='Close modal' onClick={closeModal}/>
                </ModalWrapper>
            </Background>
        </>
    );
}

const mapStateToProps = state => {
    return {
        chatModalIsOn : state.chatModal.isOn
    }
}

export default connect(mapStateToProps)(ChatModal);
