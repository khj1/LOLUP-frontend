import React, { Component } from 'react';

export class DuoList extends Component {
    state = {
        blists : [],
        pageduoId :1
    }
    componentDidMount(){
        fetch('http://lolup-api.p-e.kr/duo?position=ALL&tier=ALL')
            .then(function(result){
            return result.json();
            })
            .then(function(json){
            console.log(json);
            this.setState({blists:json});
            }.bind(this));
        }
        
        render(){ 
        let listTr = [];
        for(var i=0 ; i<this.state.blists.length ; i++){
            var row = this.state.blists[i];
            listTr.push(
            <tr align="center" key={row.duoId}>
                <td hidden>{row.duoId}</td>
                <td align="center">{row.summonerName}</td>
                <td align="center">{row.position}</td>
                <td align="center">{row.tier}</td>
                <td align="center">{row.latestWinRate}</td> 
                <td align="center">{row.desc}</td>
                <td align="center">{row.desc}</td>
                <td align="center">{row.postDate}</td>

                <td align="left"><a href={row.duoId} data-id={row.duoId} onClick={(e)=>{
                    e.preventDefault();
                    this.props.myBoardView(e.target.dataset.id, 'view');
                    }
                }>{row.summonerName}</a></td>
            </tr>
            );
        }
        return (
            <div className="col-lg-10" id="lay_contents">
            <table className="table table-bordered">
            <thead>
                <tr align="center">
                    <th hidden width="*">번호</th> {/* 히든처리 */}
                    <th width="15%">소환사 이름</th>
                    <th width="10%">포지션</th>
                    <th width="15%">티어</th>
                    <th width="10%">승률</th>
                    <th width="15%">선호챔피언</th>
                    <th width="30%">한줄소개</th>
                    <th width="15%">등록</th>
                    <th width="15%">신청버튼</th>
                </tr>
            </thead>
            <tbody>
                {listTr}
            </tbody>
            </table>
            </div>
        );
    }
}

export default DuoList;
