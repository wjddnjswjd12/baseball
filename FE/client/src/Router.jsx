import React, { useState } from "react";
import RouterContext from "RouterContext";

const Router = ({ children }) => {
  const [location, setLocation] = useState(window.location.pathname);
  return (
    <RouterContext.Provider value={{ location }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
