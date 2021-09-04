import axios from "axios"
import { API_DOMAIN } from "../utils/Env";

export function authorized() {
    const accessToken = localStorage.getItem('token');
    const authCheck = () => {
        axios.defaults.baseURL = API_DOMAIN;
        axios.defaults.headers = { 
            'Authorization' : `Bearer ${accessToken}` 
        };
        return axios.get('/auth/check');
    }

    console.log("accessToken called from localStorage", accessToken);

    if(accessToken != null){
        console.log("토큰 있음, 인증 체크 시작")
        
        const request = authCheck().then( response => { 
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

export function unauthorized() {
    return {
        type: "UNAUTHORIZED"
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

export function addModalOn() {
    return {
        type: "ADD_MODAL_ON"
    }
}

export function addModalOff() {
    return {
        type: "ADD_MODAL_OFF"
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

export function update() {
    return {
        type: "UPDATE"
    }
}