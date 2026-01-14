import { motion } from 'framer-motion';
import { ShoppingCart, Zap } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { language, t } = useLanguage();

  const name = language === 'ge' ? product.nameGe : product.name;
  const description = language === 'ge' ? product.descriptionGe : product.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group floating-card rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-elevated transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-racing-carbon/60 via-transparent to-transparent opacity-60" />

        {/* Performance Badge */}
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-racing">
          <Zap className="h-3.5 w-3.5" />
          <span className="text-xs font-display">{t('products.performance')}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold mb-2 text-foreground line-clamp-1">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-2 text-sm mb-4">
          <span className="text-primary font-medium">{t('products.compatible')}:</span>
          <span className="text-muted-foreground line-clamp-1">{product.compatible}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="font-display text-2xl font-bold text-foreground">
            ₾{product.price}
          </div>
          <Button
            onClick={() => addToCart(product)}
            className="racing-gradient racing-glow font-display text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {t('shop.addToCart')}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
