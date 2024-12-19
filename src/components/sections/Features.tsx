import { motion } from 'framer-motion';
import { Rocket, Clock, Target } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: <Target className="w-12 h-12 text-purple-500" />,
    title: 'Authority',
    description: 'Become a respected thought leader in your industry'
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

export default function Features() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}