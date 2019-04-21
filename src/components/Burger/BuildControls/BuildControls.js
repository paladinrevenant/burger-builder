import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import BackdropContext from "../../../contexts/backdropContext";
import OrderContext from "../../../contexts/orderContext";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map( ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
    <BackdropContext.Consumer>
    {
      (backdropContext) => (
        <OrderContext.Consumer>
        {(orderContext) => (
          <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={() => {orderContext.show(); backdropContext.show(); }}>ORDER NOW</button>
        )}
        </OrderContext.Consumer>
      )
    }
    </BackdropContext.Consumer>
  </div>
);

export default buildControls;
