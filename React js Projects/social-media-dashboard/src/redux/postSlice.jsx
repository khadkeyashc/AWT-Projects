// src/redux/postSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift({
        id: uuidv4(),
        text: action.payload.text,
        likes: 0,
        comments: [],
      });
    },
    likePost: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) {
        post.likes += 1;
      }
    },
    addComment: (state, action) => {
      const post = state.posts.find(
        (post) => post.id === action.payload.postId
      );
      if (post) {
        post.comments.push({ id: uuidv4(), text: action.payload.text });
      }
    },
  },
});

export const { addPost, likePost, addComment } = postSlice.actions;
export default postSlice.reducer;
