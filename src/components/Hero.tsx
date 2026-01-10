import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-radiator.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Racing Radiator"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">German Engineering</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 font-body">
              {t('hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="racing-gradient racing-glow font-display text-lg tracking-wide h-14 px-8"
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
                className="border-border hover:border-primary hover:text-primary font-display text-lg tracking-wide h-14 px-8"
                asChild
              >
                <a href="tel:+995555123456">
                  <Phone className="mr-2 h-5 w-5" />
                  {t('hero.call')}
                </a>
              </Button>
            </div>

            {/* Phone Display */}
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-px bg-primary/50" />
              <a href="tel:+995555123456" className="text-2xl font-display text-foreground hover:text-primary transition-colors">
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
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
