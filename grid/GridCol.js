import React from "react";

const GridCol = ({ children, sm, md, lg }) => {
    const breakpoints = { sm, md, lg };

    const getClassNames = () => {
        const classes = ["grid__col"];

        Object.keys(breakpoints).forEach((breakpoint) => {
            const currentColWidth = breakpoints[breakpoint];
            if (currentColWidth) {
                classes.push(
                    `grid__col--${currentColWidth}of12${breakpoint.toUpperCase()}`,
                );
            }
        });

        return classes.join(" ");
    };

    return <div className={getClassNames()}>{children}</div>;
};

export default GridCol;
