import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import { connect, useDispatch } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { ConvertTierToKR } from "../../utils/ConvertTierToKR";
import { ConvertRankToNumber } from "../../utils/ConvertRankToNumber";
import { ConvertTotalWinRate } from "../../utils/ConvertTotalWinRate";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Scroll from "./Scroll";
import ChatBtn from "../buttons/ChatBtn";

import Moment from "react-moment";
import 'moment/locale/ko';

import '../../css/DuoList.css';
import { API_DOMAIN } from "../../utils/Env";
import Chatting from "../buttons/chat/Chatting";
import MoreDataBtn from "../buttons/MoreDataBtn";
import { nameModalOn, updateToggleOff } from "../../_actions/userAction";
import { ConvertLatestWinRate } from "../../utils/ConvertLatestWinRate";
import DeleteButton from "../buttons/DeleteButton";
import { ChatModal } from "../buttons/chat/ChatModal";

function DuoList(props) {
    const dispatch = useDispatch();
    const [duoList, setDuoList] = useState([]);
    const [version, setVersion] = useState("");
    const [totalCount, setTotalCount] = useState(0);

    const storedMemberId = localStorage.getItem("memberId");

    const getList = () => {
        axios.defaults.baseURL = API_DOMAIN;
        axios.get("/duo", {
            params : {
                position: props.position,
                tier: props.tier,
                section: props.section
            }
        })
        .then((result) => {
            setTotalCount(result.data.totalCount);
            setVersion(result.data.version);
            setDuoList(result.data.data);
        }) 
    }

    useEffect(() => {
        getList()

        const interval=setInterval(()=>{
            getList()
        }, 5000)
        
        return () => clearInterval(interval)
    },[props.position, props.tier, props.section, props.update]);

    useEffect(() => {
        if( props.isAuth && localStorage.getItem("summonerName") === "") {
            dispatch(nameModalOn());
        }
    })


    const MomentDateChange = (value) => {
        const nowTime = Date.now(),
              startTime = new Date(value);
        return <Moment fromNow>{startTime}</Moment>;
    };

    const rows = [];

    duoList.forEach(row => {
        rows.push({
            duoId: row.duoId,
            memberId: row.memberId,
            most: row.most3,
            iconId: 'http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/' + row.iconId + '.png',
            summonerName: row.summonerName,
            opggLink: 'https://www.op.gg/summoner/userName=' + row.summonerName,
            position: '/images/position/' + row.position + '.png',
            tierImg : '/images/tier/' + row.tier + '.png',
            tier: ConvertTierToKR(row.tier),
            rank: ConvertRankToNumber(row.rank),
            totalWinRate: ConvertTotalWinRate(row.wins, row.losses),
            latestWinRate: ConvertLatestWinRate(row.latestWinRate),
            desc: row.desc,
            postDate: MomentDateChange(row.postDate)
        });
    });
    return (
        <>
            <TableContainer component={Paper} align="center">
                <Table
                    className="duoTable"
                    aria-label="customized table"
                    style={{ width: "1400px", marginBottom: "40px" }}
                >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">소환사 이름</StyledTableCell>
                            <StyledTableCell align="left">포지션</StyledTableCell>
                            <StyledTableCell align="center">티어</StyledTableCell>
                            <StyledTableCell align="center">전체 승률</StyledTableCell>
                            <StyledTableCell align="center">최근 승률</StyledTableCell>
                            <StyledTableCell align="center">최근 선호 챔피언</StyledTableCell>
                            <StyledTableCell align="center" width="218.52px">한줄소개</StyledTableCell>
                            <StyledTableCell align="center">등록날짜</StyledTableCell>
                            <StyledTableCell align="center" width="130px"></StyledTableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map( row => (
                        <StyledTableRow key={row.duoId}>
                            <StyledTableCell align="left">
                                <img src= {row.iconId} style={{ width: '50px', borderRadius: '70%', border: '1px solid silver' }}/> &nbsp;
                                <a href= {row.opggLink} target="_blank" className="summonerName">{row.summonerName}</a>
                            </StyledTableCell>
                            <StyledTableCell align="left"><img src= {row.position} width="30px" /> </StyledTableCell>
                            <StyledTableCell align="left"><img src= {row.tierImg} width="40px"/> {row.tier} {row.rank}</StyledTableCell>
                            <StyledTableCell align="center"> {row.totalWinRate} </StyledTableCell>
                            <StyledTableCell align="center"> {row.latestWinRate} </StyledTableCell>
                            <StyledTableCell align="center"> 
                            {
                                row.most.map((info, i) => {
                                    const imgUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${info.name}.png`;
                                    return <img key={`${row.duoId}_${i}`} src={imgUrl} width="40px"/>;
                                })
                            } 
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.desc}</StyledTableCell>
                            <StyledTableCell align="center">{row.postDate}</StyledTableCell>
                            <StyledTableCell align="center"> 
                                {  
                                    row.memberId == storedMemberId ? 
                                        <DeleteButton memberId={row.memberId} duoId={row.duoId}/> 
                                        : 
                                        <Chatting
                                            summonerName = {row.summonerName}
                                            memberId = {row.memberId}
                                            duoId = {row.duoId}
                                        />
                                }
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    {
                        props.chatModalIsOn ? 
                            <ChatModal 
                                chatUserName = {props.chatUserName}
                                chatUserId = {props.chatUserId}
                                chatRoomId = {props.chatRoomId}
                            /> 
                            : 
                            null 
                    }
                    </TableBody>
                </Table> 
            </TableContainer>
            <Scroll/>
            <ChatBtn memberId = {storedMemberId}/>
            { duoList.length >= 20 && totalCount > duoList.length ? <MoreDataBtn></MoreDataBtn> : null }
        </>
    );
}

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:hover": {
        backgroundColor: theme.palette.action.hover
      }
    }
  }))(TableRow);

const TableContainer = styled.div`
    min-height: 57vh;
    width: 1400px;
    margin: 0 auto;
    @media screen and (max-width: 800px){
        width: 100%,
        overflow-x: auto;
    }
`;

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.authorized,
        position: state.position.value,
        tier: state.tier.value,
        section: state.duoData.section,
        update: state.update.updated,
        chatModalIsOn : state.chatModal.isOn,
        chatUserName : state.chatUser.chatUserName,
        chatUserId : state.chatUser.chatUserId,
        chatRoomId : state.chatUser.chatRoomId
    }
}

export default connect(mapStateToProps)(DuoList);
