import React from "react";


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

const Home = (props) => {
  const list = props.home.map((item, index) => {
    return (
      <div>
        <div className="list-img">
          <img src={item.biImgSeq} alt={item.biTitle} />
          <img src={item.biImgSeq} alt={item.biTitle} />
          <img src={item.biImgSeq} alt={item.biTitle} />
          
        </div>
       
      </div>
    );
  });
  return (
    <div className="home-box">
      <div>{list}</div>
    </div>
  );
};

export default Home;
