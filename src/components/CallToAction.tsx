import { motion } from 'framer-motion';


export default function CallToAction() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div 
        initial={{ opacity: 0, y: 20}}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.8}}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-purple-2000 mb-8">
            Join thousands of successful entrepreneurs who have scaled their personal brand with our proven system.
          </p>
          <motion.button 
          whileHover={{ scale: 1.05}}
          whileTap={{ scale: 0.95}}
          className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors">
            Book a Call Now
          </motion.button>
        </motion.div>
      </div>
      </section>
  );
}