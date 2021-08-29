import axios from "axios"

export function authorized(props) {
    const accessToken = localStorage.getItem('token');

    console.log("accessToken called from localStorage", accessToken);

    axios.defaults.baseURL = "http://localhost:8080";
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
}
