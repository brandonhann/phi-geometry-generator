import React from "react";

const goldenRatio = 1.618033988749895;

const generateRandomPoints = (numPoints, radius, rotation) => {
    const angleIncrement = (2 * Math.PI) / numPoints;
    const points = [];

    for (let i = 0; i < numPoints; i++) {
        const angle = i * angleIncrement * goldenRatio + rotation;
        const x = radius + radius * Math.cos(angle);
        const y = radius + radius * Math.sin(angle);
        points.push({ x, y });
    }

    return points;
};

export const GoldenRatioShape = ({ randomSeed }) => {
    const numPoints = 6 + Math.floor(randomSeed * 6); // Random number of points between 6 and 12
    const radius = 100;
    const rotation = randomSeed * 2 * Math.PI; // Random rotation between 0 and 2π
    const scaleFactor = 0.5 + randomSeed * 0.5; // Random scaling factor between 0.5 and 1

    const points = generateRandomPoints(numPoints, radius, rotation);
    const reflectedPointsX = points.map((point) => ({
        x: 2 * radius - point.x,
        y: point.y,
    }));
    const reflectedPointsY = points.map((point) => ({
        x: point.x,
        y: 2 * radius - point.y,
    }));

    const allPoints = [
        ...reflectedPointsX,
        ...reflectedPointsY,
    ];

    const randomStep = 1 + Math.floor(randomSeed * goldenRatio);

    const lines = allPoints.map((point, index) => {
        const nextPoint = allPoints[(index + randomStep) % allPoints.length];
        return (
            <line
                key={index}
                x1={point.x}
                y1={point.y}
                x2={nextPoint.x}
                y2={nextPoint.y}
                stroke="black"
                strokeWidth="1"
            />
        );
    });

    return (
        <svg
            viewBox={`0 0 ${radius * 2} ${radius * 2}`}
            className="golden-ratio-shape"
            style={{ transform: `scale(${scaleFactor})` }}
        >
            {lines}
        </svg>
    );
};
