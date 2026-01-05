import { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";

const products = [
  { name: "Produto Destaque 1", price: 42.0, originalPrice: 49.9, discount: 15, isNew: true },
  { name: "Produto Destaque 2", price: 52.0, originalPrice: 65.0, discount: 20, isExclusive: true },
  { name: "Produto Destaque 3", price: 48.0, originalPrice: 53.0, discount: 10, isNew: true },
  { name: "Produto Destaque 4", price: 55.0, originalPrice: 70.0, discount: 21, isExclusive: true },
  { name: "Produto Destaque 5", price: 45.0, originalPrice: 55.0, discount: 18, isNew: true },
];

const FeaturedProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      scrollPos += speed;
      const maxScroll = scroll.scrollWidth / 2;
      
      if (scrollPos >= maxScroll) {
        scrollPos = 0;
      }
      
      scroll.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const duplicatedProducts = [...products, ...products];

  return (
    <section className="py-4 px-4 bg-secondary/30">
      <h2 className="text-xl font-extrabold text-foreground mb-4">
        Produtos em Destaque:
      </h2>
      
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-hidden pb-2"
      >
        {duplicatedProducts.map((product, index) => (
          <div key={index} className="min-w-[180px] max-w-[180px]">
            <ProductCard
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              isNew={product.isNew}
              isExclusive={product.isExclusive}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
