import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene3D from '../3d/Scene3D';
import Button from '../layout/Button';
import ErrorBoundary from '../common/ErrorBoundary';
import VideoModal from '../ui/VideoModal';
import { useState } from 'react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="absolute inset-0 h-[70vh]">
      <ErrorBoundary fallback={
        <div className="flex items-center justify-center h-full">
        <h1 className="text-6xl font-bold text-purple-500">BRANDZEY</h1>
        </div>
      }>
        <Canvas>
        <Scene3D />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </ErrorBoundary>
      </div>
      
      <div className="relative pt-32 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto"
      >
        <motion.h1 
        className="text-5xl sm:text-7xl font-bold text-white mb-6"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        >
        Scale Your Own Tailored Personal Brand
        </motion.h1>
        <motion.p 
        className="text-xl sm:text-2xl text-purple-200 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        >
        Transform your social media presence and increase your revenue
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<>
  <Button 
    onClick={() => setIsVideoOpen(true)}
    className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Watch How We Do It
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ORqaqooqdkM?si=eFgRnzoKxB60zL9N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </Button>
   
 
</>

        <Button className="bg-white text-purple-900 hover:bg-purple-100">
          <a href="https://form.typeform.com/to/Ua4PwDkU" target="_blank" rel="noopener noreferrer">
            Apply To See If You Qualify
          </a>

      
        </Button>
        </div>
      </motion.div>
      </div>

    

    </div>
  );
}