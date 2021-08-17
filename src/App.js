import React, { Fragment } from 'react'
import {HashRouter, Route} from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Duo from './routes/Duo'; 
import FreeRank from './routes/FreeRank';
import Login01 from './components/Login01';
import "./App.css";

function App() {
return (
  <HashRouter>
    <>
    <Header />
    
    <Route path="/duo" exact={true} component={Duo} />
    <Route path="/freeRank" exact={true} component={FreeRank} />
    {/*<div className="content">반가워요! 저는 내용이 출력될 메인 페이지예요.</div>*/}
    </>
    <Route path="/login" exact={true} component={Login01} />
    <Footer />
    {/*<button onClick={() => window.open('/login', '_self')}>[로그인]</button>*/}
  </HashRouter>
  );
}


export default App;
