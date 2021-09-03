import React from "react";
import FadeIn from "react-fade-in";
import { useDispatch } from "react-redux";
import "../../css/AddFormWrapper.css";
import { addModalOff } from "../../_actions/userAction";
import AddFrom from "./AddForm";

function AddFromWrapper(){
    const dispatch = useDispatch();
    const closeAddModal = () => {
        dispatch(addModalOff());
    }

    return (
        <div className="addContainer">
            <FadeIn delay="20" transitionDuration="400">
                <AddFrom/>
            </FadeIn>
        </div>
    );
};

export default AddFromWrapper;