import React from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.module.css";

const NavItems = (props) => (
  <ul className={classes.NavItems}>
    <NavItem link="/" active>Burger Builder</NavItem>
    <NavItem link="/">Checkout</NavItem>
  </ul>
);

export default NavItems;
