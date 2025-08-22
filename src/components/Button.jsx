import React from "react";
import { Link } from "react-router-dom";
import Arrow from "./Arrow";

function Button({text, link, arrowClass,color}) {
  return (
    <Link
      to={link}
      className={`flex  ${color}`}
    >
      <div className="text bg-secondary text-base leading-10 lg:text-xl px-6 lg:leading-[40px] rounded-[50px]">{text}</div>
      {arrowClass && <Arrow customClass="bg-secondary -rotate-45" />}
    </Link>
  );
}

export default Button;
