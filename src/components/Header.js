import React from "react";
import { MdSearch, MdMenu } from 'react-icons/md';
import { Link } from "react-router-dom";
import "./Header.css"; 
import '@trendmicro/react-sidenav/dist/react-sidenav.css'; 


function Header() {
  return (
    <div className="nav">
      <Link to="/">
        <h1 className="nav__logo">
          LOL<span>UP</span>
        </h1>
      </Link>

      <div className="top-search-area">
        <form>
          <label>
            <input
              type="text"
              name="search"
              placeholder="소환사를 검색해보세요."
            />
          </label>
          <MdSearch fontSize="large" /> {/* 클릭 시 현재는 동작 X */}
          <input type="submit" value="검색" />
        </form>
      </div>

      <ul className="menu-list">
        <li>
          <Link to="/duo">듀오</Link>
          <Link to="/freeRank">자유랭크</Link>
          <Link to="/login">로그인</Link>
        </li>
      </ul>

      <div class="sideMenu">
        <section>
          <button id="showRight" onClick="">메뉴</button>
          <MdMenu fontSize="large" />
        </section>
      </div>

    </div>
  );
}

export default Header;
