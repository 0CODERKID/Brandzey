import { motion } from 'framer-motion';
import { StatCard } from './StatCard';
import { label } from 'framer-motion/client';

const stats = [
  {value: '21', label: 'Years of Overall Experience' }, 
  { value: '736+', label: 'Real Followers Gained'},
  { value: '167M+', label: 'Organic Views'}
];

export default functon Stats() {
  return (
    <section className="py-20 bg-gray-800">
    <div className="max-w-7x1 mx-auto px-4 sm:px sm:px-6  lg:px-8">
    <h2 className="text-4xl font-bold text-center text-white mb-12">
    I Did It For Myself Too
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {stats.map((stat, index) => (
      <StatCard key={stat.label} stat={stat} index={index} />
  ))}
    </div>
    </section>
  );
}