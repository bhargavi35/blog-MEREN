import React from "react";
import "../Components/posts/Post.css";
import Post from "../Components/posts/Post";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div className="posts">
      {posts.map((el) => (
        <Post key={el.id} post={el} />
      ))}
    </div>
  );
};

export default Posts;
