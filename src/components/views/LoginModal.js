import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Login01 from './Login01';

function LoginModal(props) {
    return (
        <>
            { props.loginModalisOn ? <Login01 /> : null }
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
