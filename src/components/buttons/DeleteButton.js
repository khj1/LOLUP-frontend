import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux'
import { API_DOMAIN } from '../../utils/Env';
import { update } from '../../_actions/userAction';

function DeleteButton({duoId, memberId}) {
    const imgPath = "/images/buttons/xbutton.png";
    const accessToken = localStorage.getItem("token");

    const dispatch = useDispatch();
    const deleteData = () => {
        axios.defaults.baseURL = API_DOMAIN;
        axios.defaults.headers = { 
            'Authorization' : `Bearer ${accessToken}`
        };  
        axios.delete(`/duo/${duoId}`, {
            params: {
                memberId: memberId
            }
        })
        .then(() => {
            dispatch(update());
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <img src={imgPath} style={buttonStyle} onClick={deleteData}/>
    )
}

const buttonStyle = {
    width: "25px",
    cursor: "pointer"
}

export default DeleteButton
