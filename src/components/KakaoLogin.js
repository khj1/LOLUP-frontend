import React, { Component } from "react";
import KakaoBtn from "react-kakao-login";

class KakaoLogin extends Component {
  render() {
    return (
      <div>
        <KakaoBtn
          token="82aa59820c03a250e7e762d3e0c06150"
          onSuccess={console.log}
          onFail={console.error}
          onLogout={console.info}
          style={{
            width: "180px",
            padding: "10px",
            marginLeft: "30px",
            border: "0.3px solid gray",
            borderRadius: "12px",
            backgroundColor: "#FEE500",
            fontSize: "14px",
          }}
        />
      </div>
    );
  }
}

export default KakaoLogin;
