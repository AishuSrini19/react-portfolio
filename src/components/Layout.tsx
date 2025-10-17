import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This renders the page content dynamically */}
    </>
  );
};

export default Layout;
