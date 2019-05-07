import React from "react";
import classes from "./Layout.module.css";
import Backdrop from "../UI/Backdrop/Backdrop";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import { CombinedContextConsumer } from "../../contexts/backdropOrderCombinedContext";

const layout = (props) => (
  <>
    <CombinedContextConsumer>
      {({backdropCtx, orderCtx}) => (
        <Backdrop
          show={backdropCtx.isShown}
          clickHandler={() => {backdropCtx.hide(); orderCtx.hide();}}
        />)}
    </CombinedContextConsumer>
    <Toolbar />
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </>
);

export default layout;
