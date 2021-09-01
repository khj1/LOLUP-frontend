import React, {useRef, useEffect, useCallback} from 'react'; 
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';

const Background = styled.div`
    width: 100%;
    height: 100%; 
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`; 

const ModalWrapper = styled.div`
    width: 450px;
    height: 650px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 5fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`;


const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p{
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
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
                <Background ref={modalRef} onClick={closeModal}> 
                    <ModalWrapper showModal={showModal}> 
                        <ModalContent>
                            <h3>대화상대 배치</h3> 
                        </ModalContent>
                        <ModalContent>
                            <h1>Chatting</h1>
                            <p>chat</p>
                            {/*<button>Join</button>*/}
                        </ModalContent>
                        <CloseModalButton aria-label='Close modal' onClick={()=>setShowModal
                        (prev => !prev)}/>
                    </ModalWrapper> 
                </Background>
            ) : null}
        </>
    );
}

export default Modal;
