import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";
import { Sparkles, ArrowRight, Users, Shirt, MessageCircle, Zap, Crown, Star, Heart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Gospel only has Estampas, no Sublimações option

const stats = [
  { value: "5+", label: "Anos no Mercado" },
  { value: "600+", label: "Igrejas Atendidas" },
  { value: "98%", label: "Satisfação" },
];

const bestSellers = [
  { name: "Estampa Gospel 1", sales: "520+ vendidos", price: 69.90, isExclusive: true },
  { name: "Estampa Gospel 2", sales: "480+ vendidos", price: 74.90, isExclusive: false },
  { name: "Estampa Gospel 3", sales: "390+ vendidos", price: 64.90, isExclusive: false },
  { name: "Estampa Gospel 4", sales: "440+ vendidos", price: 69.90, isExclusive: true },
  { name: "Estampa Gospel 5", sales: "360+ vendidos", price: 74.90, isExclusive: false },
  { name: "Estampa Gospel 6", sales: "410+ vendidos", price: 69.90, isExclusive: false },
];

// Igrejas items (only Estampas for Gospel)
const igrejas = [
  { name: "Igreja 1", type: "Batista", price: 69.90, isExclusive: true },
  { name: "Igreja 2", type: "Assembleia", price: 69.90, isExclusive: false },
  { name: "Igreja 3", type: "Presbiteriana", price: 74.90, isExclusive: false },
  { name: "Igreja 4", type: "Metodista", price: 69.90, isExclusive: true },
  { name: "Igreja 5", type: "Adventista", price: 74.90, isExclusive: false },
  { name: "Igreja 6", type: "Católica", price: 69.90, isExclusive: false },
  { name: "Igreja 7", type: "Luterana", price: 64.90, isExclusive: false },
  { name: "Igreja 8", type: "Quadrangular", price: 79.90, isExclusive: true },
  { name: "Igreja 9", type: "Universal", price: 79.90, isExclusive: false },
  { name: "Igreja 10", type: "Mundial", price: 69.90, isExclusive: false },
  { name: "Igreja 11", type: "Sara Nossa Terra", price: 69.90, isExclusive: true },
  { name: "Igreja 12", type: "Renascer", price: 69.90, isExclusive: false },
];

// Eventos items (only Estampas for Gospel)
const eventos = [
  { name: "Evento 1", type: "Congresso", price: 69.90, isExclusive: false },
  { name: "Evento 2", type: "Retiro", price: 69.90, isExclusive: true },
  { name: "Evento 3", type: "Conferência", price: 64.90, isExclusive: false },
  { name: "Evento 4", type: "Culto Especial", price: 64.90, isExclusive: false },
  { name: "Evento 5", type: "Vigília", price: 59.90, isExclusive: true },
  { name: "Evento 6", type: "Encontro", price: 69.90, isExclusive: false },
  { name: "Evento 7", type: "Acampamento", price: 64.90, isExclusive: false },
  { name: "Evento 8", type: "Missão", price: 74.90, isExclusive: false },
  { name: "Evento 9", type: "Evangelismo", price: 74.90, isExclusive: true },
  { name: "Evento 10", type: "Louvor", price: 69.90, isExclusive: false },
  { name: "Evento 11", type: "Workshop", price: 69.90, isExclusive: false },
  { name: "Evento 12", type: "Celebração", price: 69.90, isExclusive: true },
];

// Ministérios items (only Estampas for Gospel)
const ministerios = [
  { name: "Ministério 1", type: "Louvor", price: 74.90, isExclusive: true },
  { name: "Ministério 2", type: "Jovens", price: 69.90, isExclusive: false },
  { name: "Ministério 3", type: "Infantil", price: 69.90, isExclusive: true },
  { name: "Ministério 4", type: "Casais", price: 74.90, isExclusive: false },
  { name: "Ministério 5", type: "Mulheres", price: 69.90, isExclusive: false },
  { name: "Ministério 6", type: "Homens", price: 69.90, isExclusive: false },
  { name: "Ministério 7", type: "Dança", price: 74.90, isExclusive: true },
  { name: "Ministério 8", type: "Teatro", price: 64.90, isExclusive: false },
  { name: "Ministério 9", type: "Intercessão", price: 79.90, isExclusive: false },
  { name: "Ministério 10", type: "Missões", price: 69.90, isExclusive: false },
  { name: "Ministério 11", type: "Visitação", price: 74.90, isExclusive: true },
  { name: "Ministério 12", type: "Acolhimento", price: 69.90, isExclusive: false },
];

const inclusos = [
  { icon: Users, title: "Nome da Igreja", description: "Já incluso no preço base", included: true },
  { icon: Shirt, title: "Nome Individual", description: "Já incluso no preço base", included: true },
  { icon: Heart, title: "Logo da Igreja", description: "Já incluso no preço base", included: true },
];

const extras = [
  { icon: Zap, title: "Design Exclusivo", price: "+R$ 30,00" },
];

const faqItems = [
  { question: "Qual o prazo de entrega para camisetas Gospel?", answer: "O prazo de entrega varia de 7 a 15 dias úteis, dependendo da quantidade e complexidade do pedido." },
  { question: "Qual a quantidade mínima de peças?", answer: "A quantidade mínima é de 10 peças por modelo. Consulte-nos para pedidos menores." },
  { question: "Posso personalizar com o logo da minha igreja?", answer: "Sim! Todas as camisetas incluem a personalização com o logo da sua igreja sem custo adicional." },
  { question: "Qual a diferença entre Sublimação e Estampa?", answer: "Sublimação oferece cores mais vibrantes e durabilidade superior, enquanto Estampa é uma opção mais econômica com ótima qualidade." },
];

// Carousel Component for Best Sellers
interface BestSellerItem {
  name: string;
  sales: string;
  price: number;
  isExclusive: boolean;
}

const BestSellersCarousel = ({ items }: { items: BestSellerItem[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const speed = 0.8;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPositionRef.current += speed;
        const maxScroll = scrollContainer.scrollWidth / 2;
        
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }
        
        scrollContainer.scrollLeft = scrollPositionRef.current;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const duplicatedItems = [...items, ...items];

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto scrollbar-hide px-4"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {duplicatedItems.map((item, index) => (
        <div 
          key={index} 
          className={`flex-shrink-0 w-44 rounded-xl overflow-hidden shadow-md ${item.isExclusive ? 'border-2 border-amber-400' : 'bg-card'}`}
        >
          <div className="relative bg-secondary aspect-square flex items-center justify-center">
            {item.isExclusive && (
              <span className="absolute top-2 right-2 w-10 h-10 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                <Crown className="w-5 h-5 text-black" fill="black" />
              </span>
            )}
            <span className="text-muted-foreground text-sm font-bold">TAQUI</span>
          </div>
          <div className="p-3 bg-card">
            <h3 className="font-extrabold text-foreground text-xs leading-tight mb-1 line-clamp-2">{item.name}</h3>
            <p className="text-muted-foreground text-[10px] mb-1">{item.sales}</p>
            <p className="text-sm font-extrabold text-foreground">R$ {item.price.toFixed(2).replace(".", ",")}</p>
            <button className={`w-full mt-2 py-2 rounded-lg font-bold text-xs transition-colors ${
              item.isExclusive 
                ? "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:opacity-90 text-white"
                : "bg-primary hover:bg-primary/90 text-primary-foreground"
            }`}>
              Ver Detalhes
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const Gospel = () => {
  const [visibleIgrejas, setVisibleIgrejas] = useState(6);
  const [visibleEventos, setVisibleEventos] = useState(6);
  const [visibleMinisterios, setVisibleMinisterios] = useState(6);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Banner Image */}
        <div className="w-full aspect-[16/9] bg-gradient-to-br from-[#0038a8] to-[#0059fa] flex items-center justify-center">
          <span className="text-white/30 text-sm font-medium">BANNER_GOSPEL</span>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 pt-8 pb-4">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#1a4fc9]/60 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-2">
              <Heart className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Camisetas Gospel</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-black text-white text-center leading-tight mb-6">
            Camisetas<br />Gospel
          </h1>

          {/* Description */}
          <p className="text-white/90 text-center text-lg font-medium leading-relaxed mb-8 max-w-md mx-auto">
            Modelos exclusivos para igrejas, ministérios e eventos com qualidade premium e mensagens de fé.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-black text-white italic">{stat.value}</div>
                <div className="text-white/80 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <WaveDivider variant="blue-to-white" />

        {/* Estampas Only Badge */}
        <section className="bg-background px-4 py-6">
          <div className="flex justify-center">
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-sm shadow-lg">
              Estampas
            </div>
          </div>
        </section>

        {/* Best Sellers Carousel Section */}
        <section className="bg-background py-10 overflow-hidden">
          <div className="px-4">
            <h2 className="text-3xl font-black text-[#2563eb] text-center leading-tight mb-4">
              Modelos Mais<br />Vendidos
            </h2>
            <p className="text-foreground/70 text-center text-base leading-relaxed mb-8 max-w-md mx-auto">
              Confira os modelos que fizeram o maior sucesso entre as igrejas.
            </p>
          </div>

          <BestSellersCarousel items={bestSellers} />
        </section>

        <WaveDivider variant="white-to-blue" />

        {/* Igrejas Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 py-10">
          <h2 className="text-3xl font-black text-white text-center leading-tight mb-3">
            Igrejas
          </h2>
          <p className="text-white/80 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Modelos personalizados para sua congregação
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {igrejas.slice(0, visibleIgrejas).map((item, index) => (
              <div key={index} className={`rounded-xl overflow-hidden shadow-md ${item.isExclusive ? 'border-2 border-amber-400' : 'bg-card'}`}>
                <div className="relative bg-secondary aspect-square flex items-center justify-center">
                  {item.isExclusive && (
                    <span className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                      <Crown className="w-4 h-4 text-black" fill="black" />
                    </span>
                  )}
                  <span className="text-muted-foreground text-xs font-bold">TAQUI</span>
                </div>
                <div className="p-3 bg-card">
                  <h3 className="font-extrabold text-foreground text-xs leading-tight mb-1">
                    <span className="line-clamp-1">{item.name} <span className="text-muted-foreground font-normal">• {item.type}</span></span>
                  </h3>
                  <p className="text-sm font-extrabold text-foreground">R$ {item.price.toFixed(2).replace(".", ",")}</p>
                  <button className={`w-full mt-2 py-2 rounded-lg font-bold text-xs transition-colors ${
                    item.isExclusive 
                      ? "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:opacity-90 text-white"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}>
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>

          {visibleIgrejas < igrejas.length && (
            <button 
              onClick={() => setVisibleIgrejas(prev => Math.min(prev + 6, igrejas.length))}
              className="w-full bg-white hover:bg-white/95 text-[#1e40af] py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg"
            >
              <span>Ver Mais</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </section>

        <WaveDivider variant="blue-to-white" />

        {/* Eventos Section */}
        <section className="bg-background px-4 py-10">
          <h2 className="text-3xl font-black text-[#2563eb] text-center leading-tight mb-3">
            Eventos
          </h2>
          <p className="text-foreground/70 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Congressos, retiros, conferências e mais
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {eventos.slice(0, visibleEventos).map((item, index) => (
              <div key={index} className={`rounded-xl overflow-hidden shadow-md ${item.isExclusive ? 'border-2 border-amber-400' : 'bg-card'}`}>
                <div className="relative bg-secondary aspect-square flex items-center justify-center">
                  {item.isExclusive && (
                    <span className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                      <Crown className="w-4 h-4 text-black" fill="black" />
                    </span>
                  )}
                  <span className="text-muted-foreground text-xs font-bold">TAQUI</span>
                </div>
                <div className="p-3 bg-card">
                  <h3 className="font-extrabold text-foreground text-xs leading-tight mb-1">
                    <span className="line-clamp-1">{item.name} <span className="text-muted-foreground font-normal">• {item.type}</span></span>
                  </h3>
                  <p className="text-sm font-extrabold text-foreground">R$ {item.price.toFixed(2).replace(".", ",")}</p>
                  <button className={`w-full mt-2 py-2 rounded-lg font-bold text-xs transition-colors ${
                    item.isExclusive 
                      ? "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:opacity-90 text-white"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}>
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>

          {visibleEventos < eventos.length && (
            <button 
              onClick={() => setVisibleEventos(prev => Math.min(prev + 6, eventos.length))}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg"
            >
              <span>Ver Mais</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </section>

        <WaveDivider variant="white-to-blue" />

        {/* Ministérios Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 py-10">
          <h2 className="text-3xl font-black text-white text-center leading-tight mb-3">
            Ministérios
          </h2>
          <p className="text-white/80 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Louvor, jovens, infantil e muito mais
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {ministerios.slice(0, visibleMinisterios).map((item, index) => (
              <div key={index} className={`rounded-xl overflow-hidden shadow-md ${item.isExclusive ? 'border-2 border-amber-400' : 'bg-card'}`}>
                <div className="relative bg-secondary aspect-square flex items-center justify-center">
                  {item.isExclusive && (
                    <span className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                      <Crown className="w-4 h-4 text-black" fill="black" />
                    </span>
                  )}
                  <span className="text-muted-foreground text-xs font-bold">TAQUI</span>
                </div>
                <div className="p-3 bg-card">
                  <h3 className="font-extrabold text-foreground text-xs leading-tight mb-1">
                    <span className="line-clamp-1">{item.name} <span className="text-muted-foreground font-normal">• {item.type}</span></span>
                  </h3>
                  <p className="text-sm font-extrabold text-foreground">R$ {item.price.toFixed(2).replace(".", ",")}</p>
                  <button className={`w-full mt-2 py-2 rounded-lg font-bold text-xs transition-colors ${
                    item.isExclusive 
                      ? "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 hover:opacity-90 text-white"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}>
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>

          {visibleMinisterios < ministerios.length && (
            <button 
              onClick={() => setVisibleMinisterios(prev => Math.min(prev + 6, ministerios.length))}
              className="w-full bg-white hover:bg-white/95 text-[#1e40af] py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg"
            >
              <span>Ver Mais</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </section>

        <WaveDivider variant="blue-to-white" />

        {/* What's Included Section */}
        <section className="bg-background px-4 py-10">
          <h2 className="text-3xl font-black text-[#2563eb] text-center leading-tight mb-8">
            O Que Está<br />Incluso?
          </h2>

          <div className="space-y-3 mb-6">
            {inclusos.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-4 flex items-center gap-4 shadow-sm border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                  INCLUSO
                </span>
              </div>
            ))}
          </div>

          {/* Extras */}
          <h3 className="text-xl font-bold text-[#2563eb] text-center mb-4">Extras Opcionais</h3>
          <div className="space-y-3">
            {extras.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-[#e6f0ff] to-[#cce0ff] rounded-xl p-4 flex items-center gap-4 shadow-sm border border-[#2563eb]">
                <div className="w-12 h-12 rounded-full bg-[#2563eb]/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#1e40af]">{item.title}</h3>
                  <p className="text-[#2563eb] text-sm font-medium">{item.price}</p>
                </div>
                <Star className="w-5 h-5 text-[#2563eb]" />
              </div>
            ))}
          </div>
        </section>

        <WaveDivider variant="white-to-blue" />

        {/* FAQ Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 py-10">
          <h2 className="text-3xl font-black text-white text-center leading-tight mb-8">
            Perguntas<br />Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/10 backdrop-blur-sm rounded-xl border-none overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-4 text-white font-bold text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-white/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <WaveDivider variant="blue-to-white" />

        {/* CTA Section */}
        <section className="bg-background px-4 py-10">
          <div className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-black text-white mb-4">
              Pronto para criar a camiseta da sua igreja?
            </h2>
            <p className="text-white/80 mb-6">
              Entre em contato e peça já a sua!
            </p>
            <button className="bg-white text-[#1e40af] px-8 py-4 rounded-xl font-bold flex items-center gap-3 mx-auto hover:bg-white/95 transition-all shadow-lg">
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gospel;
