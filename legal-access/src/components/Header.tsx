import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'How it works', href: '#process' },
    { label: 'Resourcea', href: '#' },
    { label: 'About Us', href: '#footer' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1">
            <img
              src={new URL('../assets/Logo.png', import.meta.url).href}
              alt="Legal Access"
              className="w-100 h-100 rounded-lg object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-gray-700 hover:text-primary font-medium focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <a
            href="#cta"
            className="hidden md:inline-block px-6 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-full transition-colors"
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <a
              href="#cta"
              className="block px-4 py-3 bg-primary text-white font-medium mt-2"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
