import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Login01 from './Login01';

function LoginModal(props) {
    return (
        <>
            { props.isOn ? <Login01 /> : null }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isOn: state.loginModal.isOn,
        isAuth: state.auth.authorized
    }
}

export default connect(mapStateToProps)(LoginModal);
