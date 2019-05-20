import React from "react";

import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  const attachedClasses = [classes.SideDrawer, props.show ? classes.Open : classes.Close];
  return (
    <>
      <Backdrop show={props.show} clickHandler={props.backdropClicked} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </>
  )
};

export default sideDrawer;
