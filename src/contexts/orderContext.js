import React from "react";

const orderContext = React.createContext({
  isShown: false,
  show: () => {},
  hide: () => {}
});

export default orderContext;
