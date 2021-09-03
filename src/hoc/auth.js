import axios from 'axios';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { authorized } from '../_actions/userAction';

import { API_DOMAIN } from '../utils/Env';

export default function (SpectificComponent, option){
    // option
        // null      => 아무나 출입 가능
        // true      => 로그인한 유저만 출입 가능
        // false     => 로그인한 유저는 출입 불가능
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        
        useEffect(() => {
            if(localStorage.getItem("token") != null){
                dispatch(authorized()).then(response => {
                    console.log("AuthenticationCheck=", response)
                    if(response.payload == 401){
                        axios.defaults.baseURL = API_DOMAIN;
                        axios.defaults.headers = {
                            'Authorization' : "expired Token"
                        }
                        axios.get("/auth/refresh", { withCredentials : true })
                        .then(response => {
                            localStorage.setItem('token', response.data.token)
                        })
                    }
    
                    // 로그인 한 상태
                    if(response.payload.login){
                        if(option === false ){
                            props.history.push("/")
                        }
                    } else {
                    // 로그인하지 않은 상태
                        if(option) {
                            props.history.push("/")
                        }
                    }
                }); 
            } else {
                if(option) {
                    props.history.push("/")
                }
            }
        }, [])

        return (
            <SpectificComponent />
        )
    }

    return AuthenticationCheck
}