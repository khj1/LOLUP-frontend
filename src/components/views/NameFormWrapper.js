import React from "react";
import FadeIn from "react-fade-in";
import { useDispatch } from "react-redux";
import "../../css/NameFormWrapper.css";
import { nameModalOff } from "../../_actions/userAction";
import NameForm from "./NameForm";

function NameFormWrapper(){
    const dispatch = useDispatch();
    const closeNameModal = () => {
        dispatch(nameModalOff());
    }

    return (
        <div className="nameContainer">
            <FadeIn delay="20" transitionDuration="400">
                <NameForm/>
            </FadeIn>
        </div>
    );
};

export default NameFormWrapper;