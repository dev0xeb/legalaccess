import { motion } from 'framer-motion';
import { Section, SEO } from '../components';
import { Mail, Bell, Scale, Handshake, Sparkles, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default-key');
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      const templateParams = {
        to_email: 'legalaccesshq@gmail.com',
        from_email: email,
        subject: 'New Pro-Bono Launch Notification Request',
        message: `New launch notification request from: ${email}`,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default-service',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'default-template',
        templateParams
      );

      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Pro Bono | Access to Community Justice"
        description="Legal Access is committed to social impact. Join our pro bono initiatives connecting underserved communities with legal professionals."
      />
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary via-primary-darker to-primary-darker text-white py-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green/20 text-accent-green font-bold rounded-full text-sm mb-6">
              <Rocket size={18} />
              Coming Soon
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight"
          >
            Pro Bono & Community Justice
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed mb-8"
          >
            We're building something extraordinary to connect deserving communities with legal expertise. This platform will transform access to justice for those who need it most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-block px-1 py-1 bg-gradient-to-r from-accent-orange to-accent-green rounded-full">
              <div className="px-6 py-2 bg-primary-darker rounded-full">
                <p className="text-white font-bold text-sm md:text-base">
                  Expected Launch: Coming Soon
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Features Preview Section */}
      <Section className="py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            What to Expect
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A comprehensive platform dedicated to closing the justice gap through pro bono services
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Find a Pro Bono Lawyer',
              description: 'Connect with experienced legal professionals ready to support your case for free.',
              icon: Scale,
              color: 'from-blue-50 to-blue-100',
              borderColor: 'border-blue-200',
              iconColor: 'text-blue-600',
            },
            {
              title: 'Volunteer Your Expertise',
              description: 'Make a meaningful impact by offering your legal expertise to underserved communities.',
              icon: Handshake,
              color: 'from-green-50 to-green-100',
              borderColor: 'border-green-200',
              iconColor: 'text-green-600',
            },
            {
              title: 'Justice for All',
              description: 'Access quality legal guidance regardless of financial constraints or background.',
              icon: Sparkles,
              color: 'from-purple-50 to-purple-100',
              borderColor: 'border-purple-200',
              iconColor: 'text-purple-600',
            },
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className={`bg-gradient-to-br ${feature.color} rounded-2xl p-8 border ${feature.borderColor} shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="mb-4">
                  <IconComponent size={48} className={`${feature.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Newsletter Signup Section */}
      <Section className="bg-gradient-to-r from-primary/10 via-primary-darker/5 to-primary/10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-8 flex justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Bell className="w-16 h-16 text-primary" />
            </motion.div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Get Notified When We Launch
          </h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Be among the first to know when this groundbreaking platform goes live. Subscribe below to receive exclusive updates.
          </p>

          <motion.form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
              disabled={status === 'loading'}
            />
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white font-black rounded-lg hover:bg-primary-dark transition-all shadow-md hover:shadow-lg whitespace-nowrap disabled:opacity-50"
            >
              {status === 'loading' ? 'Submitting...' : 'Notify Me'}
            </motion.button>
          </motion.form>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 p-4 bg-accent-green/20 border border-accent-green rounded-lg text-center"
            >
              <p className="text-accent-green font-bold flex items-center justify-center gap-2">
                <Mail size={20} />
                Thanks! We'll notify you soon.
              </p>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-center"
            >
              <p className="text-red-600 font-bold flex items-center justify-center gap-2">
                An error occurred. Please try again.
              </p>
            </motion.div>
          )}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            In the Meantime
          </h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Need legal assistance today? Our other services are available right now to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="block w-full px-8 py-4 bg-white text-primary font-black rounded-xl hover:bg-gray-100 transition-all shadow-xl"
              >
                Contact Us
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                to="/services"
                className="block w-full px-8 py-4 bg-primary/80 text-white font-black rounded-xl hover:bg-primary transition-all shadow-xl border-2 border-white/30"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
