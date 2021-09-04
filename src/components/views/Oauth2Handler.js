import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { authorized } from '../../_actions/userAction';

function Oauth2Handler(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        const url = new URL(window.location.href);
        const token = url.searchParams.get("token");

        if(token) {
            localStorage.setItem("token", token);
            dispatch(authorized()).then(response => {
                console.log("auth response =", response.payload);
            })
        }
        props.history.push("/");
    }, []);

    return (
        <Spinner />
    )
}

export default withRouter(Oauth2Handler);
