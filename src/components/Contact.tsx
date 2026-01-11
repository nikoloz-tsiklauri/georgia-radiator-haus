import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing');
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      toast({
        title: t('contact.success'),
        description: "თქვენი შეტყობინება წარმატებით გაიგზავნა.",
      });

      formRef.current?.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "შეცდომა",
        description: "შეტყობინების გაგზავნა ვერ მოხერხდა. სცადეთ თავიდან.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: '+995 555 123 456', href: 'tel:+995555123456' },
    { icon: MapPin, label: 'ქუთაისის ქუჩა 30ა, თბილისი', href: 'https://maps.google.com/?q=Kutaisi+Street+30a,+Tbilisi,+Georgia' },
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              {t('contact.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mb-8 rounded-full" />

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">{t('contact.name')}</label>
                  <Input
                    name="user_name"
                    required
                    placeholder={t('contact.name')}
                    className="bg-accent/50 border-border focus:border-primary h-12 rounded-xl shadow-soft"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">{t('contact.phone')}</label>
                  <Input
                    name="user_phone"
                    required
                    placeholder={t('contact.phone')}
                    className="bg-accent/50 border-border focus:border-primary h-12 rounded-xl shadow-soft"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">{t('contact.car')}</label>
                  <Input
                    name="user_car"
                    required
                    placeholder="BMW E36, Mercedes W204..."
                    className="bg-accent/50 border-border focus:border-primary h-12 rounded-xl shadow-soft"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">{t('contact.engine')}</label>
                  <Input
                    name="user_engine"
                    placeholder="2.0L Turbo, 3.0L V6..."
                    className="bg-accent/50 border-border focus:border-primary h-12 rounded-xl shadow-soft"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">{t('contact.message')}</label>
                <Textarea
                  name="message"
                  rows={4}
                  placeholder={t('contact.message')}
                  className="bg-accent/50 border-border focus:border-primary resize-none rounded-xl shadow-soft"
                />
              </div>

              {/* Hidden field for recipient email */}
              <input type="hidden" name="to_email" value="tnikoloz200@gmail.com" />

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full racing-gradient racing-glow font-display text-lg tracking-wide h-14 rounded-xl hover:opacity-90 transition-opacity"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    იგზავნება...
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
            className="lg:pl-8"
          >
            <div className="premium-surface rounded-3xl p-8 md:p-10 h-full shadow-elevated">
              <h3 className="font-display text-2xl font-bold mb-8 text-foreground">RACING GEORGIA</h3>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/8 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="pt-3">
                      <p className="text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Google Maps Embed */}
              <div className="aspect-video bg-secondary rounded-2xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.5!2d44.7833!3d41.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576f84!2sKutaisi%20St%2030a%2C%20Tbilisi%2C%20Georgia!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RACING GEORGIA Location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;