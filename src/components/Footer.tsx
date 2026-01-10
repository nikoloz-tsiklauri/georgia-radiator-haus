import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              RACING <span className="text-primary">GEORGIA</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Official distributor of German RACING radiators in Georgia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm tracking-wider mb-4 text-muted-foreground">
              QUICK LINKS
            </h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-sm hover:text-primary transition-colors">
                {t('nav.about')}
              </a>
              <a href="#products" className="block text-sm hover:text-primary transition-colors">
                {t('nav.products')}
              </a>
              <a href="#contact" className="block text-sm hover:text-primary transition-colors">
                {t('nav.contact')}
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm tracking-wider mb-4 text-muted-foreground">
              CONTACT
            </h4>
            <div className="space-y-3">
              <a href="tel:+995555123456" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                +995 555 123 456
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                {t('footer.address')}
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="w-4 text-center text-primary">⏰</span>
                {t('footer.hours')}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 RACING GEORGIA. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground border border-border px-3 py-1 rounded-full">
              🇩🇪 German Quality
            </span>
            <span className="text-xs text-muted-foreground border border-border px-3 py-1 rounded-full">
              🇬🇪 Made for Georgia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
