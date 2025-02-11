import React from "react";
import { NavLink } from "react-router";

function Footer() {
  return (
    <footer className="text-center">
      Copyright © 2012-2024 All Rights Reserved by
      <NavLink to={"/"}> Ankit Singh</NavLink>
    </footer>
  );
}

export default Footer;
