// src/components/Post.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { likePost, addComment } from "../redux/postSlice";
import { FaHeart, FaComment } from "react-icons/fa";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");

  const handleLike = () => {
    dispatch(likePost(post.id));
  };

  const handleComment = () => {
    if (commentText.trim()) {
      dispatch(addComment({ postId: post.id, text: commentText }));
      setCommentText("");
    }
  };

  return (
    <div className="post">
      <p>{post.text}</p>
      <div className="actions">
        <button onClick={handleLike}>
          <FaHeart /> {post.likes}
        </button>
        <div className="comment-section">
          <input
            type="text"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button onClick={handleComment}>
            <FaComment /> Comment
          </button>
        </div>
      </div>
      <ul>
        {post.comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
