import React from "react";

const Novel = (props) => {
  const list = props.novel.map((item, index) => {
    return (
      <div>
        <p>{item.biTitle}</p>
        <p>{item.biPrice}</p>
        <p>{item.biPublisher}</p>
        <p>{item.biPublishDt}</p>
      </div>
    );
  });
  return (
    <div className="novel-box">
      <div>{list}</div>
    </div>
  );
};

export default Novel;
