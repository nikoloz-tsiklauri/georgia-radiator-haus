import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'ge' as const, label: 'GE' },
    { code: 'en' as const, label: 'EN' },
    { code: 'de' as const, label: 'DE' },
  ];

  const navItems = [
    { key: 'nav.home', href: '#hero' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.products', href: '#products' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <span className="font-display text-xl md:text-2xl font-bold tracking-wider">
              RACING <span className="text-primary">GEORGIA</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="font-display text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-secondary rounded-md p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-1 text-xs font-display tracking-wide rounded transition-all ${
                    language === lang.code
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Phone CTA */}
            <a href="tel:+995555123456" className="hidden lg:flex items-center gap-2 text-primary">
              <Phone className="h-4 w-4" />
              <span className="font-display text-sm">+995 555 123 456</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-display text-lg tracking-wide text-foreground hover:text-primary transition-colors"
                >
                  {t(item.key)}
                </a>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-2 text-sm font-display tracking-wide rounded transition-all ${
                      language === lang.code
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              {/* Mobile Phone */}
              <a href="tel:+995555123456" className="flex items-center gap-2 text-primary pt-2">
                <Phone className="h-5 w-5" />
                <span className="font-display">+995 555 123 456</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
