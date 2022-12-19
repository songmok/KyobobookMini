import React from "react";

const BookDetail = (props) => {
  const list = props.bookDetail.map((item, index) => {
    return (
      <div className="BD-box">
        <h2>{item.biTitle}</h2>
        <div>{item.biImgSeq}</div>

      </div>
    );
  });
  return (
    <div className="bookdetail">
      <div>{list}</div>
    </div>
  );
};

export default BookDetail;
