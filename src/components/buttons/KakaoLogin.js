import React from 'react';
import { withRouter } from 'react-router';
import '../../css/Button.css'

const KakaoLogin = () => {
	const kakaoUrl = "http://lolup-api.p-e.kr/oauth2/authorization/kakao?redirect_url=http://d2fh37v4sikqk8.cloudfront.net/login/oauth2/code/kakao";
	
	return (
			<a class="kakaoBtnLink" href={kakaoUrl}>
				<div className="kakaoBtn">
					<img src="/images/buttons/kakaologo.png" className="kakaoLogo"/>
					카카오로 로그인
				</div>
			</a>
	)
}

export default withRouter(KakaoLogin);