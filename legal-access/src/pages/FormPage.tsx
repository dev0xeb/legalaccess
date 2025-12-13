import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const categoryTitles: Record<string, string> = {
  'legal-professionals': 'Legal Professionals',
  'tutors': 'Tutors',
  'students': 'Students',
  'individuals-businesses': 'For Individuals & Businesses',
};

const categoryDescriptions: Record<string, string> = {
  'legal-professionals': 'Join our network of verified legal professionals and expand your reach.',
  'tutors': 'Share your expertise with law students and professionals seeking guidance.',
  'students': 'Access expert tutoring and learning resources to enhance your legal knowledge.',
  'individuals-businesses': 'Get professional legal support tailored to your needs.',
};

export function FormPage() {
  const { category = 'individuals-businesses' } = useParams<{ category: string }>();
  const navigate = useNavigate();
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
      console.log('Form submitted:', { category, ...data });
      alert('Thank you! We will contact you soon.');
      reset();
      navigate('/');
    } catch {
      alert('An error occurred. Please try again.');
    }
  };

  const title = categoryTitles[category] || 'Contact Us';
  const description = categoryDescriptions[category] || 'Get in touch with us.';

  return (
    <div className="min-h-screen">
      <Section className="bg-gradient-to-r from-gray-50 to-white pt-20 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {description}
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
          >
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                {...register('fullName')}
                type="text"
                id="fullName"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your full name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+234 (0)1234567890"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>
              <input
                {...register('subject')}
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="What is this regarding?"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell us more about your request..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className={isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => navigate('/')}
              >
                Cancel
              </Button>
            </div>
          </motion.form>
        </div>
      </Section>
    </div>
  );
}
