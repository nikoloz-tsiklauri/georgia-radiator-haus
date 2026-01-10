import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: t('contact.success'),
      description: "We will contact you shortly.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    { icon: Phone, label: '+995 555 123 456', href: 'tel:+995555123456' },
    { icon: MapPin, label: t('footer.address'), href: '#' },
    { icon: Clock, label: t('footer.hours'), href: '#' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            <div className="w-20 h-1 bg-primary mb-8" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.name')}</label>
                  <Input
                    required
                    placeholder={t('contact.name')}
                    className="bg-card border-border focus:border-primary h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.phone')}</label>
                  <Input
                    required
                    placeholder={t('contact.phone')}
                    className="bg-card border-border focus:border-primary h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.car')}</label>
                  <Input
                    required
                    placeholder="BMW E36, Mercedes W204..."
                    className="bg-card border-border focus:border-primary h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.engine')}</label>
                  <Input
                    placeholder="2.0L Turbo, 3.0L V6..."
                    className="bg-card border-border focus:border-primary h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.message')}</label>
                <Textarea
                  rows={4}
                  placeholder={t('contact.message')}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full racing-gradient racing-glow font-display text-lg tracking-wide h-14"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Loading...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {t('contact.submit')}
                    <Send className="h-5 w-5" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-12"
          >
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 h-full">
              <h3 className="font-display text-2xl font-bold mb-8">RACING GEORGIA</h3>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-secondary/50 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">Tbilisi, Georgia</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
