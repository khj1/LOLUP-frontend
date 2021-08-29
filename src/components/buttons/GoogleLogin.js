import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import googleLogin from '../../css/img/googleLogin.png'

const GoogleLogin = () => {
	return (
		<div>
			<a id="google-login-btn" href="http://localhost:8080/oauth2/authorization/google?redirect_url=http://localhost:3000/login/oauth2/code/google">
				<img alt={"google_login"} src={googleLogin} width="224px" />
			</a>
		</div>
	)
}

export default withRouter(GoogleLogin);