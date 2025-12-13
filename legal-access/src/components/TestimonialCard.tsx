import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  title: string;
  image: string;
  quote: string;
}

export function TestimonialCard({ name, title, image, quote }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
      <p className="text-gray-700 text-base leading-relaxed">"{quote}"</p>
      <div className="flex gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
    </motion.div>
  );
}
