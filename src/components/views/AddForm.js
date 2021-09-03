import React, { useState } from 'react';
import { Form, Input, Radio } from 'antd';
import { Grid, Paper } from "@material-ui/core";
import "../../css/AddForm.css";
import { useDispatch } from 'react-redux';
import { addModalOff, update} from '../../_actions/userAction';
import axios from 'axios';
import { API_DOMAIN } from '../../utils/Env';
import { Spinner, Button } from 'react-bootstrap';

const AddFrom = () => {
    const dispatch = useDispatch();
    const summonerName = localStorage.getItem("summonerName");
    const accessToken = localStorage.getItem("token");
    const memberId = localStorage.getItem("memberId");
    const [isLoading, setIsLoading] = useState(false);
    const [Position, setPosition] = useState("ALL");
    const [Desc, setDesc] = useState("게임 같이하실 분 구합니다!");

    const closeModal = () => {
        dispatch(addModalOff());
    }

    const selectPosition = (event) => {
        setPosition(event.currentTarget.value);
    }
    const enterDesc = (event) => {
        setDesc(event.currentTarget.value);
    }

    const sendForm = () => {
        setIsLoading(true);

        axios.defaults.baseURL = API_DOMAIN;
        axios.defaults.headers = { 
            'Authorization' : `Bearer ${accessToken}`
        };
        axios.post("/duo/new", null, {
            params: {
                summonerName: summonerName,
                desc: Desc,
                position: Position,
                memberId: memberId
            }
        })
        .then(() => {
            dispatch(update());
            dispatch(addModalOff());
        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false);
            alert('존재하지 않는 소환사명 입니다.');
        })
    }

    return (
        <Grid className="grid">
            <Paper elevation={10} style={paperStyle} onClick={e => e.stopPropagation() }>
                <Grid align="center">
                    <Form layout="vertical">
                        <Form.Item label="소환사명">
                            <Input value={summonerName} className="summonerNameInput"disabled/>
                        </Form.Item>
                        <Form.Item label="주 포지션" name="position">
                            <Radio.Group name="position" value="horizontal" className="posBtnWrapper">
                                <Radio.Button value="ALL" className="posBtnBorder" onClick={selectPosition}>
                                    <img src="/images/position/ALL.png" width="40px"/>
                                </Radio.Button>
                                <Radio.Button value="TOP" className="posBtnBorder" onClick={selectPosition}>
                                    <img src="/images/position/TOP.png" width="40px"/>
                                </Radio.Button>
                                <Radio.Button value="JUG" className="posBtnBorder" onClick={selectPosition}>
                                    <img src="/images/position/JUG.png" width="40px"/>
                                </Radio.Button>
                                <Radio.Button value="MID" className="posBtnBorder" onClick={selectPosition}>
                                    <img src="/images/position/MID.png" width="40px"/>
                                </Radio.Button>
                                <Radio.Button value="BOT" className="posBtnBorder" onClick={selectPosition}>
                                    <img src="/images/position/BOT.png" width="40px"/>
                                </Radio.Button>
                                <Radio.Button value="SUP" className="posBtnBorder" onClick={selectPosition}>
                                    <img src="/images/position/SUP.png" width="40px"/>
                                </Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="한마디">
                            <Input.TextArea name="desc" className="addDesc" onChange={enterDesc}/>
                        </Form.Item>
                        <Form.Item layout="horizontal">
                            <Button 
                                variant="primary" 
                                className="add_btn"
                                disabled={isLoading}
                                onClick={sendForm}
                            >
                                { 
                                    isLoading ?
                                        <Spinner
                                            as="span" animation="border"
                                            size="sm" role="status"
                                            aria-hidden="true" className="addSpinner"
                                        /> 
                                        : 
                                        '등록하기'
                                }
                            </Button>
                            <Button variant="danger" className="add_btn" onClick={closeModal}>취소하기</Button>
                        </Form.Item>
                    </Form>
                </Grid>
            </Paper>
        </Grid>
    );
};

const paperStyle = {
    width: 600,
    padding: 20,
    height: "fit-content",
    margin: "auto",
};

export default AddFrom;