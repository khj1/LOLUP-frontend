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
                console.log(response.data)
                return response.data
            })
            .catch( error => {
                return error.response.status
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
        type: "ON"
    }
}

export function loginModalOff() {
    return {
        type: "OFF"
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