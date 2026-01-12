import { motion } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { Section } from '../components/Section';
import { Shield, BookOpen, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const services = [
  {
    id: 'legal-protection',
    icon: Shield,
    title: 'Legal Protection Plans',
    description: 'Subscription-based legal support for individuals and small-to-medium enterprises (SMEs). Get access to verified lawyers and comprehensive legal guidance.',
    gradient: 'from-primary-light to-primary',
    features: [
      'Affordable membership plans',
      'Access to verified legal professionals',
      'Flexible consultation options',
      'Confidential support',
    ],
    buttonText: 'Join as Client',
    buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdgxUK4OwQzaecMbM_NXBivzmrQChzorIyk2dfUgIOVfP-bXw/viewform',
  },
  {
    id: 'law-tutors',
    icon: BookOpen,
    title: 'Law Tutor Services',
    description: 'Academic excellence and bar exam preparation for law students. Learn from experienced educators with personalized guidance.',
    gradient: 'from-accent-green to-accent-green',
    features: [
      'Expert tutors',
      'Bar exam preparation',
      'Flexible schedules',
      'One-on-one sessions',
    ],
    buttonText: 'Join as Student',
    buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfIiPrZ0ZNKnjLpgsotUEeKKPwEJmXp4fLEsQdvLUPAM62oLw/viewform',
  },
  {
    id: 'pro-bono',
    icon: Heart,
    title: 'Pro Bono Services',
    description: 'Community justice and pro bono support. Get free legal aid if you need help, or register as a lawyer to provide social impact.',
    gradient: 'from-accent-orange to-accent-orange',
    features: [
      'Free legal aid for those in need',
      'Community justice initiatives',
      'Social impact opportunities',
      'Make a difference',
    ],
    dualButtons: true,
  },
];

export function ServicesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (info.offset.x < -swipeThreshold && currentSlide < services.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#1e0a3c]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark via-primary to-primary-light text-white py-20 md:py-32 min-h-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white text-opacity-95 max-w-2xl leading-relaxed">
              Comprehensive legal solutions designed for individuals, businesses, and students. Choose the service that fits your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3-Column Services Grid (Desktop) / Carousel (Mobile) */}
      <Section className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-4">
            Three Pillars of Legal Support
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're an individual, business, student, or legal professional, we have the right support for you.
          </p>
        </motion.div>

        {/* Desktop Grid - Hidden on Mobile */}
        <motion.div
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service) => (
            <ServiceCardComponent key={service.id} service={service} />
          ))}
        </motion.div>

        {/* Mobile Carousel - Hidden on Desktop */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-xl">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex"
            >
              {services.map((service) => (
                <div key={service.id} className="w-full flex-shrink-0 px-4">
                  <ServiceCardComponent service={service} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-primary w-8' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          {/* Carousel Navigation Arrows */}
          <div className="flex justify-between mt-6 gap-4">
            <motion.button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-all ${currentSlide === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-primary-dark'
              }`}
              whileHover={currentSlide !== 0 ? { scale: 1.05 } : {}}
            >
              <ChevronLeft size={20} />
              Previous
            </motion.button>
            <motion.button
              onClick={() => setCurrentSlide(Math.min(services.length - 1, currentSlide + 1))}
              disabled={currentSlide === services.length - 1}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-all ${currentSlide === services.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-primary-dark'
              }`}
              whileHover={currentSlide !== services.length - 1 ? { scale: 1.05 } : {}}
            >
              Next
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in just three simple steps.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {[
            {
              step: 1,
              title: 'Tell Us Your Need',
              description: 'Choose your category and provide details about your legal requirement or expertise.',
            },
            {
              step: 2,
              title: 'Get Connected',
              description: 'We match you with the right legal professional, tutor, or pro bono opportunity.',
            },
            {
              step: 3,
              title: 'Begin Your Journey',
              description: 'Start receiving expert guidance and support tailored to your needs.',
            },
          ].map((item) => (
            <motion.div
              key={item.step}
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary text-primary-dark rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {item.step}
              </motion.div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary-dark via-primary to-primary-light text-white text-center py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-white text-opacity-95 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied clients, students, and legal professionals using Legal Access.
          </p>
          <motion.a
            href="/"
            className="inline-block px-8 py-4 bg-white text-primary hover:bg-gray-100 font-bold rounded-full transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Home
          </motion.a>
        </motion.div>
      </Section>
    </div>
  );
}

// Helper component to render individual service cards
interface ServiceCardComponentProps {
  service: typeof services[0];
}

function ServiceCardComponent({ service }: ServiceCardComponentProps) {
  const IconComponent = service.icon as React.ComponentType<{ size?: number; className?: string }>;

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col"
      whileHover={{ translateY: -8 }}
    >
      {/* Card Header with Icon */}
      <div className={`bg-[#1e0a3c] p-8 flex flex-col justify-center items-center min-h-52`}>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <IconComponent size={72} className="text-white mb-4" />
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center leading-tight">
          {service.title}
        </h3>
      </div>

      {/* Card Body */}
      <div className="p-8 flex flex-col flex-1">
        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-3 mb-10 flex-1">
          {service.features.map((feature) => (
            <motion.li
              key={feature}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-accent-green font-bold text-xl mt-1">✓</span>
              <span className="text-gray-700 text-base">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Buttons */}
        {service.dualButtons ? (
          <div className="flex gap-3 flex-col sm:flex-row">
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdgxUK4OwQzaecMbM_NXBivzmrQChzorIyk2dfUgIOVfP-bXw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-full text-center transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Need Help?
            </motion.a>
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLScsDyhjg1iQSeQ3qzhpv5aCW6GODOA01yU01-uoTSzv4ulDTQ/viewform?fbzx=819630271247203466"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 bg-accent-green hover:bg-green-700 text-white font-medium rounded-full text-center transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Lawyer
            </motion.a>
          </div>
        ) : (
          <motion.a
            href={service.buttonLink!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-full text-center transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {service.buttonText}
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
