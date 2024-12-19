import React from 'react';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Stats from './components/sections/Stats';
import Proof from './components/sections/Proof';
import FAQ from './components/sections/FAQ';
import CallToAction from './components/sections/CallToAction';
import ErrorBoundary from './components/common/ErrorBoundary';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <ErrorBoundary>
        <Hero />
        <Features />
        <Stats />
        <Proof />
        <FAQ />
        <CallToAction />
      </ErrorBoundary>
    </div>
  );
}

export default App;