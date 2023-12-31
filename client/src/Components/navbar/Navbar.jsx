import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { Context } from "../../Context/Context";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "https://cute-ruby-hose.cyclic.app/images/"

  const handleSubmit = () => {
    dispatch({ type: "LOGOUT" });
  };
  
  return (
    <div className="nav">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/edit">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleSubmit}>
            {" "}
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {/* {user ? (
          <Link className="link" to="/about">
            <img
              className="topImg"
              src={user.profilePic}
              // src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) */}
        {user ? (
          <Link to="/about">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/signup">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};
export default Navbar;
