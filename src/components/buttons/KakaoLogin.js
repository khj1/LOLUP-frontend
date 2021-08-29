import React from 'react';
import kakaoLogin from '../../css/img/kakaoLogin.png'
import { withRouter } from 'react-router';

const KakaoLogin = () => {
	return (
		<div>
			<a id="kakao-login-btn" href="http://localhost:8080/oauth2/authorization/kakao?redirect_url=http://localhost:3000/login/oauth2/code/kakao">
				<img alt={"kakao_login"} src={kakaoLogin} width="222px" height="49px"/>
			</a>
		</div>
	)
}

export default withRouter(KakaoLogin);