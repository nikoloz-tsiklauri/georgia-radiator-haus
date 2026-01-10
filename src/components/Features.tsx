import { motion } from 'framer-motion';
import { 
  Box, 
  Thermometer, 
  Car, 
  FlaskConical, 
  ShieldCheck, 
  Headphones 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Box, titleKey: 'features.aluminum.title', descKey: 'features.aluminum.desc' },
    { icon: Thermometer, titleKey: 'features.cooling.title', descKey: 'features.cooling.desc' },
    { icon: Car, titleKey: 'features.versatile.title', descKey: 'features.versatile.desc' },
    { icon: FlaskConical, titleKey: 'features.tested.title', descKey: 'features.tested.desc' },
    { icon: ShieldCheck, titleKey: 'features.warranty.title', descKey: 'features.warranty.desc' },
    { icon: Headphones, titleKey: 'features.support.title', descKey: 'features.support.desc' },
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {t('features.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 bg-background border border-border rounded-2xl hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;