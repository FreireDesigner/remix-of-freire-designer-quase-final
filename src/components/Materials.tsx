import { Star, Droplets, Sparkles, Wind } from "lucide-react";

const materials = [
  {
    icon: Star,
    name: "DryFit Premium",
    description: "Tecido respirável que absorve o suor",
    bgColor: "bg-blue-500",
  },
  {
    icon: Wind,
    name: "Helanca",
    description: "Elasticidade e conforto máximo",
    bgColor: "bg-purple-500",
  },
  {
    icon: Droplets,
    name: "Thérmica",
    description: "Proteção térmica e isolamento",
    bgColor: "bg-orange-500",
  },
  {
    icon: Sparkles,
    name: "Estampa DTF",
    description: "Alta qualidade e durabilidade",
    bgColor: "bg-pink-500",
  },
];

const Materials = () => {
  return (
    <section className="py-8 px-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-extrabold text-foreground mb-1">
          Conheça nossos materiais
        </h2>
        <p className="text-sm text-muted-foreground font-normal">
          Tecnologia e qualidade em cada peça
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {materials.map((material, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow ${material.bgColor}`}
          >
            {/* Background image placeholder with low opacity */}
            <div className="absolute inset-0 opacity-15">
              <div className="w-full h-full flex items-center justify-center text-white/30 text-xs">
                IMG
              </div>
            </div>
            
            {/* Content container with blur background */}
            <div className="relative p-3 flex flex-col items-center justify-center text-center min-h-[130px]">
              {/* Inner rectangle with blur */}
              <div className="absolute inset-2 bg-black/20 backdrop-blur-sm rounded-lg" />
              
              {/* Content on top */}
              <div className="relative z-10 flex flex-col items-center">
                <material.icon className="w-7 h-7 text-white mb-2" />
                <h3 className="font-bold text-white text-sm mb-0.5">{material.name}</h3>
                <p className="text-[9px] text-white/85 font-normal leading-tight">
                  {material.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Materials;
