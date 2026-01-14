import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';
import { products } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';

const Shop = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: { ge: 'ყველა', en: 'All', de: 'Alle' } },
    { id: 'bmw', label: { ge: 'BMW', en: 'BMW', de: 'BMW' } },
    { id: 'mercedes', label: { ge: 'Mercedes', en: 'Mercedes', de: 'Mercedes' } },
    { id: 'audi', label: { ge: 'Audi', en: 'Audi', de: 'Audi' } },
    { id: 'toyota', label: { ge: 'Toyota', en: 'Toyota', de: 'Toyota' } },
    { id: 'nissan', label: { ge: 'Nissan', en: 'Nissan', de: 'Nissan' } },
    { id: 'honda', label: { ge: 'Honda', en: 'Honda', de: 'Honda' } },
    { id: 'vw', label: { ge: 'VW', en: 'VW', de: 'VW' } },
  ];

  const { language } = useLanguage();

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.compatible.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Cart />

      {/* Hero Banner */}
      <section className="pt-24 md:pt-32 pb-12 section-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              {t('shop.title')}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('shop.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background sticky top-16 md:top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t('shop.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-accent/50 border-border focus:border-primary rounded-xl"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-sm font-display tracking-wide rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-primary-foreground shadow-racing'
                      : 'bg-accent text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {cat.label[language]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">{t('shop.noProducts')}</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Shop;
