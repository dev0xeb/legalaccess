import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, Bell, Scale } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export function ArbitrationModal() {
  const { isOpen, modalType, closeModal } = useModal();

  if (modalType !== 'arbitration') {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl p-10 w-full max-w-lg shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-primary to-primary-dark opacity-5"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent-orange to-transparent opacity-10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent-green to-transparent opacity-10 rounded-full -ml-24 -mb-24"></div>

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors z-10 bg-gray-100 rounded-full p-2 hover:bg-gray-200"
              aria-label="Close modal"
            >
              <img src={new URL('../assets/iconoir--cancel.svg', import.meta.url).href} alt="Close" className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="text-center relative z-10">
              {/* Icon — mature, minimal styling */}
              <motion.div
                initial={{ scale: 0.9, rotate: -8 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.1, type: 'spring', damping: 16, stiffness: 200 }}
                className="mb-6 flex justify-center"
              >
                <div className="relative">
                  <div className="relative bg-white rounded-full p-5 shadow-md">
                    <motion.div
                      animate={{ rotate: [0, -4, 4, -4, 0] }}
                      transition={{ delay: 0.4, duration: 1.2, ease: 'easeInOut' }}
                      className="flex items-center justify-center"
                    >
                      <Scale size={44} className="text-primary" />
                    </motion.div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent-orange rounded-full p-2 shadow-sm">
                    <Sparkles size={16} className="text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-semibold text-primary-dark mb-2"
              >
                Digital Dispute Resolution
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-5 border border-gray-200"
              >
                <Clock size={14} className="text-gray-600" />
                <span>Online · Efficient · Binding</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-700 text-base leading-relaxed mb-6"
              >
                A secure, streamlined arbitration platform that connects disputing parties with verified arbitrators. Fast resolution, predictable costs, and enforceable outcomes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gray-50 rounded-xl p-5 mb-8 border border-gray-100"
              >
                <div className="flex items-start gap-3 text-left">
                  <Bell size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Notify me when available</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Sign up and we'll email you a short launch briefing and early access details.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.995 }}
                onClick={closeModal}
                className="w-full px-6 py-3 bg-primary-dark text-white font-semibold rounded-lg transition-shadow duration-200 shadow-sm hover:shadow-md"
              >
                Notify Me
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
