import React from "react";
import Sidebar from "../Components/sidebar/Sidebar";
import SinglePost from "../Components/singlepost/singlePost";
import "../Components/singlepost/singlePost.css";

const Single = () => {
  return (
    <div className="single">
      <SinglePost/>
      <Sidebar />
    </div>
  );
};

export default Single;
