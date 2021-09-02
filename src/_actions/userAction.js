import axios from "axios"
import { API_DOMAIN } from "../utils/Env";

export function authorized() {
    const accessToken = localStorage.getItem('token');

    console.log("accessToken called from localStorage", accessToken);

    if(accessToken != null){
        axios.defaults.baseURL = API_DOMAIN;
        axios.defaults.headers = { 
            'Authorization' : `Bearer ${accessToken}` 
        };
        
        const request = axios.get('/auth/check')
            .then( response => { 
                const memberId = response.data.memberId;
                let summonerName = response.data.summonerName;
                if(summonerName === null) {
                    summonerName = "";
                }
                localStorage.setItem("memberId", memberId);
                localStorage.setItem("summonerName", summonerName);
                return response.data;
            })
            .catch(error => {
                return error.response.status;
            });
    
        return {
            type: "AUTHORIZED",
            payload: request
        }

    } else {
        return {
            type: "UNAUTHORIZED"
        }
    }
}

export function setPosition(position) {
    return {
        type: position
    }
}

export function setTier(tier) {
    return {
        type: tier
    }
}

export function loginModalOn() {
    return {
        type: "LOGIN_MODAL_ON"
    }
}

export function loginModalOff() {
    return {
        type: "LOGIN_MODAL_OFF"
    }
}

export function nameModalOn() {
    return {
        type: "NAME_MODAL_ON"
    }
}

export function nameModalOff() {
    return {
        type: "NAME_MODAL_OFF"
    }
}

export function getMoreDuoData() {
    return {
        type: "GET"
    }
}

export function initDuoData() {
    return {
        type: "INIT"
    }
}