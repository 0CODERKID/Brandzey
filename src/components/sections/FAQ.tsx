import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [

  {
    question: "How long does it take to see results?",
    answer:"Most clients start seeing significant growth within 30-60 days of implementing out strategies. However,sustainable growth is a long-term process."
  },


  {
    question:"Do I need existing followers to start?",
    answer: "No, youcan start from zero. Our strategies work for both new accountss and established profiles looking to scale."
  },


  {
    question:"What platforms do you focus on?",
    answer: "We primarily focus on Instagram, Youtube, and Tiktok as these platforms offer the best oppurtunities for organic grrowth and engagement."

  },

  {

    question: "How much time do I need to invest?",
    answer: "Our systems are designed to be efficient. Most clients spends 2-3 hours per week on content creation and engagement."
  }
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
        className='text-4xl font-bold text-center text-white mb-12'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5}}
        >
          Ferquently Asked Questions 
        </motion.h2>
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900 rounded-xl overflow-hidden"
            >

              <button
              onClick={() => setOpenIndex(openIndex === index? null: index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                <ChevronDown
                className={'w-5 h-5 text-purple-400 transform transition-transform duration-200
                   ${
                  openIndex === index ? 'rotate-180' : ''
                }'} 
                />   
                </button>

                <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 
                  'auto' : 0 }}
                  className="overflow-hidden"
                  >


                    
                  </motion.div>
          )
      </div>
    </section>
  );


}