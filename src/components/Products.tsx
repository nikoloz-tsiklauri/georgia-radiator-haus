import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import radiator1 from '@/assets/radiator-1.jpg';
import radiator2 from '@/assets/radiator-2.jpg';
import radiator3 from '@/assets/radiator-3.jpg';

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      image: radiator1,
      name: 'RACING Pro Series',
      description: 'High-performance aluminum radiator for demanding applications',
      compatible: 'BMW, Mercedes, Audi',
    },
    {
      image: radiator2,
      name: 'RACING Sport Series',
      description: 'Competition-grade cooling for track and street use',
      compatible: 'Toyota, Honda, Nissan',
    },
    {
      image: radiator3,
      name: 'RACING Elite Series',
      description: 'Premium dual-pass design for maximum heat dissipation',
      compatible: 'Ford, Chevrolet, Dodge',
    },
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('products.title')}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group bg-secondary/30 border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                {/* Performance Badge */}
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1">
                  <Zap className="h-3 w-3" />
                  <span className="text-xs font-display">{t('products.performance')}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary">{t('products.compatible')}:</span>
                  <span className="text-muted-foreground">{product.compatible}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
