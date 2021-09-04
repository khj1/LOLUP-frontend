import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import { withRouter } from 'react-router';
import axios from 'axios';

import { API_DOMAIN } from '../../utils/Env';

function Logout() {
    useEffect(() => {
        const memberId = localStorage.getItem("memberId");
        localStorage.removeItem("token");

        axios.defaults.baseURL = API_DOMAIN;
        axios.delete(`/auth/${memberId}`).then(response => {
            console.log("logout result=", response.data.logout)
            localStorage.removeItem("memberId");
            localStorage.removeItem("summonerName");
        })
    }, []);

    return (
        <Spinner />
    )
}

export default withRouter(Logout);
