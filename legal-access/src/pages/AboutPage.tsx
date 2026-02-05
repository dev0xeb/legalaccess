import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { LinkButton } from '../components/Button';
import { Shield, User, BookOpen } from 'lucide-react';

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
      <Section className="bg-gradient-to-r from-primary-darker via-primary-dark to-primary text-white py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Democratizing Access to Justice
          </h1>
          <div className="space-y-6 max-w-4xl">
            <div>
              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                To democratize access to justice in Nigeria by leveraging technology to seamlessly connect individuals and businesses with qualified legal professionals, fostering a transparent, efficient, and equitable legal ecosystem.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                To be the leading and most trusted digital gateway for legal services in Nigeria, empowering every Nigerian to confidently navigate legal challenges and promoting a just and informed society.
              </p>
            </div>
          </div>
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
          <h2 className="text-3xl md:text-5xl font-bold text-primary-darker mb-4">
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
                className="bg-primary-darker rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-white/10"
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
                  <LinkButton href={s.cta.href} className="w-full text-center font-bold shadow-md" variant="primary" size="md">
                    {s.cta.text}
                  </LinkButton>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>



      {/* Areas of Expertise Section */}
      <Section className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-darker mb-4">
            Areas of Expertise
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Corporate & Commercial Law',
              'Family & Matrimonial Law',
              'Real Estate & Property Law',
              'Intellectual Property Rights',
              'Criminal Defense & Fundamental Rights',
              'Labor & Employment Law',
              'Taxation & Regulatory Compliance',
            ].map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-lg text-gray-700 font-medium">{area}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xl text-primary-dark mt-12 font-semibold italic">
            …and lots more. Lex Access is there for you.
          </p>
        </div>
      </Section>
      <Section className="bg-primary-darker text-white text-center py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-6 leading-tight !text-white">
            Ready to Get Started?
          </h3>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
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
              <LinkButton href="/contact" variant="primary" size="md">
                Contact Us
              </LinkButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>
    </div >
  );
}
