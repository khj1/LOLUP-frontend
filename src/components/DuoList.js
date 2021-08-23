import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
        key: row.duoId,
        summonerName: row.summonerName,
        position: row.position,
        tier: row.tier,
        latestWinRate: row.latestWinRate,
        desc: row.desc,
        postDate: row.postDate
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
                  <StyledTableCell align="center">{row.desc}</StyledTableCell>
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
