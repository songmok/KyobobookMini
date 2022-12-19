import React from "react";

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
