import { motion } from 'framer-motion';

interface StatProps {
    stat: {
        value: string;
        label: string;
    };
    index: number;
   
}

export function statCard({ stat, index}: StatProps) {
    return(
        <motion.div
        initial={{ opacity: 0, scale:0.5}}
        whileInView={{ opacity: 1, scale: 1}}
        transition= {{ delay: index *0.2 }}
        className= "text-center p-6 rounded-xl bg-gry-700"
        >
            <div className="text-4xl font-bold text-purple-400 mb-2 ">
                {stat.value}
            </div>
            <div className="text-lg text-purple-200">
                {stat.label}
            </div>
        </motion.div>
    );
}