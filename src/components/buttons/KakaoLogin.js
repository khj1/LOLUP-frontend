import React from 'react';
import { withRouter } from 'react-router';
import '../../css/Button.css'
import { OAUTH_CALL } from '../../utils/Env';

const KakaoLogin = () => {
	const kakaoUrl = `${OAUTH_CALL}/kakao`;
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