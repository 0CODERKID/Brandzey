import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureProps {
  feature: {
    icon: ReactNode;
    title: string;
    description: string;

  };
  index: number;
  }

  export function FeatureCard({ feature, index }: FeatureProps) {
    return (
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="text-center p-6 rounded-xl bg0gray-800 shadow-xl"
      >

        <div className="flex justify-center mb-4">
          {feature.icon}  
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-purple-200">
            {feature.description}          
          </p>
      </motion.div>
    );
  }
