import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("https://cute-ruby-hose.cyclic.app/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>{" "}
        <img
          src="https://images.pexels.com/photos/261651/pexels-photo-261651.jpeg?auto=compress&cs=tinysrgb&w=600"
          //   src="https://images.pexels.com/photos/6230973/pexels-photo-6230973.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <p>
          Hey there, I'm Bhargvai Chella - a proactive and performance-oriented
          programmer with granular knowledge of the MERN stack.😇
          <br />
          ✍️When I'm not working on web development, you can usually find me
          with a pencil and paper, creating intricate pencil art. I find it's a
          great way to unwind and express my creativity.❤️
          <br />
          <br /> I'm also an avid music listener and love discovering new
          artists and genres. As a lifelong learner, I'm always seeking new
          knowledge and skills to add to my toolkit. Whether it's a new
          programming language or a new hobby, I'm always up for a challenge.
          <i>
            {" "}
            Thanks for stopping by my website❤️ - I hope you enjoy the content!
          </i>{" "}
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarListItem">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem" key={c.id}>
                {c.name}
              </li>
            </Link>
          ))}
          {/* <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li> */}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
