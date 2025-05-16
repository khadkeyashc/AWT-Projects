// src/components/PostList.js
import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const PostList = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts yet. Start by adding one!</p>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostList;
