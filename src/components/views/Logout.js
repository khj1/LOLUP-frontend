import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import { authorized } from '../../_actions/userAction';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function Logout(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        const accessToken = localStorage.getItem("token");

        // axios.defaults.baseURL = "http://lolup-api.p-e.kr";
        axios.defaults.baseURL = "http://localhost:8080";
        axios.defaults.headers = { 
            'Authorization' : `Bearer ${accessToken}` 
        };
        axios.delete("/auth/logout").then(response => {
            console.log("data.logout=", response.data.logout)

            if(response.data.logout){
                localStorage.removeItem("token");
                dispatch(authorized());
                props.history.push("/");
            }
        })
    }, []);

    return (
        <Spinner />
    )
}

export default withRouter(Logout);
