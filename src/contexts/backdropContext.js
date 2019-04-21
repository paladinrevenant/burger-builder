import React from "react";

const backdropContext = React.createContext({
  isShown: false,
  show: () => { backdropContext.isShown = true; },
  hide: () => { backdropContext.isShown = false; }
});

export default backdropContext;
