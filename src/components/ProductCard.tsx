import { ShoppingCart, Crown } from "lucide-react";

interface ProductCardProps {
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  isNew?: boolean;
  isExclusive?: boolean;
  variant?: "default" | "exclusive";
}

const ProductCard = ({
  name,
  description,
  price,
  originalPrice,
  discount,
  isNew = false,
  isExclusive = false,
  variant = "default",
}: ProductCardProps) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow ${
      variant === "exclusive" ? "" : "bg-card"
    }`}>
      {/* Image placeholder */}
      <div className="relative bg-secondary aspect-[4/5] flex items-center justify-center">
        {/* New badge - top left */}
        {isNew && (
          <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold bg-primary text-primary-foreground rounded-full">
            NOVO
          </span>
        )}
        
        {/* Exclusive crown - top right */}
        {isExclusive && (
          <span className="absolute top-2 right-2 w-8 h-8 gradient-gold rounded-full flex items-center justify-center">
            <Crown className="w-4 h-4 text-foreground" fill="currentColor" />
          </span>
        )}
        
        {/* Discount badge - bottom left */}
        {discount && (
          <span className="absolute bottom-2 left-2 px-2 py-0.5 text-[10px] font-bold bg-success text-success-foreground rounded-full">
            {discount}% OFF
          </span>
        )}
        
        <span className="text-muted-foreground text-sm font-bold">TAQUI</span>
      </div>

      {/* Content */}
      <div className="p-3 bg-card">
        <h3 className="font-extrabold text-foreground text-xs leading-tight mb-1 line-clamp-2">
          {name}
        </h3>
        {variant === "exclusive" && description && (
          <p className="text-[10px] text-muted-foreground line-clamp-2 mb-2 font-normal">
            {description}
          </p>
        )}
        {variant === "default" && (
          <p className="text-[10px] text-muted-foreground line-clamp-1 mb-2 font-normal">
            Camiseta exclusiva...
          </p>
        )}
        
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-sm font-extrabold text-foreground">
            R$ {price.toFixed(2).replace(".", ",")}
          </span>
          {originalPrice && (
            <span className="text-[9px] text-muted-foreground line-through font-normal">
              R$ {originalPrice.toFixed(2).replace(".", ",")}
            </span>
          )}
        </div>

        <button className={`w-full py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-colors ${
          variant === "exclusive"
            ? "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:opacity-90 text-white"
            : "bg-primary hover:bg-primary/90 text-primary-foreground"
        }`}>
          {variant === "exclusive" ? (
            <>
              <ShoppingCart className="w-3.5 h-3.5" />
              Adicionar
            </>
          ) : (
            "Ver Detalhes"
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
