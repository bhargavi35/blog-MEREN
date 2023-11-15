import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Pages/home/Home";
import Single from "./Pages/Single";
import EditPost from "./Pages/Edit/EditPost";
import Setting from "./Pages/Settings/Setting";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import { useContext } from "react";
import { Context } from "./Context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        {/* <Route path='/posts' element={<Home />} /> */}
        <Route path="/signup" element=
          {user ? <Home /> : <Register />} />
        <Route path="/login" element=
          {user ? <Home /> : <Login />} />
        <Route path="/edit" element=
          {user ? <EditPost /> : <Login />} />
        <Route path="/about" element=
          {user ? <Setting /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />

        {/* <Route exact path="/"
          element={<Home />}
        />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/edit" element={user ? <EditPost /> : <Register />} />
        <Route path="/about" element={user ? <Setting /> : <Register />} />
        <Route path="/post/:postId" element={<Single />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
