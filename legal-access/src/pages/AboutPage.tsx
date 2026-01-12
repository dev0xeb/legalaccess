import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { LinkButton } from '../components/Button';
import { Shield, User, BookOpen, Zap, Target, Heart } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

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

export function AboutPage() {
  const segments = [
    {
      id: 'sme',
      icon: Shield,
      title: 'SMEs & Businesses',
      lead: 'Subscription-based legal support for individuals and small businesses.',
      bullets: ['Business registration', 'Compliance & contracts', 'Ongoing legal protection'],
      cta: { text: 'Get Legal Protection', href: '/form/legal-protection' },
    },
    {
      id: 'individuals',
      icon: User,
      title: 'Individuals',
      lead: 'Practical, affordable legal help for everyday matters and disputes.',
      bullets: ['Contract reviews', 'Dispute resolution', 'Family & personal law'],
      cta: { text: 'Get Help', href: '/form/client' },
    },
    {
      id: 'students',
      icon: BookOpen,
      title: 'Law Students',
      lead: 'Bar exam prep, tutoring and practical training from experienced tutors.',
      bullets: ['Bar exam coaching', 'One-on-one tutoring', 'Practical clinics and mentorship'],
      cta: { text: 'Find a Tutor', href: '/form/tutors' },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50">
      {/* Hero / Narrative Section */}
      <Section className="bg-gradient-to-r from-primary-dark via-primary to-primary-light text-primary-dark py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Bridging the Gap Between Law and the Public
          </h1>
          <p className="text-lg md:text-xl text-primary-dark text-opacity-95 max-w-3xl leading-relaxed">
            We simplify legal access by connecting people, businesses, and students with verified professionals, practical resources, and affordable solutions — all in one trusted platform.
          </p>
        </motion.div>
      </Section>

      {/* Who We Serve Section */}
      <Section className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored solutions designed specifically for SMEs, individuals, and law students.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {segments.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                variants={itemVariants}
                className="bg-[#281e5d] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
                whileHover={{ translateY: -8 }}
              >
                {/* Icon Header */}
                <motion.div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-light to-primary flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {s.title}
                </h3>

                {/* Lead Description */}
                <p className="text-gray-200 mb-6 flex-1 leading-relaxed text-lg">
                  {s.lead}
                </p>

                {/* Features List */}
                <ul className="mb-8 space-y-3">
                  {s.bullets.map((b) => (
                    <motion.li
                      key={b}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="text-accent-green font-bold text-xl mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-gray-200 text-base">{b}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-auto w-full">
                  <LinkButton href={s.cta.href} className="w-full text-center !text-white border-2 border-white bg-transparent" variant="primary" size="md">
                    {s.cta.text}
                  </LinkButton>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* Closing CTA Section */}
      <Section className="bg-gradient-to-r from-primary-dark via-primary to-primary-light text-[#281e5d] text-center py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Get Started?
          </h3>
          <p className="text-lg md:text-xl text-[#281e5d] text-opacity-95 max-w-2xl mx-auto mb-10 leading-relaxed">
            Choose the category that best fits your need and follow the quick signup to connect with our experts.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <LinkButton href="/services" size="md">
                Explore Services
              </LinkButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <LinkButton href="/contact" variant="outline" size="md">
                Contact Us
              </LinkButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}
