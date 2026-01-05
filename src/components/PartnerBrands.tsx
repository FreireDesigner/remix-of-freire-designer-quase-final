const brands = [
  "Marca 1", "Marca 2", "Marca 3", "Marca 4", "Marca 5", "Marca 6",
  "Marca 7", "Marca 8", "Marca 9", "Marca 10", "Marca 11", "Marca 12",
];

const PartnerBrands = () => {
  return (
    <section className="gradient-blue py-8 px-4 overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black text-white mb-2 drop-shadow-sm">
          Marcas Parceiras
        </h2>
        <p className="text-white/80 font-normal text-sm">
          Empresas e clientes de nome que confiam nos nossos pedidos
        </p>
      </div>

      {/* Carousel Row 1 - Left to Right */}
      <div className="relative mb-3">
        <div className="flex animate-marquee">
          {[...brands, ...brands].map((brand, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0 mx-2">
              <div className="bg-card rounded-xl w-28 h-28 flex items-center justify-center shadow-card">
                <span className="text-[10px] text-muted-foreground font-medium">MARCA_{(index % brands.length) + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Row 2 - Right to Left */}
      <div className="relative mb-4">
        <div className="flex animate-marquee-reverse">
          {[...brands, ...brands].map((brand, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0 mx-2">
              <div className="bg-card rounded-xl w-28 h-28 flex items-center justify-center shadow-card">
                <span className="text-[10px] text-muted-foreground font-medium">MARCA_{(index % brands.length) + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-xl font-black text-white drop-shadow-sm">
        E MUITO MAIS
      </p>
    </section>
  );
};

export default PartnerBrands;
