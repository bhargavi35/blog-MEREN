import React, { useEffect, useState } from "react";
import "./Home.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Posts from "../Posts";
import Header from "../../Components/header/Header";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [post, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://cute-ruby-hose.cyclic.app/posts" + search);
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={post} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
