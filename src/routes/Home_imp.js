import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from '../pages/NewsPage';

/* 
React Router 적용 O >> category 값을 URL 파라미터를 통해 사용 
    category값, onSelect 함수 전달 필요 X (Home05.js 비교)
*/

const Home = () => { 
    return <Route path="/:category?" component={NewsPage} />; 
};

export default Home;
/*
path="/:category?"
    >> category값이 optional(값이 있을 수도, 없을 수도 있다. => category URL 파라미터가 없다면? 전체 category 선택으로 간주)
*/
