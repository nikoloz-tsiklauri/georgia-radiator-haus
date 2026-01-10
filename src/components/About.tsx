import { motion } from 'framer-motion';
import { Award, Shield, BadgeCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const badges = [
    { icon: Award, key: 'about.badge1' },
    { icon: Shield, key: 'about.badge2' },
    { icon: BadgeCheck, key: 'about.badge3' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Trust Badges */}
            <div className="grid sm:grid-cols-3 gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center p-6 bg-secondary/50 border border-border rounded-lg"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <badge.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="font-display text-sm tracking-wide">{t(badge.key)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-secondary to-muted rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/4 -translate-x-1/4" />
              
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-8xl md:text-9xl font-bold text-primary/20 mb-4">
                    DE
                  </div>
                  <p className="font-display text-xl md:text-2xl tracking-widest text-muted-foreground">
                    MADE IN GERMANY
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg"
            >
              <div className="font-display text-3xl font-bold">10+</div>
              <div className="text-xs opacity-80">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
