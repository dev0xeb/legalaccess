import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { LinkButton } from '../components/Button';
import { Award, Target, Zap } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Section className="bg-gradient-to-r from-primary-dark to-primary text-white pt-20">
        <motion.h1 {...fadeInUp} className="text-5xl font-bold mb-6">
          About Legal Access
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="text-xl text-white text-opacity-90 max-w-2xl"
        >
          Revolutionizing access to legal services in Nigeria. Justice Simplified. Access Unlocked.
        </motion.p>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              To simplify access to quality legal services and education for individuals, businesses, and students across Nigeria. We believe that everyone deserves affordable, reliable, and professional legal assistance without the barriers of complexity or cost.
            </p>
            <div className="space-y-4">
              {[
                'Break down barriers to legal services',
                'Connect clients with verified experts',
                'Provide affordable legal solutions',
                'Educate Nigerians about their rights',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Target className="text-accent-green flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              To be Nigeria's most trusted digital platform for legal services, where justice is simplified, access is unlocked, and every person can confidently navigate their legal journey.
            </p>
            <div className="space-y-4">
              {[
                'Technology-driven solutions',
                'Transparent and ethical practices',
                'Community-focused approach',
                'Continuous innovation',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Zap className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="bg-gray-50">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Our Core Values</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-white">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experienced legal professionals dedicated to making justice accessible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-primary-light to-primary rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                {member.emoji}
              </div>
              <h3 className="text-lg font-bold text-primary-dark">{member.name}</h3>
              <p className="text-accent-green font-semibold mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Impact Stats */}
      <Section className="bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <p className="text-white text-opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-white">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Why Legal Access?</h2>
        </motion.div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 items-start"
            >
              <Award className="text-primary flex-shrink-0" size={28} />
              <div>
                <h3 className="text-xl font-bold text-primary-dark mb-2">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Partner With Us */}
      <Section className="bg-gray-50">
        <motion.div className="text-center" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-primary-dark mb-6">Join Our Community</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking for legal help or want to become a legal expert on our platform, we'd love to work with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/services" size="lg">
              Get Legal Help
            </LinkButton>
            <LinkButton href="/services" variant="outline" size="lg">
              Become an Expert
            </LinkButton>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

const values = [
  {
    icon: '🎯',
    title: 'Integrity',
    description: 'We operate with honesty and transparency in all our dealings.',
  },
  {
    icon: '♿',
    title: 'Accessibility',
    description: 'Making legal services available to everyone, regardless of background.',
  },
  {
    icon: '🤝',
    title: 'Excellence',
    description: 'Committed to the highest standards of legal service quality.',
  },
  {
    icon: '🔒',
    title: 'Confidentiality',
    description: 'Protecting client privacy and maintaining strict confidentiality.',
  },
];

const team = [
  {
    name: 'Jola Bawale',
    role: 'Founder & CEO',
    emoji: '⚖️',
    bio: 'Legal expert with 15+ years of experience in Nigerian law.',
  },
  {
    name: 'Aisha Johnson',
    role: 'Chief Legal Officer',
    emoji: '📜',
    bio: 'Bar association member specializing in corporate law.',
  },
  {
    name: 'Chidi Nwosu',
    role: 'Product Director',
    emoji: '💼',
    bio: 'Tech leader focused on making law accessible through technology.',
  },
  {
    name: 'Zainab Hassan',
    role: 'Operations Manager',
    emoji: '🚀',
    bio: 'Ensures smooth operations and excellent customer service.',
  },
];

const stats = [
  { value: '5000+', label: 'Satisfied Clients' },
  { value: '500+', label: 'Legal Experts' },
  { value: '₦50M+', label: 'Cases Resolved' },
  { value: '4.9★', label: 'Average Rating' },
];

const reasons = [
  {
    title: 'Verified & Trusted Professionals',
    description: 'All legal experts on our platform are thoroughly vetted and verified. Work with confidence knowing you have access to qualified professionals.',
  },
  {
    title: 'Affordable & Transparent Pricing',
    description: 'No hidden fees. Know exactly what you\'re paying for. Our pricing is designed to be accessible to everyone.',
  },
  {
    title: 'Secure & Private',
    description: 'Your information is encrypted and secure. We respect attorney-client confidentiality and data privacy.',
  },
  {
    title: 'Fast & Convenient',
    description: 'Connect with experts online in minutes. No need for expensive office visits. Get legal help on your schedule.',
  },
  {
    title: 'Expert Support & Guidance',
    description: 'Our customer support team is here to help. We guide you through every step of your legal journey.',
  },
  {
    title: 'Educational Resources',
    description: 'Learn about your rights and legal matters. We provide free guides, articles, and tutorials.',
  },
];
