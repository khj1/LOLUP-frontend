import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { API_DOMAIN } from "../../utils/Env";
import { Button } from "react-bootstrap";
import { Grid, Paper } from "@material-ui/core";
import 'antd/dist/antd.css';
import { Input, Alert } from "antd";
import "../../css/NameForm.css";
import { nameModalOff } from "../../_actions/userAction";

const NameForm = (props) => {
    const dispatch = useDispatch();
    const memberId = localStorage.getItem("memberId");
    const storedName = localStorage.getItem("summonerName");
    const accessToken = localStorage.getItem("token");
    const [summonerName, setSummonerName] = useState(storedName);

    const inputOnChangeHandler = (event) => {
        setSummonerName(event.currentTarget.value);
    }
    
    const updateName = () => {
        axios.defaults.baseURL = API_DOMAIN;
        axios.defaults.headers = { 
            'Authorization' : `Bearer ${accessToken}`
        };
        axios.get(`/riot/find/${summonerName}`)
        .then(response => {
            
            axios.patch(`/member/${memberId}`, null, {
                params : {
                    summonerName: response.data.summonerName,
                    memberId: memberId
                }
            })
            .then(response => {
                console.log(response.data);
                localStorage.setItem("summonerName", response.data.updatedSummonerName);
            })
            dispatch(nameModalOff());
            
        })
        .catch(error => {
            if(error.response.status === 404){
                alert("존재하지 않는 소환사 이름입니다.");
            }
        });
    }

    const enterkey = (event) => {
        if (event.keyCode == 13) {
             updateName();
        }
    }
    
    return (
      <Grid className="grid">
        <Paper elevation={10} style={paperStyle} onClick={e => e.stopPropagation() }>
          <Grid align="center">
            
            {storedName === "" ? <div style={descStyle}>사용중인 소환사명을 입력해주세요.</div> : null }

            <div style = {divStyle}>
                <Input type="text" className="nameInput" 
                    value={summonerName}
                    onKeyUp={enterkey}
                    onChange={inputOnChangeHandler}
                />

                {storedName === "" ? 
                    <Button className="name_btn" onClick={updateName}>등록하기</Button> 
                    : <Button className="name_btn" onClick={updateName}>변경하기</Button>}  
            </div>

          </Grid>
        </Paper>
      </Grid>
    );
}

const descStyle = {
    fontWeight : "bold",
    fontSize: "20px",
}

const divStyle = {
    display : "flex",
    alignItems : "center",
    justifyContent : "center"
}

const paperStyle = {
    width: 600,
    padding: 20,
    height: "fit-content",
    margin: "auto",
};



export default NameForm;