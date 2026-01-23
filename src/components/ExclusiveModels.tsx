import { Crown, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
  { name: "Camiseta Exclusiva Premium", description: "Design único desenvolvido por nossos artistas", price: 79.9, originalPrice: 99.9, discount: 20 },
  { name: "Camiseta Arte Original", description: "Estampa exclusiva com cores vibrantes", price: 89.9, originalPrice: 109.9, discount: 18 },
  { name: "Camiseta Edição Limitada", description: "Pouquíssimas unidades disponíveis", price: 69.9, originalPrice: 89.9, discount: 22 },
  { name: "Camiseta Destaque FD", description: "Modelo mais vendido da coleção", price: 99.9, originalPrice: 129.9, discount: 23 },
];

const ExclusiveModels = () => {
  return (
    <section className="bg-background py-10 px-4">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
            <Crown className="w-5 h-5 text-foreground" fill="currentColor" />
          </div>
          <h2 className="text-xl font-black bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Modelos Exclusivos FDesigner
          </h2>
          <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
            <Crown className="w-5 h-5 text-foreground" fill="currentColor" />
          </div>
        </div>
        <p className="text-foreground font-normal max-w-lg mx-auto text-sm">
          Designs únicos e exclusivos que você só encontra aqui! Camisetas personalizadas com arte autoral desenvolvidas especialmente para seu evento ou time!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {products.map((product, index) => (
          <div key={index} className="bg-card rounded-xl shadow-lg border-[4px] border-amber-400">
            <ProductCard
              name={product.name}
              description={product.description}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              isExclusive={true}
              variant="exclusive"
            />
          </div>
        ))}
      </div>

      <button className="w-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:opacity-90 text-white py-4 px-8 rounded-xl font-extrabold flex items-center justify-center gap-4 transition-all shadow-xl hover:shadow-2xl">
        <Crown className="w-5 h-5" fill="currentColor" />
        <span>Ver Todos os Modelos Exclusivos</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </section>
  );
};

export default ExclusiveModels;
