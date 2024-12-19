import { motion } from 'framer-motion';

const stats = [
  { value: '21+', label: 'Years of Overall Experience' },
  { value: '736k+', label: 'Real Followers Gained' },
  { value: '167M+', label: 'Organic Views' }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          I Did It For Myself Too
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 rounded-xl bg-gray-700"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-purple-200">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}