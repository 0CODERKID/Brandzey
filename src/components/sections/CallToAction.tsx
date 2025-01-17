import { motion } from 'framer-motion';
import Button from '../layout/Button';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gray-900">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
               <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >

    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">Ready to Transform Your Brand?

      <p className="text-xl text-purple-200 mb-8">Join thousands of successful entrepreneurs who have scaled their personal brand with out proven system.</p>

      <Button>
        Book a Call Now 
      </Button>
      </motion.div>
      </div>
    </section>
  );
}