import React from "react";
import classes from "./Layout.module.css";
import Backdrop from "../UI/Backdrop/Backdrop";
import BackdropContext from "../../contexts/backdropContext";
import OrderContext from "../../contexts/orderContext";

const layout = (props) => (
  <>
    <BackdropContext.Consumer>
      {(backdrop) => (
        <OrderContext.Consumer>
        {(order) => (
          <Backdrop show={backdrop.isShown} clickHandler={() => {backdrop.hide(); order.hide();}}/>
        )}
        </OrderContext.Consumer>
      )}
    </BackdropContext.Consumer>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </>
);

export default layout;
