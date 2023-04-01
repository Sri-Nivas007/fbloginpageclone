import React from "react";
import "./HeaderArea.css";
import { useLocation } from "react-router-dom";

const HeaderArea = () => {
  const location = useLocation();
  console.log("location", location);

  return <div className="">Welcome to Header Area</div>;
};
export default HeaderArea;
