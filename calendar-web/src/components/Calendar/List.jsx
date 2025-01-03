import React, { useState } from "react";
import { posts } from "../Post/postDB"; // Post.js에서 posts 배열을 import
import Post from "../Post/post";
import img from "../img";

  
function List() {
    return (
      <div className="list-container">
        <h2>게시판 목록</h2>
        <ul className="post-list">
          {posts.map((post) => (
            <Post key={post.id} post={post} /> 
          ))}
        </ul>
      </div>
    );
  }

export default List;