import { Section } from '../components/Section';
import { motion } from 'framer-motion';

export function PackagesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Section className="py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-dark">
                        Legal Retention Plans
                    </h1>
                    <p className="text-xl text-gray-600 mb-12">
                        Comprehensive packages tailored to your needs. Detailed pricing and options coming shortly.
                    </p>

                    <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-400">Packages Loading...</h2>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}
