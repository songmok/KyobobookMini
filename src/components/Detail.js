import React from "react";

const Detail = (props) => {
  const list = props.detail.map((item, index) => {
    return (
      <div className="detail-box">
        <h2>{item.biTitle}</h2>
        <div className="dt-img">{item.biImgSeq}</div>
        <h2 className="dt-price">{item.biPrice}</h2>
      </div>
    );
  });
  return (
    <div className="detail">
      <div>{list}</div>
    </div>
  );
};

export default Detail;
