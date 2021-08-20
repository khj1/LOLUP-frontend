import React, { Component } from 'react'

export class TestList extends Component {
    state = {
        blists : [],
        pageNum :1
    }
    componentDidMount(){
        let pageNum = this.state.pageNum;
        //페이지번호 변수로 처리
        fetch('http://localhost:8081/jsonrestapi/restapi/boardList.do?nowPage='+pageNum)
            .then(function(result){
            return result.json();
            })
            .then(function(json){
            console.log(json);
            this.setState({blists:json});
            }.bind(this));
        }
        
        render(){
        console.log("ListContents render완료");
        let listTr = [];
        for(var i=0 ; i<this.state.blists.length ; i++){
            var row = this.state.blists[i];
            listTr.push(
            <tr align="center" key={row.num}>
                <td>{row.num}</td>
                <td align="left"><a href={row.num} data-id={row.num} onClick={
                    (e)=>{
                    e.preventDefault();
                    this.props.myBoardView(e.target.dataset.id, 'view');
                    }
                }>{row.title}</a></td>
                <td align="center">{row.id}</td>
                <td align="center">{row.visitcount}</td>
                <td align="center">{row.postdate}</td>
            </tr>
            );
        }
        return (
            <div className="col-lg-10" id="lay_contents">
            <table className="table table-bordered">
            <thead>
                <tr>
                    <th width="10%">번호</th> {/* 추후 히든처리 예정 */}
                    <th width="20%">닉네임</th>
                    <th width="*">티어</th>
                    <th width="15%">승률</th>
                    <th width="15%">선호챔피언</th>
                    <th width="15%">한줄소개</th>
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

export default TestList
