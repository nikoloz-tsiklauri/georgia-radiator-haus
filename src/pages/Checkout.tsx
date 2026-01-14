import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowLeft, Package, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_ORDER_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing');
      }

      // Build order details string
      const orderDetails = items
        .map((item) => {
          const name = language === 'ge' ? item.product.nameGe : item.product.name;
          return `${name} x${item.quantity} - ₾${item.product.price * item.quantity}`;
        })
        .join('\n');

      const formData = new FormData(formRef.current!);
      
      // Add order details to form
      const orderInput = document.createElement('input');
      orderInput.type = 'hidden';
      orderInput.name = 'order_details';
      orderInput.value = orderDetails;
      formRef.current?.appendChild(orderInput);

      const totalInput = document.createElement('input');
      totalInput.type = 'hidden';
      totalInput.name = 'order_total';
      totalInput.value = `₾${totalPrice}`;
      formRef.current?.appendChild(totalInput);

      await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);

      setOrderComplete(true);
      clearCart();
      
      toast({
        title: t('checkout.success'),
        description: t('checkout.successMessage'),
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'შეცდომა',
        description: 'შეკვეთის გაგზავნა ვერ მოხერხდა. სცადეთ თავიდან.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderComplete) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <Cart />

        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-lg mx-auto text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/15 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {t('checkout.orderComplete')}
              </h1>
              <p className="text-muted-foreground mb-8">
                {t('checkout.orderCompleteMessage')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/shop">
                  <Button variant="outline" className="font-display">
                    {t('checkout.continueShopping')}
                  </Button>
                </Link>
                <Link to="/">
                  <Button className="racing-gradient racing-glow font-display">
                    {t('nav.home')}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <Cart />

        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center">
              <Package className="h-16 w-16 mx-auto mb-6 text-muted-foreground/50" />
              <h1 className="font-display text-2xl font-bold mb-4 text-foreground">
                {t('shop.emptyCart')}
              </h1>
              <Link to="/shop">
                <Button className="racing-gradient racing-glow font-display">
                  {t('checkout.goToShop')}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Cart />

      <section className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('checkout.backToShop')}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Order Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('checkout.title')}
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mb-8 rounded-full" />

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    {t('checkout.fullName')} *
                  </label>
                  <Input
                    name="customer_name"
                    required
                    placeholder={t('checkout.fullNamePlaceholder')}
                    className="bg-accent/50 border-border focus:border-primary h-12 rounded-xl shadow-soft"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    {t('checkout.phone')} *
                  </label>
                  <Input
                    name="customer_phone"
                    type="tel"
                    required
                    placeholder="+995 5XX XXX XXX"
                    className="bg-accent/50 border-border focus:border-primary h-12 rounded-xl shadow-soft"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    {t('checkout.address')} *
                  </label>
                  <Textarea
                    name="delivery_address"
                    required
                    rows={3}
                    placeholder={t('checkout.addressPlaceholder')}
                    className="bg-accent/50 border-border focus:border-primary resize-none rounded-xl shadow-soft"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    {t('checkout.notes')}
                  </label>
                  <Textarea
                    name="order_notes"
                    rows={2}
                    placeholder={t('checkout.notesPlaceholder')}
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
                      {t('checkout.processing')}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      {t('checkout.placeOrder')}
                      <Send className="h-5 w-5" />
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="premium-surface rounded-3xl p-8 shadow-elevated sticky top-28">
                <h2 className="font-display text-xl font-bold mb-6 text-foreground">
                  {t('checkout.orderSummary')}
                </h2>

                <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
                  {items.map((item) => {
                    const name = language === 'ge' ? item.product.nameGe : item.product.name;
                    return (
                      <div
                        key={item.product.id}
                        className="flex gap-4 pb-4 border-b border-border"
                      >
                        <img
                          src={item.product.image}
                          alt={name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display text-sm font-bold text-foreground line-clamp-1">
                            {name}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {t('checkout.quantity')}: {item.quantity}
                          </p>
                        </div>
                        <div className="font-display font-bold text-foreground">
                          ₾{item.product.price * item.quantity}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg text-foreground">
                      {t('shop.total')}
                    </span>
                    <span className="font-display text-3xl font-bold text-primary">
                      ₾{totalPrice}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Checkout;
