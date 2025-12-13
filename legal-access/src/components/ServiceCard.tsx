import type { ReactNode } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { LinkButton } from './Button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  image?: string;
  backText?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  image,
  backText,
  buttonText = 'Start Now',
  buttonLink = '#',
  className = '',
}: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  if (image && backText) {
    return (
      <motion.div
        className={`relative h-96 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer ${className}`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        {/* Front - Image */}
        <motion.div
          animate={{
            rotateY: isFlipped ? 180 : 0,
            opacity: isFlipped ? 0 : 1,
            pointerEvents: isFlipped ? 'none' : 'auto'
          }}
          transition={{ duration: 0.6 }}
          style={{ backfaceVisibility: 'hidden' }}
          className="absolute w-full h-full rounded-lg overflow-hidden"
        >
          <div
            className="w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${image})` }}
          />

          <div
            className="absolute inset-0 flex flex-col justify-end p-6 text-white"
            style={{ backgroundColor: 'rgba(0,0,0,0.18)' }}
          >
            <h3
              className="text-2xl font-bold"
              style={{
                textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000'
              }}
            >
              {title}
            </h3>
          </div>
        </motion.div>

        {/* Back - Text and Button */}
        <motion.div
          animate={{
            rotateY: isFlipped ? 0 : -180,
            opacity: isFlipped ? 1 : 0,
            pointerEvents: isFlipped ? 'auto' : 'none'
          }}
          transition={{ duration: 0.6 }}
          style={{ backfaceVisibility: 'hidden' }}
          className="absolute w-full h-full bg-gradient-to-br from-primary-dark to-primary p-6 flex flex-col justify-between text-black rounded-lg"
        >
          <p className="text-[32px] leading-relaxed text-black text-left mx-4 my-6">{backText}</p>
          <Link
            to={buttonLink}
            className="block w-full px-4 py-2 text-sm font-medium rounded-full transition-colors text-center"
            style={{
              backgroundColor: '#281e5d',
              color: 'white',
            }}
          >
            {buttonText}
          </Link>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ translateY: -8 }}
      className={`rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow ${className}`}
    >
      {image ? (
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <div
            className="w-full h-full bg-center bg-cover hover:scale-105 transition-transform"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white" style={{ backgroundColor: 'rgba(0,0,0,0.38)' }}>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-primary-light to-primary p-8">
          {icon && <div className="text-5xl mb-4">{icon}</div>}
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white text-opacity-90">{description}</p>
        </div>
      )}
      {!image && <div className="p-6 bg-white">{description}</div>}
    </motion.div>
  );
}
