import React from "react";
import OrderContext from "./orderContext.js";
import BackdropContext from "./backdropContext.js";

const CombinedContextProvider = (props) => (
  <BackdropContext.Provider value={props.backdropValue}>
    <OrderContext.Provider value={props.orderValue}>
      {props.children}
    </OrderContext.Provider>
  </BackdropContext.Provider>
);

const CombinedContextConsumer = (props) => (
  <BackdropContext.Consumer>
    {(backdropCtx) => (
      <OrderContext.Consumer>
        {(orderCtx) => props.children({backdropCtx, orderCtx})}
      </OrderContext.Consumer>
    )}
  </BackdropContext.Consumer>
);

export {
  CombinedContextProvider,
  CombinedContextConsumer
};
