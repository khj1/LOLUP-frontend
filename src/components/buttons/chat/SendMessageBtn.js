import React from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components'; 
import { chatModalOn, loginModalOn, setChatUser } from '../../../_actions/userAction';
import { GlobalStyles } from './globalStyles';



function Chatting({summonerName, memberId, duoId, isAuth}) {
    const dispatch = useDispatch();

    const openModal = () => {
        if(isAuth){
            dispatch(setChatUser(summonerName, memberId, duoId));
            dispatch(chatModalOn());
        } else {
            dispatch(loginModalOn());
        }
    };

    return (
        <Container>
            <Button onClick={openModal}><img src={'/images/buttons/kakaologo2.png'} width="30px"/></Button> 
            <GlobalStyles/>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`  
  border: none;
  background: none; 
  font-size: 24px; 
`;

const mapStateToProps = state => {
    return {
        isAuth: state.auth.authorized,
        chatModalIsOn : state.chatModal.isOn
    }
}

export default connect(mapStateToProps)(Chatting);

