import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="row">
      {/* <div className="col-12">
        <Link className="btn btn-success menu" to="/novel">
          소설
        </Link>
        <Link className="btn btn-success menu" to="/cook">
          요리
        </Link>
        <Link className="btn btn-success menu" to="/health">
          건강
        </Link>
        <Link className="btn btn-success menu" to="/language">
          외국어
        </Link>
        <Link className="btn btn-success menu" to="/computerit">
          컴퓨터/IT
        </Link>
      </div> */}
      <div className="header-bt">
        <div className="header-txt">HOME</div>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
