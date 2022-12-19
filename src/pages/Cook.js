import React from "react";

const Cook = (props) => {
  const list = props.cook.map((item, index) => {
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
    <div className="cook-box">
      <div>{list}</div>
    </div>
  );
};

export default Cook;
