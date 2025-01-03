import React, { useState } from "react"

function Post({ post }) {
  return (
    <li className="post-item">
      <h3>{post.title}</h3>
      <p>{post.author} | {post.date}</p>
    </li>
  );
}

export default Post;