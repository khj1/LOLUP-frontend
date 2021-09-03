import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import AddFromWrapper from './AddFromWrapper';

function AddModal(props) {
    return (
        <>
            { props.addModalIsOn ? <AddFromWrapper /> : null }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        addModalIsOn: state.addModal.isOn,
        isAuth: state.auth.authorized
    }
}

export default connect(mapStateToProps)(AddModal);
