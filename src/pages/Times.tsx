import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";
import { Sparkles, ArrowRight, Users, Shirt, MessageCircle, Zap, Crown, Star, Trophy } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type TipoModelo = "Sublimações" | "Estampas";

const stats = [
  { value: "5+", label: "Anos no Mercado" },
  { value: "800+", label: "Times Atendidos" },
  { value: "98%", label: "Satisfação" },
];

const bestSellersSublimacao = [
  { name: "Time Best Seller 1", sales: "450+ vendidos", price: 89.90, isExclusive: true },
  { name: "Time Best Seller 2", sales: "380+ vendidos", price: 94.90, isExclusive: false },
  { name: "Time Best Seller 3", sales: "320+ vendidos", price: 79.90, isExclusive: false },
  { name: "Time Best Seller 4", sales: "410+ vendidos", price: 84.90, isExclusive: true },
  { name: "Time Best Seller 5", sales: "290+ vendidos", price: 89.90, isExclusive: false },
  { name: "Time Best Seller 6", sales: "350+ vendidos", price: 94.90, isExclusive: false },
];

const bestSellersEstampa = [
  { name: "Estampa Time 1", sales: "520+ vendidos", price: 69.90, isExclusive: true },
  { name: "Estampa Time 2", sales: "480+ vendidos", price: 74.90, isExclusive: false },
  { name: "Estampa Time 3", sales: "390+ vendidos", price: 64.90, isExclusive: false },
  { name: "Estampa Time 4", sales: "440+ vendidos", price: 69.90, isExclusive: true },
  { name: "Estampa Time 5", sales: "360+ vendidos", price: 74.90, isExclusive: false },
  { name: "Estampa Time 6", sales: "410+ vendidos", price: 69.90, isExclusive: false },
];

// Futebol items
const futebolSublimacao = [
  { name: "Futebol 1", type: "Flamengo", price: 89.90, isExclusive: true },
  { name: "Futebol 2", type: "Corinthians", price: 89.90, isExclusive: false },
  { name: "Futebol 3", type: "Palmeiras", price: 94.90, isExclusive: false },
  { name: "Futebol 4", type: "São Paulo", price: 89.90, isExclusive: true },
  { name: "Futebol 5", type: "Santos", price: 94.90, isExclusive: false },
  { name: "Futebol 6", type: "Grêmio", price: 89.90, isExclusive: false },
  { name: "Futebol 7", type: "Internacional", price: 84.90, isExclusive: false },
  { name: "Futebol 8", type: "Cruzeiro", price: 99.90, isExclusive: true },
  { name: "Futebol 9", type: "Atlético-MG", price: 99.90, isExclusive: false },
  { name: "Futebol 10", type: "Vasco", price: 89.90, isExclusive: false },
  { name: "Futebol 11", type: "Botafogo", price: 89.90, isExclusive: true },
  { name: "Futebol 12", type: "Fluminense", price: 89.90, isExclusive: false },
];

const futebolEstampa = [
  { name: "Futebol Estampa 1", type: "Flamengo", price: 69.90, isExclusive: true },
  { name: "Futebol Estampa 2", type: "Corinthians", price: 69.90, isExclusive: false },
  { name: "Futebol Estampa 3", type: "Palmeiras", price: 74.90, isExclusive: false },
  { name: "Futebol Estampa 4", type: "São Paulo", price: 69.90, isExclusive: true },
  { name: "Futebol Estampa 5", type: "Santos", price: 74.90, isExclusive: false },
  { name: "Futebol Estampa 6", type: "Grêmio", price: 69.90, isExclusive: false },
  { name: "Futebol Estampa 7", type: "Internacional", price: 64.90, isExclusive: false },
  { name: "Futebol Estampa 8", type: "Cruzeiro", price: 79.90, isExclusive: true },
  { name: "Futebol Estampa 9", type: "Atlético-MG", price: 79.90, isExclusive: false },
  { name: "Futebol Estampa 10", type: "Vasco", price: 69.90, isExclusive: false },
  { name: "Futebol Estampa 11", type: "Botafogo", price: 69.90, isExclusive: true },
  { name: "Futebol Estampa 12", type: "Fluminense", price: 69.90, isExclusive: false },
];

// Basquete items
const basqueteSublimacao = [
  { name: "Basquete 1", type: "Lakers", price: 89.90, isExclusive: false },
  { name: "Basquete 2", type: "Bulls", price: 89.90, isExclusive: true },
  { name: "Basquete 3", type: "Warriors", price: 84.90, isExclusive: false },
  { name: "Basquete 4", type: "Celtics", price: 84.90, isExclusive: false },
  { name: "Basquete 5", type: "Heat", price: 79.90, isExclusive: true },
  { name: "Basquete 6", type: "Nets", price: 89.90, isExclusive: false },
  { name: "Basquete 7", type: "Knicks", price: 84.90, isExclusive: false },
  { name: "Basquete 8", type: "Spurs", price: 94.90, isExclusive: false },
  { name: "Basquete 9", type: "Mavericks", price: 94.90, isExclusive: true },
  { name: "Basquete 10", type: "Clippers", price: 89.90, isExclusive: false },
  { name: "Basquete 11", type: "76ers", price: 89.90, isExclusive: false },
  { name: "Basquete 12", type: "Raptors", price: 89.90, isExclusive: true },
];

const basqueteEstampa = [
  { name: "Basquete Estampa 1", type: "Lakers", price: 69.90, isExclusive: false },
  { name: "Basquete Estampa 2", type: "Bulls", price: 69.90, isExclusive: true },
  { name: "Basquete Estampa 3", type: "Warriors", price: 64.90, isExclusive: false },
  { name: "Basquete Estampa 4", type: "Celtics", price: 64.90, isExclusive: false },
  { name: "Basquete Estampa 5", type: "Heat", price: 59.90, isExclusive: true },
  { name: "Basquete Estampa 6", type: "Nets", price: 69.90, isExclusive: false },
  { name: "Basquete Estampa 7", type: "Knicks", price: 64.90, isExclusive: false },
  { name: "Basquete Estampa 8", type: "Spurs", price: 74.90, isExclusive: false },
  { name: "Basquete Estampa 9", type: "Mavericks", price: 74.90, isExclusive: true },
  { name: "Basquete Estampa 10", type: "Clippers", price: 69.90, isExclusive: false },
  { name: "Basquete Estampa 11", type: "76ers", price: 69.90, isExclusive: false },
  { name: "Basquete Estampa 12", type: "Raptors", price: 69.90, isExclusive: true },
];

// Outros Esportes items
const outrosSublimacao = [
  { name: "Esporte 1", type: "Vôlei", price: 94.90, isExclusive: true },
  { name: "Esporte 2", type: "Handball", price: 89.90, isExclusive: false },
  { name: "Esporte 3", type: "Futsal", price: 89.90, isExclusive: true },
  { name: "Esporte 4", type: "Rugby", price: 94.90, isExclusive: false },
  { name: "Esporte 5", type: "Tênis", price: 89.90, isExclusive: false },
  { name: "Esporte 6", type: "Natação", price: 89.90, isExclusive: false },
  { name: "Esporte 7", type: "Atletismo", price: 94.90, isExclusive: true },
  { name: "Esporte 8", type: "Ciclismo", price: 84.90, isExclusive: false },
  { name: "Esporte 9", type: "MMA", price: 99.90, isExclusive: false },
  { name: "Esporte 10", type: "Boxe", price: 89.90, isExclusive: false },
  { name: "Esporte 11", type: "Jiu-Jitsu", price: 94.90, isExclusive: true },
  { name: "Esporte 12", type: "Crossfit", price: 89.90, isExclusive: false },
];

const outrosEstampa = [
  { name: "Esporte Estampa 1", type: "Vôlei", price: 74.90, isExclusive: true },
  { name: "Esporte Estampa 2", type: "Handball", price: 69.90, isExclusive: false },
  { name: "Esporte Estampa 3", type: "Futsal", price: 69.90, isExclusive: true },
  { name: "Esporte Estampa 4", type: "Rugby", price: 74.90, isExclusive: false },
  { name: "Esporte Estampa 5", type: "Tênis", price: 69.90, isExclusive: false },
  { name: "Esporte Estampa 6", type: "Natação", price: 69.90, isExclusive: false },
  { name: "Esporte Estampa 7", type: "Atletismo", price: 74.90, isExclusive: true },
  { name: "Esporte Estampa 8", type: "Ciclismo", price: 64.90, isExclusive: false },
  { name: "Esporte Estampa 9", type: "MMA", price: 79.90, isExclusive: false },
  { name: "Esporte Estampa 10", type: "Boxe", price: 69.90, isExclusive: false },
  { name: "Esporte Estampa 11", type: "Jiu-Jitsu", price: 74.90, isExclusive: true },
  { name: "Esporte Estampa 12", type: "Crossfit", price: 69.90, isExclusive: false },
];

const inclusos = [
  { icon: Users, title: "Nome do Time", description: "Já incluso no preço base", included: true },
  { icon: Shirt, title: "Número Individual", description: "Já incluso no preço base", included: true },
  { icon: Trophy, title: "Escudo do Time", description: "Já incluso no preço base", included: true },
];

const extras = [
  { icon: Zap, title: "Design Exclusivo", price: "+R$ 30,00" },
];

const faqItems = [
  { question: "Qual o prazo de entrega para camisetas de Times?", answer: "O prazo de entrega varia de 7 a 15 dias úteis, dependendo da quantidade e complexidade do pedido." },
  { question: "Qual a quantidade mínima de peças?", answer: "A quantidade mínima é de 10 peças por modelo. Consulte-nos para pedidos menores." },
  { question: "Posso personalizar com o escudo do meu time?", answer: "Sim! Todas as camisetas incluem a personalização com o escudo do seu time sem custo adicional." },
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

const Times = () => {
  const [tipoSelecionado, setTipoSelecionado] = useState<TipoModelo>("Sublimações");
  const [visibleFutebol, setVisibleFutebol] = useState(6);
  const [visibleBasquete, setVisibleBasquete] = useState(6);
  const [visibleOutros, setVisibleOutros] = useState(6);

  const bestSellers = tipoSelecionado === "Sublimações" ? bestSellersSublimacao : bestSellersEstampa;
  const futebol = tipoSelecionado === "Sublimações" ? futebolSublimacao : futebolEstampa;
  const basquete = tipoSelecionado === "Sublimações" ? basqueteSublimacao : basqueteEstampa;
  const outros = tipoSelecionado === "Sublimações" ? outrosSublimacao : outrosEstampa;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Banner Image */}
        <div className="w-full aspect-[16/9] bg-gradient-to-br from-[#0038a8] to-[#0059fa] flex items-center justify-center">
          <span className="text-white/30 text-sm font-medium">BANNER_TIMES</span>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 pt-8 pb-4">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#1a4fc9]/60 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Camisetas de Times</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-black text-white text-center leading-tight mb-6">
            Camisetas de<br />Times
          </h1>

          {/* Description */}
          <p className="text-white/90 text-center text-lg font-medium leading-relaxed mb-8 max-w-md mx-auto">
            Vista a camisa do seu time favorito! Futebol, basquete e muito mais com qualidade premium.
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
              Confira os times que fizeram o maior sucesso entre nossos clientes.
            </p>
          </div>

          <BestSellersCarousel items={bestSellers} />
        </section>

        <WaveDivider variant="white-to-blue" />

        {/* Futebol Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 py-10">
          <h2 className="text-3xl font-black text-white text-center leading-tight mb-3">
            Futebol
          </h2>
          <p className="text-white/80 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Os maiores times do Brasil e do mundo
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {futebol.slice(0, visibleFutebol).map((item, index) => (
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

          {visibleFutebol < futebol.length && (
            <button 
              onClick={() => setVisibleFutebol(prev => Math.min(prev + 6, futebol.length))}
              className="w-full bg-white hover:bg-white/95 text-[#1e40af] py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg"
            >
              <span>Ver Mais</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </section>

        <WaveDivider variant="blue-to-white" />

        {/* Basquete Section */}
        <section className="bg-background px-4 py-10">
          <h2 className="text-3xl font-black text-[#2563eb] text-center leading-tight mb-3">
            Basquete
          </h2>
          <p className="text-foreground/70 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            NBA e os melhores times de basquete
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {basquete.slice(0, visibleBasquete).map((item, index) => (
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

          {visibleBasquete < basquete.length && (
            <button 
              onClick={() => setVisibleBasquete(prev => Math.min(prev + 6, basquete.length))}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg"
            >
              <span>Ver Mais</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </section>

        <WaveDivider variant="white-to-blue" />

        {/* Outros Esportes Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 py-10">
          <h2 className="text-3xl font-black text-white text-center leading-tight mb-3">
            Outros Esportes
          </h2>
          <p className="text-white/80 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Vôlei, Handball, MMA e muito mais
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {outros.slice(0, visibleOutros).map((item, index) => (
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

          {visibleOutros < outros.length && (
            <button 
              onClick={() => setVisibleOutros(prev => Math.min(prev + 6, outros.length))}
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
              Pronto para vestir a camisa do seu time?
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

export default Times;
