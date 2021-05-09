import React, { useState } from "react";
import RouterContext from "RouterContext";

const Router = ({ children }) => {
  const [location, setLocation] = useState(window.location.pathname);
  //location.pathname= / 뒤에 오는 DOMSTring
  return (
    <RouterContext.Provider value={{ location }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
