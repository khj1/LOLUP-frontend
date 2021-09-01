import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import googleLogin from '../../css/img/googleLogin.png'
import { OAUTH_CALL } from '../../utils/Env';

const GoogleLogin = () => {
	const googleUrl = `${OAUTH_CALL}/google`
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