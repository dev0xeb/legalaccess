import { Linkedin, Twitter, Instagram } from 'lucide-react';
import TikTokLogo from '../assets/streamline-logos--tiktok-logo.svg';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer id="footer" className="bg-neutral-dark text-white">
      {/* Newsletter Section */}
      <div className="relative overflow-hidden py-16" style={{ backgroundColor: '#1e0a3c' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-white"
          >
            Stop Guessing. Start Protecting.
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white mb-8 leading-relaxed"
          >
            Most legal advice is buried in 50-page documents. We translate the complex stuff into one 3-minute email every Tuesday. No billable hours, no "legalese," just the answers you actually need.
          </motion.p>

          {/* Three Benefit Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all"
            >
              <h4 className="text-white font-bold text-lg mb-2">Avoid Costly Mistakes</h4>
              <p className="text-white/80 text-sm">Learn the red flags in contracts before you sign them.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all"
            >
              <h4 className="text-white font-bold text-lg mb-2">Legal DIY</h4>
              <p className="text-white/80 text-sm">Step-by-step guides for filing your own trademarks or NDAs.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all"
            >
              <h4 className="text-white font-bold text-lg mb-2">Vetted Experts</h4>
              <p className="text-white/80 text-sm">Access to a network of lawyers who won't charge you "big firm" prices.</p>
            </motion.div>
          </motion.div>

          {/* Subscription Form / Sign Up Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 max-w-lg"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdgxUK4OwQzaecMbM_NXBivzmrQChzorIyk2dfUgIOVfP-bXw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Sign up as Client
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScsDyhjg1iQSeQ3qzhpv5aCW6GODOA01yU01-uoTSzv4ulDTQ/viewform?fbzx=819630271247203466"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border-2 border-white/30 text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all hover:scale-105"
            >
              Sign up as Lawyer
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-lg">Lex Access</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lex Access is your digital gateway to simplified legal solutions and expert guidance. We connect individuals, businesses, and law students with verified professionals and essential resources.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/legal-access-hq/" className="text-gray-300 hover:text-white text-sm">LinkedIn</a></li>
              <li><a href="https://x.com/legalaccess_hq?s=21" className="text-gray-300 hover:text-white text-sm">Twitter</a></li>
              <li><a href="https://www.tiktok.com/@legalaccess_hq?_t=ZM-8y6Fyo7Kunt&_r=1" className="text-gray-300 hover:text-white text-sm">TikTok</a></li>
              <li><a href="https://www.instagram.com/legalaccess_hq/?igsh=MW5wazd5Y2h0MzI4Mg%3D%3D&utm_source=qr#" className="text-gray-300 hover:text-white text-sm">Instagram</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-300">
                Email: <a href="mailto:info@legalaccess.com" className="text-gray-300 hover:text-white">info@legalaccess.com</a>
              </p>
              <p className="text-gray-300">
                Phone: <span className="text-gray-300">+234 905 975 1474</span>
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
            <a href="https://x.com/legalaccess_hq?s=21" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://www.tiktok.com/@legalaccess_hq?_t=ZM-8y6Fyo7Kunt&_r=1" className="inline-flex items-center justify-center text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
              <img src={TikTokLogo} alt="TikTok" className="w-5 h-5 grayscale opacity-70 group-hover:grayscale-0" />
            </a>
            <a href="https://www.instagram.com/legalaccess_hq/?igsh=MW5wazd5Y2h0MzI4Mg%3D%3D&utm_source=qr#" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
