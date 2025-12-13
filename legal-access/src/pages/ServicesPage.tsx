import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { LinkButton } from '../components/Button';
import { CheckCircle, Users, Shield, BookOpen, Gavel } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Section className="bg-gradient-to-r from-primary-dark to-primary text-white pt-20">
        <motion.h1 {...fadeInUp} className="text-5xl font-bold mb-6">
          Our Services
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="text-xl text-white text-opacity-90 max-w-2xl"
        >
          Comprehensive legal solutions designed for individuals, businesses, and students.
        </motion.p>
      </Section>

      {/* Services Detail */}
      {serviceDetails.map((service, index) => (
        <Section key={service.title} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                {service.icon}
                <h2 className="text-4xl font-bold text-primary-dark">{service.title}</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="text-accent-green flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <LinkButton href="/services#contact" size="lg">
                Get Started
              </LinkButton>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="bg-gradient-to-br from-primary-light to-primary rounded-lg h-96 flex items-center justify-center"
            >
              <div className="text-center text-white">
                <div className="text-8xl mb-4">{service.emoji}</div>
                <p className="text-xl font-semibold">{service.title}</p>
              </div>
            </motion.div>
          </div>
        </Section>
      ))}

      {/* How It Works */}
      <Section className="bg-white">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-primary-dark mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting legal help has never been easier. Follow these simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: 1, title: 'Create Account', description: 'Sign up and complete your profile' },
            { step: 2, title: 'Describe Needs', description: 'Tell us about your legal needs' },
            { step: 3, title: 'Get Matched', description: 'We find the perfect expert for you' },
            { step: 4, title: 'Get Help', description: 'Start working with your expert' },
          ].map((item) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.step * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-bold text-lg text-primary-dark mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section className="bg-gray-50">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No hidden fees. Clear, affordable pricing for all services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-lg p-8 ${
                plan.highlighted
                  ? 'bg-primary text-white shadow-xl scale-105'
                  : 'bg-white shadow-lg'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={plan.highlighted ? 'text-white text-opacity-90' : 'text-gray-600'}>
                {plan.description}
              </p>
              <div className="my-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className={plan.highlighted ? 'text-white text-opacity-90' : 'text-gray-600'}> {plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <LinkButton
                href="/services#contact"
                variant={plan.highlighted ? 'outline' : 'primary'}
                size="lg"
                className="w-full text-center"
              >
                Get Started
              </LinkButton>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-6">
          Ready to Get Started?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto"
        >
          Join thousands of satisfied clients. Get matched with a legal expert today.
        </motion.p>
        <LinkButton
          href="/services#contact"
          variant="outline"
          size="lg"
          className="border-white text-white hover:bg-white hover:text-primary"
        >
          Schedule Free Consultation
        </LinkButton>
      </Section>
    </div>
  );
}

const serviceDetails = [
  {
    title: 'Legal Expert Connection',
    emoji: '⚖️',
    icon: <Users size={40} className="text-primary" />,
    description:
      'Connect with verified, experienced lawyers and legal professionals who can assist you with various legal matters.',
    features: [
      'Access to vetted legal professionals',
      'Flexible consultation options',
      'Affordable rates',
      'Confidential consultations',
    ],
  },
  {
    title: 'Online Arbitration',
    emoji: '🏛️',
    icon: <Gavel size={40} className="text-primary" />,
    description:
      'Resolve disputes quickly and affordably through our secure online arbitration platform.',
    features: [
      'Fast dispute resolution',
      'Neutral arbitrators',
      'Secure platform',
      'Binding decisions',
    ],
  },
  {
    title: 'Legal Insurance Plans',
    emoji: '🛡️',
    icon: <Shield size={40} className="text-primary" />,
    description:
      'Protect yourself and your business with comprehensive legal insurance coverage.',
    features: [
      'Personal coverage',
      'Business coverage',
      'Affordable premiums',
      'Extensive coverage',
    ],
  },
  {
    title: 'Legal Education & Tutoring',
    emoji: '📚',
    icon: <BookOpen size={40} className="text-primary" />,
    description:
      'Learn law from experienced educators. Perfect for students and professionals seeking to enhance their legal knowledge.',
    features: [
      'Expert tutors',
      'Flexible schedules',
      'One-on-one sessions',
      'Study materials included',
    ],
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    description: 'For individual consultations',
    price: '₦10,000',
    period: '/ consultation',
    highlighted: false,
    features: [
      'One legal consultation',
      'Email support',
      'Basic documents',
    ],
  },
  {
    name: 'Professional',
    description: 'For ongoing legal support',
    price: '₦50,000',
    period: '/ month',
    highlighted: true,
    features: [
      'Unlimited consultations',
      'Priority support',
      'Document drafting',
      'Legal advice',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For businesses',
    price: 'Custom',
    highlighted: false,
    features: [
      'Dedicated legal team',
      '24/7 support',
      'Custom solutions',
      'Volume discounts',
    ],
  },
];
