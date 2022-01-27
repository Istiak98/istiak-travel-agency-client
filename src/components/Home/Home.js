import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Expirence from "./Expirence/Expirence";
import Header from "./Header/Header";
import Tour from "./Tour/Tour";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Tour></Tour>
      <Expirence></Expirence>
      <Footer></Footer>
    </div>
  );
};

export default Home;
