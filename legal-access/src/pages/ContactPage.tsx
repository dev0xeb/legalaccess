import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { MapPin, CheckCircle } from 'lucide-react';
import { mailIcon, phoneIcon, whatsappIcon } from '../assets/icons/icons';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

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

export function ContactPage() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Contact form submitted:', data);
      setSubmitSuccess(true);
      reset();
      // Reset success state after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch {
      alert('An error occurred. Please try again.');
    }
  };

  const whatsappNumber = '+234905975147';
  const whatsappMessage = 'Hello! I need assistance with Legal Access services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Section className="bg-[#1e0a3c] text-white py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-white text-opacity-95 max-w-2xl leading-relaxed">
            We're here to help. Reach out to us using any of the methods below, and we'll get back to you as soon as possible.
          </p>
        </motion.div>
      </Section>

      {/* Contact Information Cards */}
      <Section className="bg-white">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Email Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100"
            whileHover={{ translateY: -8 }}
          >
            <motion.div
              className="flex justify-center mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <img src={mailIcon} alt="Mail" className="w-12 h-12" />
            </motion.div>
            <h3 className="text-xl font-bold text-primary-dark mb-4">Email</h3>
            <a
              href="mailto:info@legalaccess.com"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              info@legalaccess.com
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100"
            whileHover={{ translateY: -8 }}
          >
            <motion.div
              className="flex justify-center mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <img src={phoneIcon} alt="Phone" className="w-12 h-12" />
            </motion.div>
            <h3 className="text-xl font-bold text-primary-dark mb-4">Phone</h3>
            <a
              href="tel:+234905975147"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              +234 (0) 905 975 1474
            </a>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center border border-green-100"
            whileHover={{ translateY: -8 }}
          >
            <motion.div
              className="flex justify-center mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12" />
            </motion.div>
            <h3 className="text-xl font-bold text-primary-dark mb-6">WhatsApp</h3>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-accent-green text-white rounded-full hover:bg-green-700 transition-all font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Office Address Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-primary-light/10 to-primary/5 rounded-2xl p-8 md:p-12 mb-16 border border-primary-light/20"
        >
          <div className="flex items-start gap-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <MapPin className="text-primary flex-shrink-0" size={32} />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary-dark mb-4">
                Office Address
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                <span className="font-semibold">Legal Access</span><br />
                Lagos, Nigeria
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <p className="font-semibold text-primary-dark mb-3">Business Hours:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 2:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-gradient-to-br from-blue-100 to-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-4 text-center">
            Send us a Message
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
          </p>

          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-12 text-center border-2 border-accent-green"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10, delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <div className="w-16 h-16 bg-accent-green text-white rounded-full flex items-center justify-center">
                  <CheckCircle size={40} />
                </div>
              </motion.div>
              <h3 className="text-2xl font-bold text-primary-dark mb-3">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-700 mb-6">
                Thank you for reaching out. We've received your message and will get back to you shortly.
              </p>
              <motion.button
                onClick={() => setSubmitSuccess(false)}
                className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Another Message
              </motion.button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100"
            >
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name
                  </label>
                  <input
                    {...register('fullName')}
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-2">{errors.fullName.message}</p>
                  )}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
                  )}
                </motion.div>
              </div>

              {/* Phone */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                  Phone Number
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+234 (0)1234567890"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>
                )}
              </motion.div>

              {/* Subject */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                  Subject
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="What is this regarding?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-2">{errors.subject.message}</p>
                )}
              </motion.div>

              {/* Message */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
                )}
              </motion.div>

              {/* Form Actions */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  variant="outline"
                  className={isSubmitting ? '' : 'text-black border-black hover:bg-black hover:text-white'}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => reset()}
                >
                  Clear Form
                </Button>
              </motion.div>
            </motion.form>
          )}
        </motion.div>
      </Section>
    </div>
  );
}
