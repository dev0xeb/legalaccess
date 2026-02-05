import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { Section } from '../components/Section';
import { useModal } from '../context/ModalContext';

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
            <h1 className="mb-6 leading-tight text-primary-darker">
              Justice Simplified. Access Unlocked.
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-700">
              Your trusted digital gateway to legal expertise, protection, and education in Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="inline-block px-8 py-4 text-lg font-bold rounded-full transition-all bg-primary text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5">
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
      <Section className="bg-primary-darker text-white">
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

      {/* Our Services Section */}
      <Section id="services" className="bg-white">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="mb-4 text-primary-darker">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three powerful solutions designed to meet your legal needs
          </p>
        </motion.div>

        {/* 3-Column Grid (Desktop) / Carousel (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Legal Retention Plans Section */}
      <Section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-dark">
              Legal Retention Plans
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Secure ongoing legal support for your personal or business needs with our comprehensive retention packages.
            </p>
            <a
              href="/packages"
              className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View Packages
            </a>
          </motion.div>
        </div>

      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="mb-4 text-primary-darker">
            Why Choose Lex Access?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the trusted choice for legal solutions in Nigeria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 overflow-hidden hover:shadow-lg transition-shadow min-h-96"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200 to-transparent rounded-full -mr-16 -mt-16 opacity-30"></div>
              <div className="absolute right-4 md:-right-8 bottom-0 z-0 pointer-events-none">
                <span className="transform translate-x-6 md:translate-x-12 font-extrabold text-[140px] md:text-[220px] leading-none text-primary-light opacity-20 select-none">
                  {index + 1}
                </span>
              </div>
              <div className="relative z-10 text-left">
                <h3 className="mb-3 text-primary-darker">
                  {benefit.title}
                </h3>
                <p className="text-gray-800 text-base leading-relaxed max-w-xs">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <motion.h2
              {...fadeInUp}
              className="mb-12 text-primary-darker"
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
                    <h3 className="mb-2 text-primary-darker">
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
                onClick={() => openModal()}
                className="w-full md:w-auto px-10 py-4 text-lg font-bold rounded-full transition-all bg-primary text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
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

      {/* Pro Bono Section */}
      <Section className="bg-gradient-to-br from-blue-100 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent-orange text-white text-sm font-bold rounded-full mb-4">
              Community Impact
            </span>
            <h2 className="mb-6 leading-tight">
              Pro Bono & Community Justice
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Lex Access is committed to social impact. We bridge the gap for those in underserved communities by connecting them with dedicated legal professionals willing to offer their expertise for the public good. Justice shouldn't be a luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://forms.google.com/pro-bono-community-justice"
                className="px-8 py-3 bg-primary text-white font-bold rounded-lg text-center hover:bg-primary-dark transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find a Pro Bono Lawyer
              </a>
              <a
                href="https://forms.google.com/pro-bono-community-justice"
                className="px-8 py-3 bg-primary text-white font-bold rounded-lg text-center hover:bg-primary-dark transition-all shadow-md hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Volunteer as a Lawyer
              </a>
            </div>
          </motion.div>

          {/* Online Arbitration Placeholder Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-md w-full text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-wider">
                Coming Soon
              </div>
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src={new URL('../assets/Gavel.png', import.meta.url).href} alt="Arbitration" className="w-10 h-10 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-gray-400 mb-3">Online Arbitration</h3>
              <p className="text-gray-400">
                A digital-first dispute resolution center. Resolve conflicts quickly and securely.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-gray-50">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="mb-4 text-primary-darker">
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
        className="text-white relative"
        style={{
          background: `linear-gradient(rgba(0, 38, 77, 0.8), rgba(0, 38, 77, 0.8)), url(${new URL('../assets/background.jpeg', import.meta.url).href})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 leading-tight !text-white">
              Ready to Transform Your Legal Experience?
            </h2>

            <p className="text-lg text-white leading-relaxed">
              Join Nigeria's leading platform for accessible and efficient legal solutions.
            </p>
          </motion.div>

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
              className="w-full text-center font-bold shadow-lg"
            >
              For Individuals & Businesses
            </Button>
            <Button
              onClick={() => openModal(['Legal Professionals', 'Tutors'])}
              variant="outline"
              size="lg"
              className="w-full text-center font-bold shadow-lg"
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
    title: 'Individuals',
    description: 'Practical, affordable legal help for everyday matters and disputes. Includes contract reviews, dispute resolution, and family & personal law.',
    image: new URL('../assets/LegalExpert.jpeg', import.meta.url).href,
    backText: 'Get comprehensive legal support with verified professionals. Access affordable protection plans tailored for individuals.',
    buttonText: 'Join as Client',
    buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdgxUK4OwQzaecMbM_NXBivzmrQChzorIyk2dfUgIOVfP-bXw/viewform',
  },
  {
    title: 'SMEs & Businesses',
    description: 'Subscription-based legal support for growing enterprises and entrepreneurs. Includes business registration, compliance, and ongoing legal protection.',
    image: new URL('../assets/Arbitration.jpeg', import.meta.url).href,
    backText: 'Get comprehensive legal support with verified professionals. Access affordable protection plans tailored for growing businesses.',
    buttonText: 'Join as Business',
    buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdgxUK4OwQzaecMbM_NXBivzmrQChzorIyk2dfUgIOVfP-bXw/viewform',
  },
  {
    title: 'Law Students',
    description: 'Bar exam prep, tutoring, and practical training from experienced legal minds.',
    image: new URL('../assets/Tutor.jpeg', import.meta.url).href,
    backText: 'As a Student: Master legal concepts with personalized guidance. Bridge the gap between theory and practice with expert tutors for academic excellence and bar exam success.',
    // "As a Student" prefix to match "Side B" request? Prompt said Side B: "As a Student". Side A "As a Tutor".
    // I will adjust the Title/Description for "As a Tutor" logic?
    // Prompt: Side A: "As a Tutor". Side B: "As a Student".
    // But the card title is "Law Students" or "Law Tutor Services"?
    // The prompt says "Law Students... Bar exam prep...".
    // Maybe the Front should say "As a Tutor" or "For Students"?
    // "Side A (Front): 'As a Tutor' (Content focused on guidance)."
    // "Side B (Back): 'As a Student' (Content focused on learning/outcomes)."
    // My current card Title is "Law Students".
    // I will try to match the prompt closely.
    // Front: Title "Law Students", Desc "Bar exam prep...".
    // Back: "As a Student..."
    // But where does "As a Tutor" go? Maybe that's for the PRO lesson?
    // Prompt: "Legal Services Flip-Cards: For the legal services section... Side A... Side B..."
    // Maybe this applies to ALL cards? "As a Tutor"/"As a Student" sounds specific to the education card.
    // I will put "As a Student" content on the back of the student card.
    buttonText: 'Join as Student',
    buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfIiPrZ0ZNKnjLpgsotUEeKKPwEJmXp4fLEsQdvLUPAM62oLw/viewform',
  },
];


const benefits = [
  {
    title: 'Verified Experts',
    description: 'Connect with thoroughly vetted and trusted legal professionals.',
  },
  {
    title: 'Affordable Protection',
    description: 'Gain peace of mind with cost-effective legal solutions and protection.',
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
