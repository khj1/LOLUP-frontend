import React from 'react'
import { connect } from 'react-redux';
import LoginFormWrapper from './LoginFormWrapper';

function LoginModal(props) {
    return (
        <>
            { props.loginModalisOn ? <LoginFormWrapper /> : null }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        loginModalisOn: state.loginModal.isOn,
        isAuth: state.auth.authorized
    }
}

export default connect(mapStateToProps)(LoginModal);
