import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const CartButton = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 hover:bg-muted rounded-lg transition-colors"
    >
      <ShoppingCart className="h-6 w-6 text-foreground" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-display rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default CartButton;
