import React from "react";
import GoogleLogin from "react-google-login";
import { Button } from "@material-ui/core";

const clientId = "OAuth Web Client ID";

export default function GoogleButton({ onSocial }) {
  const onSuccess = async (response) => {
    console.log(response);

    const {
      googleId,
      profileObj: { email, name },
    } = response;

    await onSocial({
      socialId: googleId,
      socialType: "google",
      email,
      nickname: name,
    });
  };

  const onFailure = (error) => {
    console.log(error);
  };

  const googleBtnStyle = {
    margin: "20px 0 20px 0",
  };

  // clientId에 개발자의 google client ID를 발급받아서 입력하면 됩니다.
  return (
    <div>
      <GoogleLogin
        clientId="502724775539-7t5k5f59qia4q7nthdnvtj288va8vepi.apps.googleusercontent.com"
        render={(renderProps) => (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            style={googleBtnStyle}
            fullWidth
          >
            Sign in with Google
          </Button>
        )}
        buttonText="Login"
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}
