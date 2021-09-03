import { TableCell, TableRow, withStyles } from '@material-ui/core';
import React from 'react'
import Chatting from '../buttons/Chatting';

function DuoRowData(props) {
    return (
        <StyledTableRow key={props.duoId}>
            <StyledTableCell align="left">
                <img src= {props.iconId} style={{ width: '50px', borderRadius: '70%', border: '1px solid silver' }}/> &nbsp;
                <a href= {props.opggLink} target="_blank" class="summonerName">{props.summonerName}</a>
            </StyledTableCell>
            <StyledTableCell align="left"><img src= {props.position} width="30px" /> </StyledTableCell>
            <StyledTableCell align="left"><img src= {props.tierImg} width="40px"/> {props.tier} {props.rank}</StyledTableCell>
            <StyledTableCell align="center"> {props.totalWinRate} </StyledTableCell>
            <StyledTableCell align="center"> {props.latestWinRate} </StyledTableCell>
            <StyledTableCell align="center">
                {props.most.map((info) => {
                    const imgUrl = `http://ddragon.leagueoflegends.com/cdn/${props.version}/img/champion/${info.name}.png`;
                    return <img src={imgUrl} width="40px"/>;
                })}
            </StyledTableCell>
            <StyledTableCell align="center">{props.desc}</StyledTableCell>
            <StyledTableCell align="center">{props.postDate}</StyledTableCell>
            <StyledTableCell align="center"> 
                <Chatting/>
            </StyledTableCell>
        </StyledTableRow>
    )
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

export default DuoRowData
