import React from "react";
import classnames from "classnames";
import "./grid.scss";

const Grid = ({ children, align, justify, gutter }) => {
    const getClassNames = () => {
        return classnames("grid", {
            "grid--gutter": gutter,
            [`grid--align-${align && align.toLowerCase()}`]: align,
            [`grid--justify-${justify && justify.toLowerCase()}`]: justify,
        });
    };
    return <div className={getClassNames()}>{children}</div>;
};

export default Grid;
