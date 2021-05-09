import { useContext } from "react";
import RouterContext from "RouterContext";

const Switch = ({ children }) => {
  const { location } = useContext(RouterContext);
  const childrenType = toString.call(children);
  //toString.call() 객체 타입까지 구체적으로 String으로표현해줌
  const routes = childrenType === "[object Array]" ? children : [children];

  const targetElement = routes.find((route) => route.props.path === location);

  return targetElement;
};

export default Switch;
