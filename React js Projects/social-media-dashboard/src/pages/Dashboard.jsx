// src/pages/Dashboard.js
import React from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Social Media Dashboard</h2>
      <PostForm />
      <PostList />
    </div>
  );
};

export default Dashboard;
