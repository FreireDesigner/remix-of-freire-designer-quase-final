import { MessageCircle, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="gradient-blue py-12 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 opacity-20">
        <Sparkles className="w-12 h-12 text-white" />
      </div>
      <div className="absolute bottom-4 right-4 opacity-20">
        <Sparkles className="w-12 h-12 text-white" />
      </div>
      
      <div className="text-center max-w-md mx-auto relative z-10">
        <h2 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
          Crie sua camiseta personalizada
        </h2>
        <p className="text-white/85 mb-6 font-normal text-sm">
          Tenha um manto de DESTAQUE e EXCLUSIVO para você, sua turma, time ou evento!
        </p>
        
        <button className="bg-white hover:bg-gray-50 text-[#0038a8] py-4 px-8 rounded-2xl font-bold flex flex-col items-center justify-center gap-1 mx-auto transition-all shadow-2xl hover:scale-105 w-full max-w-sm border-2 border-[#0059fa]/20">
          <div className="flex items-center justify-center gap-2">
            <MessageCircle className="w-6 h-6 text-[#0038a8]" fill="currentColor" />
            <span>Falar com designer no</span>
          </div>
          <span className="text-lg font-extrabold">WhatsApp</span>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
