import React, { Fragment } from 'react'
import {HashRouter, Route} from "react-router-dom"
import Header from './Header';
import "./App.css";


function App() {
return (
  <HashRouter>
    <Header />
    <div className="content">
      반가워요! 저는 내용이 출력될 메인 페이지예요.
    </div>
  </HashRouter>
  );
}

export default App;
