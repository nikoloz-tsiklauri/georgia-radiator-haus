import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import radiator1 from '@/assets/radiator-1.jpg';
import radiator2 from '@/assets/radiator-2.jpg';
import radiator3 from '@/assets/radiator-3.jpg';
import cap1 from '@/assets/cap-1.jpg';
import coolantPlastics from '@/assets/coolant-plastics.jpg';
import cap3 from '@/assets/cap-3.jpg';

const Products = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const products = [
    {
      image: radiator1,
      name: 'RACING Pro Series',
      description: 'High-performance aluminum radiator for demanding applications',
    },
    {
      image: radiator2,
      name: 'RACING Sport Series',
      description: 'Competition-grade cooling for track and street use',
    },
    {
      image: radiator3,
      name: 'RACING Elite Series',
      description: 'Premium dual-pass design for maximum heat dissipation',
    },
    {
      image: cap1,
      name: 'RACING Pro Cap',
      description: 'Premium metal radiator cap with high-pressure seal',
    },
    {
      image: coolantPlastics,
      name: 'RADIATOR PLASTIC PARTS',
      description: 'OEM radiator plastic housings / tank covers for multiple models',
    },
    {
      image: cap3,
      name: 'Expansion Tank Cap',
      description: 'High-quality pressure release expansion tank cap',
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <section id="products" className="py-20 md:py-32 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {t('products.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </motion.div>

        {/* Carousel */}
        <div className="relative px-12 md:px-16">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product, index) => (
                <CarouselItem
                  key={product.name}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="h-full"
                  >
                    <div className="group floating-card rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-elevated transition-all duration-300 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative aspect-square overflow-hidden bg-muted">
                        <img
                          src={product.image}
                          alt={product.name}
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
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-display text-xl font-bold mb-2 text-foreground">{product.name}</h3>
                        <p className="text-muted-foreground text-sm">{product.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Custom Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-border/50 bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-card"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-border/50 bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-card"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
