import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Scroll from "./Scroll";

export class DuoList extends Component {
  state = {
    blists: [],
    pageduoId: 1
  };

  componentDidMount() {
    fetch("http://lolup-api.p-e.kr/duo?position=ALL&tier=ALL")
      .then(function (result) {
        return result.json();
      })
      .then(
        function (json) {
          console.log(json);
          this.setState({ blists: json });
        }.bind(this)
      );
  }

  

  render() {
    const timeForToday = (value) => {
      const today = new Date();
      const timeValue = new Date(value);

      const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
      if (betweenTime < 1) return '방금전';
      if (betweenTime < 60) {
          return `${betweenTime}분전`;
      }
  
      const betweenTimeHour = Math.floor(betweenTime / 60);
      if (betweenTimeHour < 24) {
          return `${betweenTimeHour}시간전`;
      }
  
      const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
      if (betweenTimeDay < 365) {
          return `${betweenTimeDay}일전`;
      }
  
      return `${Math.floor(betweenTimeDay / 365)}년전`;
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
        "&:nth-of-type(odd)": {
          backgroundColor: theme.palette.action.hover
        }
      }
    }))(TableRow);

    //
    const rows = [];
    for (let i = 0; i < this.state.blists.length; i++) {
      let row = this.state.blists[i];

      rows.push({
        most: row.most3,
        summonerName: row.summonerName,
        position: row.position,
        tier: row.tier,
        latestWinRate: row.latestWinRate,
        desc: row.desc,
        postDate: timeForToday(row.postDate)
      });
    }
    return (
      <>
        <TableContainer component={Paper} align="center">
          <Table
            className="duoTable"
            aria-label="customized table"
            style={{ width: "70%" }}
          >
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">소환사 이름</StyledTableCell>
                <StyledTableCell align="center">포지션</StyledTableCell>
                <StyledTableCell align="center">티어</StyledTableCell>
                <StyledTableCell align="center">승률</StyledTableCell>
                <StyledTableCell align="center">선호챔피언</StyledTableCell>
                <StyledTableCell align="center">한줄소개</StyledTableCell>
                <StyledTableCell align="center">등록날짜</StyledTableCell>
                <Scroll/>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.key}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.summonerName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.position}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.tier}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.latestWinRate}
                  </StyledTableCell>
                    
                  <StyledTableCell align="center">
                    {row.most.map((info) => {
                      const imgUrl = "http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/"+ info.name + ".png";
                      return <img src={imgUrl} width="50px"/>;
                    })}
                  </StyledTableCell>
                 
                  <StyledTableCell align="center">{row.desc}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.postDate}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default DuoList;
