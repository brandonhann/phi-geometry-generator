# Sacred Geometry Generator

https://sacred-geometry-generator.vercel.app/

This project is a Phi Geometry Generator that creates complex geometric shapes based on the golden ratio and other geometry concepts. The generator leverages React and SVG to render the shapes, which can be customized through a user interface.

## Overview

The main purpose of this application is to generate shapes inspired by geometry principles. The shapes are built using the golden ratio, which is an irrational number approximately equal to 1.618033988749895. This number has been widely used in art, architecture, and nature due to its aesthetically pleasing proportions.

The application provides a user interface that allows you to control the visibility of horizontal and vertical lines, generate new shapes, and save the generated shapes as SVG files.

## How it works

The generator uses React and SVG to create the shapes. The core logic of the shape generation is in the `GoldenRatioShape` component, located in the `SacredGeometry.js` file.

### Generating the points

The `generateQuadrantPoints` function generates a set of points within a single quadrant of the shape. It calculates these points based on the number of points (`numPoints`), line width, and a random seed value. The points are generated using an angle increment, which is determined by dividing the π/2 by `numPoints`. The points are then calculated using the angle, the golden ratio, and the random seed.

The `generateSymmetricPoints` function generates a full set of points by reflecting the quadrant points across the x and y axes. This creates a symmetric shape that resembles geometry patterns.

### GoldenRatioShape component

The `GoldenRatioShape` component takes three props: `randomSeed`, `showHorizontal`, and `showVertical`. The `randomSeed` value is used to calculate the number of points and to determine the scaling factor for the shape. The `showHorizontal` and `showVertical` props control the visibility of the horizontal and vertical lines within the shape.

The component calculates the number of points and ensures that it is an even number. Then, it generates the full set of points by calling the `generateSymmetricPoints` function. The component also calculates the reflected points across the x and y axes to create the lines that form the shape.

Finally, the component renders the lines using SVG elements and applies the scaling factor to the shape.

## User Interface

The user interface is built using React and the [Next.js](https://nextjs.org/) framework. The main `Home` component includes buttons to control the visibility of horizontal and vertical lines, generate new shapes, and save the generated shapes as SVG files.

## Usage

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm run dev` to start the development server.
4. Open your browser and navigate to `http://localhost:3000` to access the application.

## Author

Developed by [Brandon Hann](https://github.com/brandonhann)

## License

This project is licensed under the MIT License.
