import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import NameFormWrapper from './NameFormWrapper';

function NameModal(props) {
    return (
        <>
            { props.nameModalIsOn ? <NameFormWrapper /> : null }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        nameModalIsOn: state.nameModal.isOn,
        isAuth: state.auth.authorized
    }
}

export default connect(mapStateToProps)(NameModal);
