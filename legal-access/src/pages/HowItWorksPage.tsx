import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "STEP ONE",
      heading: "Get in Touch",
      description: "Contact us through our WhatsApp chat, web form or our toll free number, stating your full contact information, the service you would like to be provided and a request for a quote from our expert consultants.",
      details: [
        "Reach out intelligently via WhatsApp, our secure Web Form, or directly via Phone.",
        "Provide high-level specifics regarding your immediate legal obstacles.",
        "Connect instantly with a verified Legal Access consultant to assess your needs."
      ],
      image: "https://cdn.builder.io/api/v1/image/assets%2Faccd0441ab8d45cc89d6a61e3ebfc021%2Fccd40e8dc2f6493abf5a511899c7e74a?format=webp&width=800&height=1200",
      imageAlt: "Professional legal consultation meeting",
      reverse: false,
    },
    {
      num: "02",
      title: "STEP TWO",
      heading: "Review & Approve",
      description: "Receive and review our quote alongside the details of the legal service to be provided, approve the quote and pay through any of our listed reliable payment systems.",
      details: [
        "Receive a highly transparent, fully itemized quote with zero hidden fees.",
        "Review the structured legal timeline, milestones, and deliverables attached.",
        "Process your initiation payments securely via our trustworthy digital gateways."
      ],
      image: "https://cdn.builder.io/api/v1/image/assets%2Faccd0441ab8d45cc89d6a61e3ebfc021%2F2a4b26defd8f4f8bb8a8ac29a7918c59?format=webp&width=800&height=1200",
      imageAlt: "Contract review and approval process",
      reverse: true,
    },
    {
      num: "03",
      title: "STEP THREE",
      heading: "Execution & Delivery",
      description: "Receive a fast and reliable delivery of the legal advice and documents from our expert lawyers.",
      details: [
        "Domain-expert legal professionals immediately engage and execute your mandate.",
        "Receive consistent, proactive status updates throughout the lifecycle of the service.",
        "Final delivery of fully vetted, legally binding, and future-proof solutions."
      ],
      image: "https://cdn.builder.io/api/v1/image/assets%2Faccd0441ab8d45cc89d6a61e3ebfc021%2Fbf0af63ab2b745dda42975a371829c9c?format=webp&width=800&height=1200",
      imageAlt: "Professional handshake closing the deal",
      reverse: false,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-primary via-primary-darker to-primary-darker py-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight"
          >
              How It Works
          </motion.h1>
          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed"
          >
              Getting expert legal support has never been more straightforward. We've streamlined our complex ecosystem into an actionable three-step protocol.
          </motion.p>
        </div>
      </div>

      {/* Zig-Zag Flow Section */}
      <Section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-24 lg:gap-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${step.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}
              >
                {/* Image Box Side */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden shadow-2xl group"
                  >
                    {/* Image Container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg">
                      <span className="text-2xl font-black text-primary">{step.num}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Text Content Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-primary font-black tracking-[0.15em] text-xs md:text-sm mb-4 uppercase"
                  >
                    {step.title}
                  </motion.span>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight"
                  >
                    {step.heading}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-lg text-gray-700 leading-relaxed font-medium mb-8"
                  >
                    {step.description}
                  </motion.p>

                  {/* Enhanced Details List */}
                  <ul className="space-y-4 text-left w-full">
                    {step.details.map((detail, dIndex) => (
                      <motion.li
                        key={dIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + dIndex * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-1 bg-primary/15 p-1.5 rounded-full flex-shrink-0">
                          <Check className="w-4 h-4 text-primary font-bold" />
                        </div>
                        <span className="text-gray-700 font-medium leading-relaxed">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-medium">
            Take the first step toward resolving your legal needs today
          </p>
          <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-10 py-4 bg-white text-primary font-black text-lg rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform duration-300"
          >
              Contact Us Now
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
