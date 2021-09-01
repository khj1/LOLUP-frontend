import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import googleLogin from '../../css/img/googleLogin.png'

const GoogleLogin = () => {
	// const googleUrl = "http://lolup-api.p-e.kr/oauth2/authorization/google?redirect_url=http://d2fh37v4sikqk8.cloudfront.net/login/oauth2/code/google"
	const googleUrl = "http://localhost:8080/oauth2/authorization/google?redirect_url=http://d2fh37v4sikqk8.cloudfront.net/login/oauth2/code/google"

	return (
			<a className="googleBtnLink" href={googleUrl}>
				<div className="googleBtn">
					<img src="/images/buttons/googlelogo.png" className="googleLogo"/>
					구글로 로그인
				</div>
			</a>
	)
}

export default withRouter(GoogleLogin);