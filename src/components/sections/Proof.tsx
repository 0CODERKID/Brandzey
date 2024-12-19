import { motion } from 'framer-motion';

const proofImages = [
  {
    url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    followers: '145K',
    platform: 'Instagram'
  },
  {
    url: 'https://images.unsplash.com/photo-1611162616305-c69b3037f72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    followers: '51.9K',
    platform: 'YouTube'
  },
  {
    url: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    followers: '103K',
    platform: 'TikTok'
  }
];

export default function Proof() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Real Results, Real Growth
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofImages.map((proof, index) => (
            <motion.div
              key={proof.platform}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <img 
                  src={proof.url} 
                  alt={`${proof.platform} Growth`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <p className="text-3xl font-bold text-purple-400">{proof.followers}</p>
                  <p className="text-white">{proof.platform} Followers</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}