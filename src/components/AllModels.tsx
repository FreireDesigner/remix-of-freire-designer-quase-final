import { useState } from "react";
import ProductCard from "./ProductCard";

const filters = ["Todos", "Novos", "Em Alta", "Promoções"];

const products = [
  { name: "Camiseta Interclasse 2024", price: 45.0, originalPrice: 55.0, discount: 18, isNew: true },
  { name: "Camiseta Personalizada Time", price: 52.0, originalPrice: 65.0, discount: 20, isExclusive: true },
  { name: "Camiseta Gospel Especial", price: 48.0, originalPrice: 58.0, discount: 17, isNew: true },
  { name: "Camiseta Desbravadores", price: 55.0, originalPrice: 70.0, discount: 21 },
  { name: "Camiseta Evento Premium", price: 42.0, originalPrice: 50.0, discount: 16, isExclusive: true },
  { name: "Camiseta Personalizada Art", price: 50.0, originalPrice: 62.0, discount: 19, isNew: true },
];

const AllModels = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  return (
    <section className="py-4 px-4">
      <h2 className="text-xl font-extrabold text-foreground mb-4">
        Vestuário da Semana:
      </h2>

      {/* Filters */}
      <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar pb-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
              activeFilter === filter
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-3">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            isNew={product.isNew}
            isExclusive={product.isExclusive}
          />
        ))}
      </div>

      {/* Load More */}
      <button className="w-full mt-4 py-3 border-2 border-primary text-primary rounded-lg font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
        Carregar mais produtos
      </button>
    </section>
  );
};

export default AllModels;
