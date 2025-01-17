import { motion } from 'framer-motion';

const proofImages = [
  {
    url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    followers: '145k',
    platform: 'Instagram'
  },
  {
    url: 'https://images.unsplash.com/photo-1611162616305-c69b3037f72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    followers: '51.9k'
    platform: 'Youtube'
  },
  {
    url: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    followers: '103k',
    platform: 'Tiktok'
  }
];

export default function Proof() {
  return(
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
        className="text-4xl font-bold text-center text-center text-white mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{opacity: 1, scale:1}}
        transition={{ delay: index * 0.2}}
        className="relative group"
        ></motion.h2>

      </div>
    </section>
  )
}