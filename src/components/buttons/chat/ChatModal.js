import React, {useCallback} from 'react'; 
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';    
import ChatBody from './history/ChatBody';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { chatModalOff } from '../../../_actions/userAction';
import '../../../css/ChatModal.css';

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
                    <ModalHeader>
                        <span className="chatHeaderText">
                            {chatUserName ? `${chatUserName}님과의 채팅` : "나에게 온 채팅"}
                        </span>
                    </ModalHeader>
                    <ModalContent>     
                        <ChatBody />
                    </ModalContent> 
                    <CloseModalButton aria-label='Close modal' onClick={closeModal}/>
                </ModalWrapper>
            </Background>
        </>
    );
}

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
    top: 590px;
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
    background: #4C5E70;
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
    color: white;
    top: 22px;
    right: 20px;
    width: 32px;
    height :32px;
    padding: 0;
    z-index: 10px;
`;

const mapStateToProps = state => {
    return {
        chatModalIsOn : state.chatModal.isOn
    }
}

export default connect(mapStateToProps)(ChatModal);
