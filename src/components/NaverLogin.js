import React, { Component } from 'react';

export class NaverLogin extends Component {
    componentDidMount(){
        //Naver sdk import
        const naverScript = document.createElement("script");
        naverScript.src =
            "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
        naverScript.type = "text/javascript";
        document.head.appendChild(naverScript);

        //Naver sdk 스크립트 로드 완료 시
        naverScript.onload = () => {
            const naverLogin = new window.naver.LoginWithNaverId({
                clientId: "NVOVSvK5hdkVuUlrV2Of",
                callbackUrl: "http://localhost:3000/#/",
                callbackHandle: true,
                isPopup: false,
                loginButton:{
                    color: "green",
                    type: 3,
                    height: 52,
                },
            });

            naverLogin.init();
            naverLogin.logout();
            naverLogin.getLoginStatus((status) => {
                if(status){
                    console.log("Naver 로그인 상태", naverLogin.user);
                    const { id, email } = naverLogin.user;
                }
                else {
                    console.log("Naver 비로그인 상태");
                }
            });
        };
    }

    render() {
        return (
            <div id="naverIdLogin"></div>
        )
    }
}

export default NaverLogin;
