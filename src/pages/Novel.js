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
    <div>
      <div className="header-bt">
        <h2 className="header-txt">소설</h2>
      </div>
      <div>{list}</div>
    </div>
  );
};

export default Novel;
