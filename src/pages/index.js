import React from 'react';
import Head from 'next/head';
import { GoldenRatioShape } from '../components/SacredGeometry';
import { saveAs } from 'file-saver';

export default function Home() {
  const [seed, setSeed] = React.useState(Math.random());
  const svgRef = React.useRef(null);

  const regenerate = () => {
    setSeed(Math.random());
  };

  const saveSVG = () => {
    if (!svgRef.current) return;
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    saveAs(blob, 'sacred-geometry.svg');
  };

  return (
    <div className="App">
      <Head>
        <title>Next.js Sacred Geometry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="sacred-geometry-container" ref={svgRef}>
          <GoldenRatioShape randomSeed={seed} />
        </div>
        <button onClick={regenerate}>Generate New Shape</button>
        <button onClick={saveSVG}>Save SVG</button>
      </main>
    </div>
  );
}
