import React from "react";
import "../assets/styles.css";
import { posts } from "../Post/postDB";
import { format } from "date-fns";
import group28 from "../assets/img/Group 28.png";

function ListPost({ title, content, image, date }) {
  return (
    <div className="overlap-group">
      <div className="text">{format(new Date(date), "yyyy-MM-dd")}</div>
      <p className="div">{content}</p>
      <div className="ellipse" /> 
      <div className="group-wrapper">
        <img src={image} alt={title} className="post-image" /> {/* 이미지 표시 */}
      </div>
    </div>
  );
}

export default ListPost;
