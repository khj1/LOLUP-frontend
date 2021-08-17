import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="nav">
      <Link to="/duo">
        <h1 className="nav__logo">
          LOL<span>UP</span>
        </h1>
      </Link>

      <div className="top-search-area">
        <form>
          <label>
            <input
              type="text"
              name="name"
              placeholder="소환사를 검색해보세요."
            />
          </label>
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
          <button id="showRight">메뉴</button>
        </section>
      </div>
    </div>
  );
}

export default Header;
