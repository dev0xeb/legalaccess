import { Linkedin, Twitter, Instagram } from 'lucide-react';
import TikTokLogo from '../assets/streamline-logos--tiktok-logo.svg';

export function Footer() {
  return (
    <footer id="footer" className="bg-neutral-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <img
                src={new URL('../assets/Logo.png', import.meta.url).href}
                alt="Legal Access"
                className="w-20 h-20 rounded-lg object-contain"
              /> */}
              <span className="font-bold text-lg">Legal Access</span>
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
