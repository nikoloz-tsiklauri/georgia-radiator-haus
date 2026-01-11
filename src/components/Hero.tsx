import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-radiator.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image - Clearly Visible */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Racing Radiator"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability - not too heavy */}
        <div className="absolute inset-0 bg-gradient-to-r from-racing-carbon/80 via-racing-carbon/60 to-racing-carbon/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
      </div>

      {/* Subtle red accent glow */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2.5 mb-6 shadow-soft">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-white/90 font-medium">German Engineering</span>
            </div>

            {/* Title - White on dark hero */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8 font-body leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="racing-gradient racing-glow font-display text-lg tracking-wide h-14 px-8 hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="#contact">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:border-white hover:bg-white/20 font-display text-lg tracking-wide h-14 px-8 transition-all duration-200"
                asChild
              >
                <a href="tel:+995555123456">
                  <Phone className="mr-2 h-5 w-5" />
                  {t('hero.call')}
                </a>
              </Button>
            </div>

            {/* Phone Display */}
            <div className="mt-12 flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
              <a href="tel:+995555123456" className="text-2xl font-display text-white hover:text-primary transition-colors">
                +995 555 123 456
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/60 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;