import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { Section } from '../components/Section';
import { useModal } from '../context/ModalContext';
// Load service images via `new URL(..., import.meta.url).href` to ensure
// correct asset URLs when built with Vite.

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function HomePage() {
  const { openModal } = useModal();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="bg-gradient-to-r from-gray-50 to-white pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: '#281e5d' }}>
              Justice Simplified. Access Unlocked.
            </h1>
            <p className="text-2xl md:text-3xl mb-8 leading-relaxed" style={{ color: '#281e5d' }}>
              Your trusted digital gateway to legal expertise, protection, and education in Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="inline-block px-8 py-4 text-lg font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border-2" style={{ color: '#281e5d', borderColor: '#281e5d' }}>
                Discover Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-full rounded-3xl overflow-hidden"
          >
            <img
              src={new URL('../assets/Hero.png', import.meta.url).href}
              alt="Legal Services Platform"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section className="text-white" style={{ backgroundColor: '#281e5d' }}>
        <motion.div
          {...fadeInUp}
          className="max-w-3xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Are Legal Challenges Holding You Back?
          </h2>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            Struggling with overwhelming legal costs, confusing terms, or the search for a trustworthy lawyer? 
            Discover Legal Access, your simplified path to clear, affordable, and reliable legal assistance.
          </p>
        </motion.div>
      </Section>

      {/* Services Section */}
      <Section id="services" className="bg-white">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#281e5d' }}>
            Bridging You to Legal Expertise!
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                backText={service.backText}
                buttonText={service.buttonText}
                buttonLink={service.buttonLink}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#281e5d' }}>
            Why Choose Legal Access?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the trusted choice for legal solutions in Nigeria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 overflow-hidden hover:shadow-lg transition-shadow min-h-96"
              >
                {/* Decorative background shape */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200 to-transparent rounded-full -mr-16 -mt-16 opacity-30"></div>

                {/* Large faded number */}
                <div className="absolute right-4 md:-right-8 bottom-0 z-0 pointer-events-none">
                  <span className="transform translate-x-6 md:translate-x-12 font-extrabold text-[140px] md:text-[220px] leading-none text-primary-light opacity-20 select-none">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 text-left">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#281e5d' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-800 text-base leading-relaxed max-w-xs">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <motion.h2
              {...fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-12"
              style={{ color: '#281e5d' }}
            >
              Your Path to Legal Clarity in 3 Simple Steps
            </motion.h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#281e5d' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <button
                onClick={openModal}
                className="w-full md:w-auto px-8 py-4 text-lg font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  color: '#281e5d',
                  borderColor: '#281e5d',
                  borderWidth: '2px',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#281e5d';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#281e5d';
                }}
              >
                Start Your Journey Now
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-full rounded-2xl overflow-hidden"
          >
            <img
              src={new URL('../assets/Gavel.png', import.meta.url).href}
              alt="Gavel"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-gray-50">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#281e5d' }}>
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        id="cta"
        className="text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${new URL('../assets/background.jpeg', import.meta.url).href})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'overlay',
          backdropFilter: 'blur(2px)',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Ready to Transform Your Legal Experience?
            </h2>

            <p className="text-lg text-white leading-relaxed">
              Join Nigeria's leading platform for accessible and efficient legal solutions.
            </p>
          </motion.div>

          {/* Right side - Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <Button
              onClick={() => openModal(['For Individuals & Businesses', 'Students'])}
              variant="outline"
              size="lg"
              className="border-2 w-full text-center text-white border-white focus:ring-0 transition-none"
            >
              For Individuals & Businesses
            </Button>
            <Button
              onClick={() => openModal(['Legal Professionals', 'Tutors'])}
              variant="outline"
              size="lg"
              className="border-2 w-full text-center text-white border-white focus:ring-0 transition-none"
            >
              For Legal Professionals & Tutors
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

const services = [
  {
    title: 'Access Legal Experts',
    description: 'Connect with verified lawyers for your legal needs',
    image: new URL('../assets/LegalExpert.jpeg', import.meta.url).href,
    backText: 'Experience a swift, confidential, and cost-effective way to settle disagreements without traditional court processes, leveraging certified arbitrators and secure digital tools.',
    buttonText: 'Get Started',
    buttonLink: '/form/legal-professionals',
  },
  {
    title: 'Tutor Services',
    description: 'Learn law with experienced educators',
    image: new URL('../assets/Tutor.jpeg', import.meta.url).href,
    backText: 'Excel in law. Bridge the gap between theory and practice with personalized academic and practical guidance.',
    buttonText: 'Start Now',
    buttonLink: '/form/tutors',
  },
  {
    title: 'Legal Insurance',
    description: 'Protect yourself with affordable insurance plans',
    image: new URL('../assets/Insurance.jpeg', import.meta.url).href,
    backText: 'Protect your future affordably. Secure comprehensive legal coverage designed for peace of mind.',
    buttonText: 'Start Now',
    buttonLink: '/form/legal-insurance',
  },
  {
    title: 'Online Arbitration',
    description: 'Resolve disputes online quickly',
    image: new URL('../assets/Arbitration.jpeg', import.meta.url).href,
    backText: 'Navigating legal challenges can be daunting. Get expert advice and support for your personal or business needs.',
    buttonText: 'Start Now',
    buttonLink: '/form/online-arbitration',
  },
];

const benefits = [
  {
    title: 'Verified Experts',
    description: 'Connect with thoroughly vetted and trusted legal professionals.',
  },
  {
    title: 'Affordable Protection',
    description: 'Gain peace of mind with cost-effective legal solutions and insurance.',
  },
  {
    title: 'Seamless Process',
    description: 'Experience a simple, fast, and convenient path to legal clarity.',
  },
  {
    title: 'Empowering Resources',
    description: 'Access knowledge and guidance to confidently navigate your legal journey.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Tell Us Your Need',
    description: 'Briefly describe your legal challenge or requirement.',
  },
  {
    number: '2',
    title: 'Get Matched with an Expert',
    description: 'We connect you with a verified lawyer or tutor.',
  },
  {
    number: '3',
    title: 'Resolve & Relax',
    description: 'Achieve your legal goals with confidence and ease.',
  },
];

const testimonials = [
  {
    name: 'Chidi N.',
    title: 'Individual, Abuja',
    image: new URL('../assets/ChidiN.jpeg', import.meta.url).href,
    quote: 'As an individual overwhelmed by legal issues, Legal Access connected me to a compassionate and knowledgeable lawyer who guided me every step of the way.',
  },
  {
    name: 'Aisha O.',
    title: 'Small Business Owner, Lagos',
    image: new URL('../assets/AishaO.jpeg', import.meta.url).href,
    quote: 'Legal Access simplified our company registration process immediately. The user was professional, and affordable. Great service!',
  },
  {
    name: 'Tunde K.',
    title: 'Law Student, Ibadan',
    image: new URL('../assets/TundeK.jpeg', import.meta.url).href,
    quote: 'As a law student, finding practical support was a challenge until I discovered Legal Access. My grades have improved, and I feel much more confident.',
  },
];
