import { Truck, TrendingUp, Shield } from "lucide-react";

const benefits = [
  { icon: Truck, text: "Entrega em Todo Brasil" },
  { icon: TrendingUp, text: "5 Anos de Excelência" },
  { icon: Shield, text: "Satisfação Garantida" },
];

const BenefitsBar = () => {
  return (
    <section className="gradient-blue py-3 px-2">
      <div className="flex items-stretch justify-center">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center">
            <div className="flex items-center gap-2 px-4 py-1">
              <benefit.icon className="w-5 h-5 text-white flex-shrink-0" />
              <span className="text-[10px] font-medium text-white leading-tight">
                {benefit.text}
              </span>
            </div>
            {index < benefits.length - 1 && (
              <div className="w-px h-8 bg-white/30" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsBar;
