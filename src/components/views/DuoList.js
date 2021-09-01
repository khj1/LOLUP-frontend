import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Scroll from "./Scroll";

import Moment from "react-moment";
import 'moment/locale/ko';

import '../../css/DuoList.css';

function DuoList(props) {
    const [List, setList] = useState([]);

    useEffect(() => {
        // axios.get(`http://lolup-api.p-e.kr/duo?position=${props.position}&tier=${props.tier}`)
        axios.get(`http://localhost:8080/duo?position=${props.position}&tier=${props.tier}`)
            .then(function (result) {
                return setList(result.data);
            })  
    },[props.position, props.tier])

    const MomentDateChange = (value) => {
        const nowTime = Date.now(),
              startTime = new Date(value);
      
        return <Moment fromNow>{startTime}</Moment>;
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

    const rows = [];

    List.forEach (row => {
      rows.push({
        most: row.most3,
        iconId: 'http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/' + row.iconId + '.png',
        summonerName: row.summonerName,
        opggLink: 'https://www.op.gg/summoner/userName=' + row.summonerName,
        position: '/images/position/' + row.position + '.png',
        tierImg : '/images/tier/' + row.tier + '.png',
        tier: row.tier,
        rank: row.rank,
        wins: row.win,
        loses: row.lose,
        latestWinRate: row.latestWinRate,
        desc: row.desc,
        postDate: MomentDateChange(row.postDate)
      });
    })
    return (
        <TableContainer component={Paper} align="center">
          <Table
            className="duoTable"
            aria-label="customized table"
            style={{ width: "80%" }}
          >
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">소환사 이름</StyledTableCell>
                <StyledTableCell align="left">포지션</StyledTableCell>
                <StyledTableCell align="center">티어</StyledTableCell>
                <StyledTableCell align="center">총 승률</StyledTableCell>
                <StyledTableCell align="center">최근 10 게임 승률</StyledTableCell>
                <StyledTableCell align="center">선호챔피언</StyledTableCell>
                <StyledTableCell align="center">한줄소개</StyledTableCell>
                <StyledTableCell align="center">등록날짜</StyledTableCell>
                <StyledTableCell align="center">신청하기</StyledTableCell>
                <Scroll/>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.key}>
                    <StyledTableCell align="left">
                        <img src= {row.iconId} style={{ width: '50px', borderRadius: '70%', border: '1px solid silver' }}/> &nbsp;
                        <a href= {row.opggLink} target="_blank" class="summonerName">{row.summonerName}</a>
                    </StyledTableCell>
                    <StyledTableCell align="left"><img src= {row.position} width="40px" /> </StyledTableCell>
                    <StyledTableCell align="left"><img src= {row.tierImg} width="50px"/> {row.tier} {row.rank}</StyledTableCell>
                    <StyledTableCell align="center"> {row.wins}승 {row.loses}패 ({row.wins / (row.loses + row.wins) * 100}%) </StyledTableCell>
                    <StyledTableCell align="center"> {row.latestWinRate} </StyledTableCell>
                    <StyledTableCell align="center">
                        {row.most.map((info) => {
                            const imgUrl = "http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/"+ info.name + ".png";
                            return <img src={imgUrl} width="50px"/>;
                        })}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.desc}</StyledTableCell>
                    <StyledTableCell align="center">{row.postDate}</StyledTableCell>
                    <StyledTableCell align="center">
                        <img src={'/images/buttons/chat.png'} width="35px"/>
                    </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table> 
        </TableContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        position: state.position.value,
        tier: state.tier.value
    }
}

export default connect(mapStateToProps)(DuoList);
