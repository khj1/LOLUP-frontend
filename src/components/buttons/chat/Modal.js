import React, {useRef, useEffect, useCallback} from 'react'; 
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';    
import MessageForm from './SendMessage/MessageForm'; 
import TestApp from './history/TestApp';

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
    left: 82%;
    top: 58%;
    width: 20%;
    height: 60%;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
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

export const Modal = ({showModal, setShowModal}) => {
    const modalRef = useRef()

    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModal(false);
        }
    };

    const keyPress = useCallback(e => {
        if(e.key==='Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
            {showModal ? (
                <Background > 
                    <ModalWrapper showModal={showModal}> 
                        <ModalHeader ref={modalRef} onClick={closeModal}>소환사 님과의 채팅</ModalHeader>
                        <ModalContent>     
                            <TestApp />
                        </ModalContent> 
                        <ModalFooter>
                            <MessageForm/> 
                        </ModalFooter>
                        <CloseModalButton aria-label='Close modal' onClick={()=>setShowModal (prev => !prev)}/>
                    </ModalWrapper>
                </Background>
            ) : null}
        </>
    );
}

export default Modal;
