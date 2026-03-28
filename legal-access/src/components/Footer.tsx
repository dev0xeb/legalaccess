import { Linkedin, Twitter, Instagram } from 'lucide-react';
import TikTokLogo from '../assets/streamline-logos--tiktok-logo.svg';
import MainLogo from '../assets/Main_Logo-removebg-preview.png';

export function Footer() {
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
              <form className="flex flex-col sm:flex-row gap-4 w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email address..."
                    className="w-full px-6 py-4 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-500 transition-all border border-gray-700 focus:border-primary"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
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
