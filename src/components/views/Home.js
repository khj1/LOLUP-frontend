import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import { initDuoData } from '../../_actions/userAction';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initDuoData());
    }, [])

    return (
        <Redirect to="/duo" />
    )
}

export default Home
