import { Linkedin, Twitter, Instagram } from 'lucide-react';
import MainLogo from '../assets/Main_Logo-removebg-preview.png';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default-key');
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const templateParams = {
        to_email: 'legalaccesshq@gmail.com',
        from_email: email,
        subject: 'New Newsletter Subscription',
        message: `New newsletter subscription request from: ${email}`,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default-service',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'default-template',
        templateParams
      );

      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Newsletter error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <footer id="footer" className="bg-neutral-dark text-white">
      {/* Newsletter Section */}
      <div className="py-16 bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side text */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Newsletter
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                Subscribe to our newsletter and get our monthly perspective on happenings in the legal practitioners sphere.
              </p>
            </div>

            {/* Right side form */}
            <div className="w-full xl:pl-16">
              <form className="flex flex-col sm:flex-row gap-4 w-full" onSubmit={handleNewsletterSubmit}>
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full px-6 py-4 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-500 transition-all border border-gray-700 focus:border-primary"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-all whitespace-nowrap disabled:opacity-50"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {status === 'success' && (
                <p className="text-accent-green text-sm mt-4 text-center sm:text-left">
                  Thank you for subscribing!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-sm mt-4 text-center sm:text-left">
                  An error occurred. Please try again.
                </p>
              )}
              <p className="text-gray-500 text-sm mt-4 text-center sm:text-left">
                We care about your data. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={MainLogo} alt="Legal Access Logo" className="h-15 w-15 object-contain" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Legal Access is your digital gateway to simplified legal solutions and expert guidance. We connect individuals, businesses, and law students with verified professionals and essential resources.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/legal-access-hq/" className="text-gray-300 hover:text-white text-sm">LinkedIn</a></li>
              <li><a href="https://x.com/Legalaccess_HQ" className="text-gray-300 hover:text-white text-sm">Twitter</a></li>
              <li><a href="https://vm.tiktok.com/ZS9ew6sbQqsak-XOmrS/" className="text-gray-300 hover:text-white text-sm">TikTok</a></li>
              <li><a href="https://www.instagram.com/lex_access?igsh=MXh0dGdnc3gyNnh2cA==" className="text-gray-300 hover:text-white text-sm">Instagram</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-300">
                Email: <a href="mailto:legalaccesshq@gmail.com" className="text-gray-300 hover:text-white">legalaccesshq@gmail.com</a>
              </p>
              <p className="text-gray-300">
                Phone: <span className="text-gray-300">+234 805 282 9096</span>
              </p>
              <p className="text-gray-300">
                Address: <span className="text-gray-300">Lagos, Nigeria</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 Legal Access. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/legal-access-hq/" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/Legalaccess_HQ" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://vm.tiktok.com/ZS9ew6sbQqsak-XOmrS/" className="text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transition-colors"
              >
                <path d="M16 1.5h-3.5V16c0 1.5-1.5 3-3 3s-3-.5-3-3c0-2 1.899-3.339 3.5-3V9.5c-6.12 0-7 5-7 6.5s.977 6.5 6.5 6.5c4.522 0 6.5-3.5 6.5-6v-8c1.146 1.018 2.922 1.357 5 1.5V6.5c-3.017 0-5-2.654-5-5Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/lex_access?igsh=MXh0dGdnc3gyNnh2cA==" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
