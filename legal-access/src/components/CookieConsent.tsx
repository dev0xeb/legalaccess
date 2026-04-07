import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (accept: boolean) => {
    localStorage.setItem('cookie-consent', accept ? 'accepted' : 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:w-96 z-[100]"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-2xl shrink-0">
                <ShieldCheck className="text-primary h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-primary-darker mb-1">
                  Privacy Choice
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We use cookies to enhance your experience and analyze site traffic. Would you like to accept them?
                </p>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Dismiss"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleConsent(true)}
                className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                Accept All
              </button>
              <button
                onClick={() => handleConsent(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-2xl transition-all active:scale-95 border border-gray-200"
              >
                Decline
              </button>
            </div>
            
            <p className="text-[10px] text-gray-400 mt-4 text-center">
              Your preference will be remembered for your next visit.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
