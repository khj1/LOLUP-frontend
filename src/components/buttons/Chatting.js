import React, { useState } from 'react';
import styled from 'styled-components'; 
import { GlobalStyles } from './globalStyles';
import Modal from './Modal';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer; 
`;

function Chatting() {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev=>!prev)
    };
 
    return (
        <>
            <Container>
                <Button onClick={openModal}><img src={'/images/buttons/kakaologo2.png'} width="35px"/></Button> 
                <Modal showModal={showModal} setShowModal={setShowModal} />
                <GlobalStyles/>
            </Container> 
        </>
    );
}

export default Chatting;

