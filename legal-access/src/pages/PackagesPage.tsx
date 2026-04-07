import { Section, SEO } from '../components';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function PackagesPage() {
    const pillars = [
        {
            title: "Legal Consulting & Retainers",
            subtitle: "The SME Play",
            features: [
                "Business registration & legal setup",
                "Tax Act compliance",
                "Contract drafting & SOP implementation",
                "Strategic Business Support",
                "Predictive Legal Audits",
                "Industry-Wide Advisory",
                "Round-the-Clock Support"
            ],
            link: "https://docs.google.com/forms/d/e/1FAIpQLSdgxUK4OwQzaecMbM_NXBivzmrQChzorIyk2dfUgIOVfP-bXw/viewform"
        },
        {
            title: "CONNECT A LAWYER",
            subtitle: "Lawyers to Clients",
            features: [
                "Verified professional matching",
                "Escrow-protected financial settlements",
                "Litigation and corporate advisory",
                "Certified Legal professional access"
            ],
            link: "https://docs.google.com/forms/d/e/1FAIpQLSdgxUK4OwQzaecMbM_NXBivzmrQChzorIyk2dfUgIOVfP-bXw/viewform"
        },
        {
            title: "LEGAL TUTORING",
            subtitle: "Tutor to Student",
            features: [
                "Academic coaching for Law Faculty and Law School students",
                "Career placement, mentorship, and internship matching",
                "Professional bar exam readiness and structured mastery",
                "Round-the-Clock Support"
            ],
            link: "https://docs.google.com/forms/d/e/1FAIpQLSfIiPrZ0ZNKnjLpgsotUEeKKPwEJmXp4fLEsQdvLUPAM62oLw/viewform"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <SEO 
                title="Service Packages | Transparent Legal Solutions"
                description="Explore our tailored legal retention plans and consulting packages designed for individuals, SMEs, and law students."
            />
            {/* Minimalist Hero Section */}
            <div className="bg-primary-darker py-20 border-b border-primary/20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.h1 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/80 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Comprehensive pillars strategically designed to meet your legal, professional, and academic goals.
                    </motion.p>
                </div>
            </div>

            {/* Elegant Service Cards */}
            <Section className="-mt-8 relative z-10 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-100 overflow-hidden group"
                        >
                            {/* Unified Card Header */}
                            <div className="p-8 pb-0 flex flex-col items-center text-center">
                                <span className="text-[11px] font-bold tracking-widest text-primary uppercase mb-3">
                                    {pillar.subtitle}
                                </span>
                                {/* Fixed height guarantees strict alignment of the horizontal line across all cards */}
                                <div className="h-[85px] w-full flex items-center justify-center">
                                    {/* Using a div and strict pixel sizing to prevent any global <h2> styles from making the text massive */}
                                    <div className="text-[18px] md:text-[22px] font-bold text-gray-900 leading-snug">
                                        {pillar.title}
                                    </div>
                                </div>
                            </div>
                            
                            <hr className="w-16 border-t-2 border-primary/20 mx-auto my-6" />

                            {/* Card Body & Features */}
                            <div className="px-8 pb-8 flex-1 flex flex-col">
                                <ul className="space-y-4 mb-10 flex-1">
                                    {pillar.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start">
                                            <CheckCircle2 className="w-5 h-5 text-accent-green mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-[14px] text-gray-700 leading-relaxed font-medium">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="mt-auto">
                                    <a 
                                        href={pillar.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-4 rounded-xl bg-gray-50 text-primary font-bold text-center border border-gray-200 hover:bg-gray-100 hover:shadow-sm transition-all flex items-center justify-center gap-2 group/btn"
                                    >
                                        Get Started 
                                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
