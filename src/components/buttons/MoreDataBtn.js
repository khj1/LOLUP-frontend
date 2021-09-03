import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import "../../css/MoreDataBtn.css";
import { getMoreDuoData } from '../../_actions/userAction';

function MoreDataBtn() {
    const dispatch = useDispatch();
    const moreData = () => {
        dispatch(getMoreDuoData());
    }

    return (
        <div className="moreDataWrapper">
            <Button variant="outline-dark" className="moreDataBtn" onClick={() => moreData()}>
                더보기
            </Button>
        </div>
    )
}

export default MoreDataBtn
