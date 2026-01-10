import { Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
              RACING <span className="text-primary">GEORGIA</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              გერმანული RACING რადიატორების ოფიციალური დისტრიბუტორი საქართველოში.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm tracking-wider mb-4 text-muted-foreground">
              სწრაფი ბმულები
            </h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-sm text-foreground hover:text-primary transition-colors">
                {t('nav.about')}
              </a>
              <a href="#products" className="block text-sm text-foreground hover:text-primary transition-colors">
                {t('nav.products')}
              </a>
              <a href="#contact" className="block text-sm text-foreground hover:text-primary transition-colors">
                {t('nav.contact')}
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm tracking-wider mb-4 text-muted-foreground">
              კონტაქტი
            </h4>
            <div className="space-y-3">
              <a href="tel:+995555123456" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                +995 555 123 456
              </a>
              <a 
                href="https://maps.google.com/?q=Kutaisi+Street+30a,+Tbilisi,+Georgia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                ქუთაისის ქუჩა 30ა, თბილისი
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xs">⏰</span>
                </div>
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
            <span className="text-xs text-foreground bg-secondary border border-border px-4 py-2 rounded-full shadow-soft">
              🇩🇪 გერმანული ხარისხი
            </span>
            <span className="text-xs text-foreground bg-secondary border border-border px-4 py-2 rounded-full shadow-soft">
              🇬🇪 საქართველოსთვის
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;