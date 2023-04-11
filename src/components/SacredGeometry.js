import React from "react";

const goldenRatio = 1.618033988749895;

const generateQuadrantPoints = (numPoints, lineWidth, randomSeed) => {
    const angleIncrement = (Math.PI / 2) / numPoints;
    const points = [];

    for (let i = 0; i < numPoints; i++) {
        const angle = i * angleIncrement * goldenRatio + randomSeed * Math.PI;
        const x = lineWidth + lineWidth * Math.cos(angle);
        const y = lineWidth + lineWidth * Math.sin(angle);
        points.push({ x, y });
    }

    return points;
};

const generateSymmetricPoints = (numPoints, lineWidth, randomSeed) => {
    const quadrantPoints = generateQuadrantPoints(numPoints, lineWidth, randomSeed);
    const points = [];

    quadrantPoints.forEach((point) => {
        points.push(point);
        points.push({ x: 2 * lineWidth - point.x, y: point.y });
        points.push({ x: 2 * lineWidth - point.x, y: 2 * lineWidth - point.y });
        points.push({ x: point.x, y: 2 * lineWidth - point.y });
    });

    return points;
};

export const GoldenRatioShape = ({ randomSeed, showHorizontal, showVertical }) => {
    const numPoints = goldenRatio + Math.floor(randomSeed * (2 + Math.floor(Math.random() * 5))); // 1 switched w/ phi

    // Ensure the number of points is always even
    const evenNumPoints = numPoints % 2 === 0 ? numPoints : numPoints + 1;

    const lineWidth = 100;
    const scaleFactor = 0.5 + randomSeed * 0.5; // Random scaling factor between 0.5 and 1

    const points = generateSymmetricPoints(evenNumPoints, lineWidth, randomSeed);
    const reflectedPointsX = points.map((point) => ({
        x: 2 * lineWidth - point.x,
        y: point.y,
    }));
    const reflectedPointsY = points.map((point) => ({
        x: point.x,
        y: 2 * lineWidth - point.y,
    }));

    const allPoints = [
        ...reflectedPointsX,
        ...reflectedPointsY,
    ];

    const randomStep = 1 + Math.floor(randomSeed * goldenRatio);

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

    const lines = allPoints.map((point, index) => {
        const nextPoint = allPoints[(index + randomStep) % allPoints.length];
        return (
            <line
                key={index}
                x1={point.x}
                y1={point.y}
                x2={nextPoint.x}
                y2={nextPoint.y}
                stroke="#451a03"
                strokeWidth="1"
            />
        );
    });

    return (
        <svg
            viewBox={`0 0 ${lineWidth * 2} ${lineWidth * 2}`}
            style={{ transform: `scale(${scaleFactor})` }}
        >
            {lines}
            {horizontalLine}
            {verticalLine}
        </svg>
    );
};