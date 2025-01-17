import { motion } from 'framer-motion';
import { Rocket, Clock, Target } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: <Target className="w-12 h-12 text-purple-500" />,
    title: 'Authority',
    description: 'Became a respected thought leader in your in your industry'

  },
  {
    icon: <Clock className="w-12 h-12 text-purple-500" />,
    title: 'Efficient',
    description: 'Skyrocket your social media growth with minimal effort'
  },
  {
    icon: <Rocket className="w-12 h-12 text-purple-500" />,
    title: 'Return',
    description: 'Increase leads and sales with inbound customer acquisition'
  }
];