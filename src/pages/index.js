import React, { useRef, useState } from 'react';
import Head from 'next/head';
import { GoldenRatioShape } from '../components/SacredGeometry';
import { saveAs } from 'file-saver';

export default function Home() {
  const [seed, setSeed] = useState(null);
  const svgRef = useRef(null);
  const [showHorizontal, setShowHorizontal] = useState(true);
  const [showVertical, setShowVertical] = useState(true);

  React.useEffect(() => {
    setSeed(Math.random());
  }, []);

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
    <div className="bg-amber-50 text-amber-900 flex flex-col m-auto h-screen">
      <Head>
        <title>Sacred Geometry Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='w-full m-auto text-center p-4'>
        <h1 className='text-xl'>Sacred Geomtry Generator</h1>
      </header>

      <main className="m-auto w-full md:w-3/5 lg:w-1/3 flex flex-col justify-center items-center">
        <section className="w-full max-w-[1000px]">
          <div ref={svgRef}>
            <GoldenRatioShape randomSeed={seed} showHorizontal={showHorizontal} showVertical={showVertical} />
          </div>
        </section>
        <section className="flex gap-4">
          <button
            className={`m-auto py-1 px-2 rounded-md shadow-sm ${showHorizontal ? 'bg-green-200 active:bg-green-300' : 'bg-red-200 active:bg-red-300'}`}
            onClick={() => setShowHorizontal(!showHorizontal)}
          >
            {showHorizontal ? 'Hide' : 'Show'} Horizontal
          </button>
          <button
            className={`m-auto py-1 px-2 rounded-md shadow-sm ${showVertical ? 'bg-green-200 active:bg-green-300' : 'bg-red-200 active:bg-red-300'}`}
            onClick={() => setShowVertical(!showVertical)}
          >
            {showVertical ? 'Hide' : 'Show'} Vertical
          </button>
        </section>
        <section className="flex gap-4 mt-4">
          <button
            className="py-1 px-2 rounded-md shadow-sm bg-amber-200 active:bg-amber-300"
            onClick={regenerate}
          >
            Generate New Shape
          </button>
          <button
            className="py-1 px-2 rounded-md shadow-sm bg-amber-200 active:bg-amber-300"
            onClick={saveSVG}
          >
            Save SVG
          </button>
        </section>
      </main>
      <footer className="w-full mt-10 text-center p-4 bg-amber-100 border-t-2 border-amber-200 bottom-0">
        <p>Developed by <a className='underline' href="https://github.com/brandonhann" target='_blank'>Brandon Hann</a></p>
      </footer>

    </div>
  );
}