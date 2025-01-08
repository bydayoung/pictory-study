import React from "react";
import "../assets/styles.css";

function ListPost({ title, content, image }) {
  return (
    <div className="overlap-group">
      <div className="text-wrapper">{title}</div>
      <p className="div">{content}</p>
      <div className="ellipse" />
      <div className="group-wrapper">
        <img src={image} alt={title} className="post-image" /> {/* 이미지 표시 */}
      </div>
    </div>
  );
}

export default ListPost;
