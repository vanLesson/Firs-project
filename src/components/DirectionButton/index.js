import React, { useMemo } from "react";
import PT from "prop-types";
import cn from "classnames";

import "./style.css";

const SYMBOL_RIGHT = ">";
const SYMBOL_LEFT = "<";

const DirectionButton = ({ handleClick, direction }) => {
  const className = useMemo(
    () =>
      cn("btn", {
        btn__right: direction === "right",
        btn__left: direction === "left",
      }),
    [direction]
  );

  const symbol = useMemo(
    () => (direction === "right" ? SYMBOL_RIGHT : SYMBOL_LEFT),
    [direction]
  );

  return (
    <button className={className} onClick={handleClick}>
      {symbol}
    </button>
  );
};

DirectionButton.propTypes = {
  handleClick: PT.func,
  direction: PT.oneOf(["right", "left"]),
};

export { DirectionButton };
