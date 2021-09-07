import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import { initDuoData, setPosition, setTier } from '../../_actions/userAction';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initDuoData());
        dispatch(setTier("ALL"));
        dispatch(setPosition("ALL"));
    }, [])

    return (
        <Redirect to="/duo" />
    )
}

export default Home
