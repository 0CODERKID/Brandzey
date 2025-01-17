import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';
import { Rocket, Clock, Target } from 'lucide-react';

function Scene() {
  return (
    <>
    <ambientLight instensity={0.5} />
    <pointLight postion={[10, 10, 10]} />
    <Center> 
      <Text3D
      font="/fonts/helveticker_regular.typeface.json"
      size={1.5}
      height={0.5}
      curveSegments={12}
      >
        {'BRANDZEY'}
        <meshStandardMaterial color="#9333ea"/>
        </Text3D>
        </Center>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </>
  );
}

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-purple-900">
      <div className="absolute inset-0 h-[70vh]">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
      

      <div className="relative pt-32 px-4 sm:px-6 lg:px-8">
        <motion.div
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.8}}
        className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Scale Your Own Tailored Personal Brand 
          </h1>
          <p className="text-xl text-purple-200 mb-8">
            Transform your social media presence and incrase your revenue
          </p>
          <motion.button
          whileHover={{ scale: 1.05}}
          whileTap={{ scale: 0.95}}
          className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Apply To See If You Qualify 
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}