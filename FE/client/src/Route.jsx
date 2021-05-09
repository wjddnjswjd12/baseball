import React, { useContext } from "react";
import RouterContext from "RouterContext";

const Route = ({ path, component: Component }) => {
  const { location } = useContext(RouterContext);
  return path.match(location) ? <Component /> : null;
};

export default Route;
