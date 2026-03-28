import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { MessageSquareText, FileText, CheckCircle, Check } from 'lucide-react';

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
      icon: <MessageSquareText className="w-16 h-16 text-primary" />,
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
      icon: <FileText className="w-16 h-16 text-accent-orange" />,
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
      icon: <CheckCircle className="w-16 h-16 text-accent-green" />,
      reverse: false,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="bg-primary-darker py-20 border-b border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
          >
              How It Works
          </motion.h1>
          <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed"
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
                {/* Visual Box Side */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-[400px] aspect-square bg-gray-50 rounded-[3rem] flex items-center justify-center border border-gray-100 shadow-xl group hover:shadow-2xl transition-all duration-300">
                     {/* Decorative background circle */}
                     <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-[3rem] overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-gray-200/50 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                     </div>
                     
                     <div className="relative z-10 p-12 bg-white rounded-full shadow-lg border border-gray-50 group-hover:scale-110 transition-transform duration-500">
                        {step.icon}
                     </div>

                     {/* Watermark Number */}
                     <div className="absolute -bottom-8 -left-8 md:-left-12 text-[140px] md:text-[180px] font-black text-gray-900/5 leading-none select-none z-0 group-hover:-translate-y-4 transition-transform duration-500">
                        {step.num}
                     </div>
                  </div>
                </div>

                {/* Text Content Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                  <span className="text-primary font-black tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
                    {step.title}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                    {step.heading}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-8">
                    {step.description}
                  </p>
                  
                  {/* Enhanced Details Unordered List */}
                  <ul className="space-y-4 text-left inline-block md:block self-center md:self-auto w-full max-w-lg mx-auto md:mx-0">
                    {step.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-start">
                        <div className="mt-1 bg-primary/10 p-1.5 rounded-full mr-4 flex-shrink-0">
                          <Check className="w-4 h-4 text-primary font-bold" />
                        </div>
                        <span className="text-gray-700 font-medium leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final Call to Action Box - Reduced Padding & Size */}
      <div className="bg-gray-50 py-12 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Ready to get started?</h2>
              <a 
                  href="/contact" 
                  className="inline-block px-8 py-3 bg-primary text-white font-bold text-base md:text-lg rounded-xl hover:bg-primary-darker transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-300"
              >
                  Contact Us Now
              </a>
          </div>
      </div>
    </div>
  );
}
