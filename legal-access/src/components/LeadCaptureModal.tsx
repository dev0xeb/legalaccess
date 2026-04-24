import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Check if user has already seen or closed the modal
    const signupComplete = localStorage.getItem('newsletterSubscribed');
    const lastSeen = localStorage.getItem('leadCaptureLastSeen');
    
    // Only show if not subscribed and not seen in the last 24 hours
    const oneDay = 24 * 60 * 60 * 1000;
    const isRecent = lastSeen && (Date.now() - parseInt(lastSeen) < oneDay);

    if (!signupComplete && !isRecent) {
      // Show modal after 15 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('leadCaptureLastSeen', Date.now().toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Using the user-requested mailto: format
    // This is the most direct way to ensure the email is sent to legalaccesshq@gmail.com
    const mailtoSubject = encodeURIComponent(`🚀 New Lead Captured: ${name || email}`);
    const mailtoBody = encodeURIComponent(
      `Hello Legal Access Team,\n\nI would like to subscribe to your legal updates and resources.\n\nDetails:\nName: ${name || 'Not provided'}\nEmail: ${email}\n\nThank you!`
    );

    window.location.href = `mailto:legalaccesshq@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setStatus('success');
    localStorage.setItem('newsletterSubscribed', 'true');
    
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full relative"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark" />
            
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            <div className="p-8 md:p-10">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-accent-green" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">You're In!</h2>
                  <p className="text-gray-600 text-lg">
                    Thank you for connecting with Legal Access. Expect exclusive insights soon.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Join Our Network</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-primary-darker mb-4 leading-tight">
                    Stay Ahead of the Curve
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Get monthly legal perspectives, exclusive resources, and updates delivered straight to your inbox.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400"
                        disabled={status === 'loading'}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400"
                        disabled={status === 'loading'}
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Get Exclusive Access'
                      )}
                    </button>
                  </form>

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-500 mt-4 text-sm justify-center"
                    >
                      <AlertCircle className="w-4 h-4" />
                      Wait, something went wrong. Please try again.
                    </motion.div>
                  )}

                  <p className="text-center text-gray-400 text-xs mt-6">
                    No spam. Just value. Unsubscribe anytime.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
