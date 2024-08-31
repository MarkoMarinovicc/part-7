import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const HeaderAndFooter = ({ notification }) => {
  return (
    <div>
      <Navigation />
      <span> {notification}</span>

      <Outlet />
      <Footer />
    </div>
  );
};

export default HeaderAndFooter;
