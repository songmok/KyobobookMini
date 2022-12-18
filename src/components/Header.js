import React from "react";

const Header = () => {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/img/logo.png`}
        className="logo"
        alt="교보문고"
      />
      <div className="search-box row">
        <div className="search-bar">검색바</div>
      </div>
    </div>
  );
};

export default Header;
