import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { LinkButton } from '../components/Button';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Section className="bg-gradient-to-r from-primary-dark to-primary text-white pt-20">
        <motion.h1 {...fadeInUp} className="text-5xl font-bold mb-6">
          How Legal Access Works
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="text-xl text-white text-opacity-90 max-w-2xl"
        >
          A simple, transparent process to connect you with legal expertise.
        </motion.p>
      </Section>

      {/* Main Process */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {processes.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex gap-8 items-start ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {process.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">{process.title}</h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">{process.description}</p>
                  <ul className="space-y-2">
                    {process.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <ArrowRight size={18} className="text-accent-green flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* For Different User Types */}
      <Section className="bg-gray-50">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-primary-dark mb-4">
            Different Paths for Different Needs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're an individual, business, or legal professional, we have a path for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userPaths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-5xl mb-4">{path.icon}</div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">{path.title}</h3>
              <p className="text-gray-600 mb-6">{path.description}</p>
              <div className="space-y-3">
                {path.steps.map((step) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
              <LinkButton href="/services" size="lg" className="w-full text-center mt-6">
                Get Started
              </LinkButton>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-primary-dark mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.details
              key={faq.question}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 rounded-lg p-6 cursor-pointer"
            >
              <summary className="font-bold text-lg text-primary-dark flex justify-between items-center">
                {faq.question}
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </Section>

      {/* Safety & Security */}
      <Section className="bg-gradient-to-r from-primary-dark to-primary text-white">
        <motion.div className="text-center" {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-6">Safe & Secure</h2>
          <p className="text-white text-opacity-90 text-lg mb-8 max-w-2xl mx-auto">
            Your privacy and security are our top priorities. All communications are encrypted and confidential.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {['🔒 End-to-End Encryption', '✓ Verified Professionals', '📋 Secure Documentation'].map(
              (feature) => (
                <div key={feature} className="bg-white bg-opacity-10 rounded-lg p-4">
                  <p className="font-semibold text-lg">{feature}</p>
                </div>
              )
            )}
          </div>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section className="bg-white text-center">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-primary-dark mb-6">
          Ready to Get Started?
        </motion.h2>
        <motion.p
          {...fadeInUp}
          className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
        >
          Take the first step towards legal clarity today.
        </motion.p>
        <LinkButton href="/services" size="lg">
          Explore Our Services
        </LinkButton>
      </Section>
    </div>
  );
}

const processes = [
  {
    step: '1',
    title: 'Create Your Account',
    description: 'Sign up with your email and create a secure profile. It takes less than 2 minutes.',
    details: [
      'Choose your account type (Individual, Business, or Professional)',
      'Verify your email address',
      'Set up your profile information',
    ],
  },
  {
    step: '2',
    title: 'Describe Your Legal Need',
    description: 'Tell us about your legal challenge or requirement in detail.',
    details: [
      'Select the type of legal service you need',
      'Provide details about your situation',
      'Mention your preferred budget and timeline',
    ],
  },
  {
    step: '3',
    title: 'We Match You with an Expert',
    description: 'Our AI-powered matching system finds the perfect legal professional for your needs.',
    details: [
      'Review potential experts in your area',
      'Check qualifications and experience',
      'Read reviews from other clients',
    ],
  },
  {
    step: '4',
    title: 'Collaborate Securely',
    description: 'Work with your legal expert through our secure platform.',
    details: [
      'Have video/phone consultations',
      'Share documents securely',
      'Get expert legal advice',
    ],
  },
  {
    step: '5',
    title: 'Resolve Your Issue',
    description: 'Complete your legal matter with confidence and support.',
    details: [
      'Receive final documents and guidance',
      'Get follow-up support as needed',
      'Pay only for services rendered',
    ],
  },
];

const userPaths = [
  {
    icon: '👤',
    title: 'For Individuals',
    description: 'Get affordable legal help for personal matters.',
    steps: [
      'Create a personal account',
      'Describe your legal need',
      'Get matched with a lawyer',
      'Resolve your matter',
    ],
  },
  {
    icon: '🏢',
    title: 'For Businesses',
    description: 'Comprehensive legal solutions for your business.',
    steps: [
      'Register your business',
      'Set up your legal team',
      'Access priority support',
      'Scale your legal needs',
    ],
  },
  {
    icon: '📚',
    title: 'For Professionals',
    description: 'Build your practice and grow with us.',
    steps: [
      'Apply as a legal professional',
      'Complete verification process',
      'Start accepting clients',
      'Grow your practice',
    ],
  },
];

const faqs = [
  {
    question: 'How long does it take to get matched with a legal expert?',
    answer:
      'Typically, we match you with a suitable legal professional within 24 hours. For urgent matters, we can expedite the process.',
  },
  {
    question: 'Is my information secure on Legal Access?',
    answer:
      'Yes, we use end-to-end encryption for all communications and documents. Your privacy is our top priority.',
  },
  {
    question: 'What if I\'m not satisfied with my matched expert?',
    answer:
      'You can request a different expert at no additional cost. Your satisfaction is important to us.',
  },
  {
    question: 'How are payments handled?',
    answer:
      'Payments are securely processed through our platform. You pay only after the service is rendered.',
  },
  {
    question: 'Can I use Legal Access for business legal matters?',
    answer:
      'Absolutely. We have experts experienced in business law, contracts, registration, and more.',
  },
  {
    question: 'Is there a subscription required?',
    answer:
      'No, you only pay for the services you use. Some users choose monthly plans for ongoing legal support.',
  },
];
