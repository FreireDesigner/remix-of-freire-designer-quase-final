import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";
import { Sparkles, ArrowRight, Users, Shirt, MessageCircle, Zap, Crown, Star, Compass } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type TipoModelo = "Sublimações" | "Estampas";

const stats = [
  { value: "5+", label: "Anos no Mercado" },
  { value: "500+", label: "Clubes Atendidos" },
  { value: "98%", label: "Satisfação" },
];

const bestSellersSublimacao = [
  { name: "Desbravador Best Seller 1", sales: "450+ vendidos", price: 89.90, isExclusive: true },
  { name: "Desbravador Best Seller 2", sales: "380+ vendidos", price: 94.90, isExclusive: false },
  { name: "Desbravador Best Seller 3", sales: "320+ vendidos", price: 79.90, isExclusive: false },
  { name: "Desbravador Best Seller 4", sales: "410+ vendidos", price: 84.90, isExclusive: true },
  { name: "Desbravador Best Seller 5", sales: "290+ vendidos", price: 89.90, isExclusive: false },
  { name: "Desbravador Best Seller 6", sales: "350+ vendidos", price: 94.90, isExclusive: false },
];

const bestSellersEstampa = [
  { name: "Estampa Desbravador 1", sales: "520+ vendidos", price: 69.90, isExclusive: true },
  { name: "Estampa Desbravador 2", sales: "480+ vendidos", price: 74.90, isExclusive: false },
  { name: "Estampa Desbravador 3", sales: "390+ vendidos", price: 64.90, isExclusive: false },
  { name: "Estampa Desbravador 4", sales: "440+ vendidos", price: 69.90, isExclusive: true },
  { name: "Estampa Desbravador 5", sales: "360+ vendidos", price: 74.90, isExclusive: false },
  { name: "Estampa Desbravador 6", sales: "410+ vendidos", price: 69.90, isExclusive: false },
];

// Clubes items
const clubesSublimacao = [
  { name: "Clube 1", type: "Águias", price: 89.90, isExclusive: true },
  { name: "Clube 2", type: "Leões", price: 89.90, isExclusive: false },
  { name: "Clube 3", type: "Falcões", price: 94.90, isExclusive: false },
  { name: "Clube 4", type: "Panteras", price: 89.90, isExclusive: true },
  { name: "Clube 5", type: "Lobos", price: 94.90, isExclusive: false },
  { name: "Clube 6", type: "Tigres", price: 89.90, isExclusive: false },
  { name: "Clube 7", type: "Ursos", price: 84.90, isExclusive: false },
  { name: "Clube 8", type: "Condores", price: 99.90, isExclusive: true },
  { name: "Clube 9", type: "Gaviões", price: 99.90, isExclusive: false },
  { name: "Clube 10", type: "Jaguares", price: 89.90, isExclusive: false },
  { name: "Clube 11", type: "Pumas", price: 89.90, isExclusive: true },
  { name: "Clube 12", type: "Linces", price: 89.90, isExclusive: false },
];

const clubesEstampa = [
  { name: "Clube Estampa 1", type: "Águias", price: 69.90, isExclusive: true },
  { name: "Clube Estampa 2", type: "Leões", price: 69.90, isExclusive: false },
  { name: "Clube Estampa 3", type: "Falcões", price: 74.90, isExclusive: false },
  { name: "Clube Estampa 4", type: "Panteras", price: 69.90, isExclusive: true },
  { name: "Clube Estampa 5", type: "Lobos", price: 74.90, isExclusive: false },
  { name: "Clube Estampa 6", type: "Tigres", price: 69.90, isExclusive: false },
  { name: "Clube Estampa 7", type: "Ursos", price: 64.90, isExclusive: false },
  { name: "Clube Estampa 8", type: "Condores", price: 79.90, isExclusive: true },
  { name: "Clube Estampa 9", type: "Gaviões", price: 79.90, isExclusive: false },
  { name: "Clube Estampa 10", type: "Jaguares", price: 69.90, isExclusive: false },
  { name: "Clube Estampa 11", type: "Pumas", price: 69.90, isExclusive: true },
  { name: "Clube Estampa 12", type: "Linces", price: 69.90, isExclusive: false },
];

// Eventos items
const eventosSublimacao = [
  { name: "Evento 1", type: "Campori", price: 89.90, isExclusive: false },
  { name: "Evento 2", type: "Acampamento", price: 89.90, isExclusive: true },
  { name: "Evento 3", type: "Caminhada", price: 84.90, isExclusive: false },
  { name: "Evento 4", type: "Olimpíadas", price: 84.90, isExclusive: false },
  { name: "Evento 5", type: "Vigília", price: 79.90, isExclusive: true },
  { name: "Evento 6", type: "Trilha", price: 89.90, isExclusive: false },
  { name: "Evento 7", type: "Retiro", price: 84.90, isExclusive: false },
  { name: "Evento 8", type: "Encontro", price: 94.90, isExclusive: false },
  { name: "Evento 9", type: "Congresso", price: 94.90, isExclusive: true },
  { name: "Evento 10", type: "Festival", price: 89.90, isExclusive: false },
  { name: "Evento 11", type: "Cavalgada", price: 89.90, isExclusive: false },
  { name: "Evento 12", type: "Aventura", price: 89.90, isExclusive: true },
];

const eventosEstampa = [
  { name: "Evento Estampa 1", type: "Campori", price: 69.90, isExclusive: false },
  { name: "Evento Estampa 2", type: "Acampamento", price: 69.90, isExclusive: true },
  { name: "Evento Estampa 3", type: "Caminhada", price: 64.90, isExclusive: false },
  { name: "Evento Estampa 4", type: "Olimpíadas", price: 64.90, isExclusive: false },
  { name: "Evento Estampa 5", type: "Vigília", price: 59.90, isExclusive: true },
  { name: "Evento Estampa 6", type: "Trilha", price: 69.90, isExclusive: false },
  { name: "Evento Estampa 7", type: "Retiro", price: 64.90, isExclusive: false },
  { name: "Evento Estampa 8", type: "Encontro", price: 74.90, isExclusive: false },
  { name: "Evento Estampa 9", type: "Congresso", price: 74.90, isExclusive: true },
  { name: "Evento Estampa 10", type: "Festival", price: 69.90, isExclusive: false },
  { name: "Evento Estampa 11", type: "Cavalgada", price: 69.90, isExclusive: false },
  { name: "Evento Estampa 12", type: "Aventura", price: 69.90, isExclusive: true },
];

// Classes items
const classesSublimacao = [
  { name: "Classe 1", type: "Amigo", price: 94.90, isExclusive: true },
  { name: "Classe 2", type: "Companheiro", price: 89.90, isExclusive: false },
  { name: "Classe 3", type: "Pesquisador", price: 89.90, isExclusive: true },
  { name: "Classe 4", type: "Pioneiro", price: 94.90, isExclusive: false },
  { name: "Classe 5", type: "Excursionista", price: 89.90, isExclusive: false },
  { name: "Classe 6", type: "Guia", price: 89.90, isExclusive: false },
  { name: "Classe 7", type: "Líder", price: 94.90, isExclusive: true },
  { name: "Classe 8", type: "Mestre", price: 84.90, isExclusive: false },
  { name: "Classe 9", type: "Conselheiro", price: 99.90, isExclusive: false },
  { name: "Classe 10", type: "Instrutor", price: 89.90, isExclusive: false },
  { name: "Classe 11", type: "Diretor", price: 94.90, isExclusive: true },
  { name: "Classe 12", type: "Capitão", price: 89.90, isExclusive: false },
];

const classesEstampa = [
  { name: "Classe Estampa 1", type: "Amigo", price: 74.90, isExclusive: true },
  { name: "Classe Estampa 2", type: "Companheiro", price: 69.90, isExclusive: false },
  { name: "Classe Estampa 3", type: "Pesquisador", price: 69.90, isExclusive: true },
  { name: "Classe Estampa 4", type: "Pioneiro", price: 74.90, isExclusive: false },
  { name: "Classe Estampa 5", type: "Excursionista", price: 69.90, isExclusive: false },
  { name: "Classe Estampa 6", type: "Guia", price: 69.90, isExclusive: false },
  { name: "Classe Estampa 7", type: "Líder", price: 74.90, isExclusive: true },
  { name: "Classe Estampa 8", type: "Mestre", price: 64.90, isExclusive: false },
  { name: "Classe Estampa 9", type: "Conselheiro", price: 79.90, isExclusive: false },
  { name: "Classe Estampa 10", type: "Instrutor", price: 69.90, isExclusive: false },
  { name: "Classe Estampa 11", type: "Diretor", price: 74.90, isExclusive: true },
  { name: "Classe Estampa 12", type: "Capitão", price: 69.90, isExclusive: false },
];

const inclusos = [
  { icon: Users, title: "Nome do Clube", description: "Já incluso no preço base", included: true },
  { icon: Shirt, title: "Nome Individual", description: "Já incluso no preço base", included: true },
  { icon: Compass, title: "Logo do Clube", description: "Já incluso no preço base", included: true },
];

const extras = [
  { icon: Zap, title: "Design Exclusivo", price: "+R$ 30,00" },
];

const faqItems = [
  { question: "Qual o prazo de entrega para camisetas de Desbravadores?", answer: "O prazo de entrega varia de 7 a 15 dias úteis, dependendo da quantidade e complexidade do pedido." },
  { question: "Qual a quantidade mínima de peças?", answer: "A quantidade mínima é de 10 peças por modelo. Consulte-nos para pedidos menores." },
  { question: "Posso personalizar com o logo do meu clube?", answer: "Sim! Todas as camisetas incluem a personalização com o logo do seu clube sem custo adicional." },
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

const Desbravador = () => {
  const [tipoSelecionado, setTipoSelecionado] = useState<TipoModelo>("Sublimações");
  const [visibleClubes, setVisibleClubes] = useState(6);
  const [visibleEventos, setVisibleEventos] = useState(6);
  const [visibleClasses, setVisibleClasses] = useState(6);

  const bestSellers = tipoSelecionado === "Sublimações" ? bestSellersSublimacao : bestSellersEstampa;
  const clubes = tipoSelecionado === "Sublimações" ? clubesSublimacao : clubesEstampa;
  const eventos = tipoSelecionado === "Sublimações" ? eventosSublimacao : eventosEstampa;
  const classes = tipoSelecionado === "Sublimações" ? classesSublimacao : classesEstampa;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Banner Image */}
        <div className="w-full aspect-[16/9] bg-gradient-to-br from-[#0038a8] to-[#0059fa] flex items-center justify-center">
          <span className="text-white/30 text-sm font-medium">BANNER_DESBRAVADOR</span>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 pt-8 pb-4">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#1a4fc9]/60 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-2">
              <Compass className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Camisetas de Desbravadores</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-black text-white text-center leading-tight mb-6">
            Camisetas para<br />Desbravadores
          </h1>

          {/* Description */}
          <p className="text-white/90 text-center text-lg font-medium leading-relaxed mb-8 max-w-md mx-auto">
            Modelos exclusivos para clubes, eventos e classes de desbravadores com qualidade premium.
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

        {/* Type Selector */}
        <section className="bg-background px-4 py-6">
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setTipoSelecionado("Sublimações")}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                tipoSelecionado === "Sublimações"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Sublimações
            </button>
            <button
              onClick={() => setTipoSelecionado("Estampas")}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                tipoSelecionado === "Estampas"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Estampas
            </button>
          </div>
        </section>

        {/* Best Sellers Carousel Section */}
        <section className="bg-background py-10 overflow-hidden">
          <div className="px-4">
            <h2 className="text-3xl font-black text-[#2563eb] text-center leading-tight mb-4">
              Modelos Mais<br />Vendidos
            </h2>
            <p className="text-foreground/70 text-center text-base leading-relaxed mb-8 max-w-md mx-auto">
              Confira os modelos que fizeram o maior sucesso entre os clubes.
            </p>
          </div>

          <BestSellersCarousel items={bestSellers} />
        </section>

        <WaveDivider variant="white-to-blue" />

        {/* Clubes Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 py-10">
          <h2 className="text-3xl font-black text-white text-center leading-tight mb-3">
            Clubes
          </h2>
          <p className="text-white/80 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Modelos personalizados para cada clube
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {clubes.slice(0, visibleClubes).map((item, index) => (
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

          {visibleClubes < clubes.length && (
            <button 
              onClick={() => setVisibleClubes(prev => Math.min(prev + 6, clubes.length))}
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
            Camisetas para Campori, acampamentos e mais
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

        {/* Classes Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 py-10">
          <h2 className="text-3xl font-black text-white text-center leading-tight mb-3">
            Classes
          </h2>
          <p className="text-white/80 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Amigo, Companheiro, Pesquisador e mais
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {classes.slice(0, visibleClasses).map((item, index) => (
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

          {visibleClasses < classes.length && (
            <button 
              onClick={() => setVisibleClasses(prev => Math.min(prev + 6, classes.length))}
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
                  <h3 className="font-bold text-[#1e40af]">{item.title} <span className="font-extrabold">{item.price}</span></h3>
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
              Pronto para criar a camiseta do seu clube?
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

export default Desbravador;
