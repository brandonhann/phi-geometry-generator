import React from "react";

export const GridLines = ({ lineWidth, showHorizontal, showVertical }) => {
    const horizontalLine = showHorizontal && (
        <line
            x1="0"
            y1={lineWidth}
            x2={lineWidth * 2}
            y2={lineWidth}
            stroke="blue"
            strokeWidth="1"
        />
    );

    const verticalLine = showVertical && (
        <line
            x1={lineWidth}
            y1="0"
            x2={lineWidth}
            y2={lineWidth * 2}
            stroke="red"
            strokeWidth="1"
        />
    );

    return (
        <svg viewBox={`0 0 ${lineWidth * 2} ${lineWidth * 2}`}>
            {horizontalLine}
            {verticalLine}
        </svg>
    );
};
