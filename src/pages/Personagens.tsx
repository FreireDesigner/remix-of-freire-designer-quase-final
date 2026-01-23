import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";
import { Sparkles, ArrowRight, Users, Shirt, MessageCircle, Zap, Crown, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type TipoModelo = "Sublimações" | "Estampas";

const stats = [
  { value: "5+", label: "Anos no Mercado" },
  { value: "1000+", label: "Personagens" },
  { value: "98%", label: "Satisfação" },
];

const bestSellersSublimacao = [
  { name: "Personagem Best Seller 1", sales: "450+ vendidos", price: 89.90, isExclusive: true },
  { name: "Personagem Best Seller 2", sales: "380+ vendidos", price: 94.90, isExclusive: false },
  { name: "Personagem Best Seller 3", sales: "320+ vendidos", price: 79.90, isExclusive: false },
  { name: "Personagem Best Seller 4", sales: "410+ vendidos", price: 84.90, isExclusive: true },
  { name: "Personagem Best Seller 5", sales: "290+ vendidos", price: 89.90, isExclusive: false },
  { name: "Personagem Best Seller 6", sales: "350+ vendidos", price: 94.90, isExclusive: false },
];

const bestSellersEstampa = [
  { name: "Estampa Best Seller 1", sales: "520+ vendidos", price: 69.90, isExclusive: true },
  { name: "Estampa Best Seller 2", sales: "480+ vendidos", price: 74.90, isExclusive: false },
  { name: "Estampa Best Seller 3", sales: "390+ vendidos", price: 64.90, isExclusive: false },
  { name: "Estampa Best Seller 4", sales: "440+ vendidos", price: 69.90, isExclusive: true },
  { name: "Estampa Best Seller 5", sales: "360+ vendidos", price: 74.90, isExclusive: false },
  { name: "Estampa Best Seller 6", sales: "410+ vendidos", price: 69.90, isExclusive: false },
];

const popSublimacao = [
  { name: "Pop Culture 1", type: "Marvel", price: 89.90, isExclusive: true },
  { name: "Pop Culture 2", type: "DC Comics", price: 89.90, isExclusive: false },
  { name: "Pop Culture 3", type: "Star Wars", price: 94.90, isExclusive: false },
  { name: "Pop Culture 4", type: "Harry Potter", price: 89.90, isExclusive: true },
  { name: "Pop Culture 5", type: "Stranger Things", price: 94.90, isExclusive: false },
  { name: "Pop Culture 6", type: "Breaking Bad", price: 89.90, isExclusive: false },
  { name: "Pop Culture 7", type: "Friends", price: 84.90, isExclusive: false },
  { name: "Pop Culture 8", type: "The Office", price: 99.90, isExclusive: true },
  { name: "Pop Culture 9", type: "Disney", price: 99.90, isExclusive: false },
  { name: "Pop Culture 10", type: "Pixar", price: 89.90, isExclusive: false },
];

const popEstampa = [
  { name: "Pop Estampa 1", type: "Marvel", price: 69.90, isExclusive: true },
  { name: "Pop Estampa 2", type: "DC Comics", price: 69.90, isExclusive: false },
  { name: "Pop Estampa 3", type: "Star Wars", price: 74.90, isExclusive: false },
  { name: "Pop Estampa 4", type: "Harry Potter", price: 69.90, isExclusive: true },
  { name: "Pop Estampa 5", type: "Stranger Things", price: 74.90, isExclusive: false },
  { name: "Pop Estampa 6", type: "Breaking Bad", price: 69.90, isExclusive: false },
  { name: "Pop Estampa 7", type: "Friends", price: 64.90, isExclusive: false },
  { name: "Pop Estampa 8", type: "The Office", price: 79.90, isExclusive: true },
  { name: "Pop Estampa 9", type: "Disney", price: 79.90, isExclusive: false },
  { name: "Pop Estampa 10", type: "Pixar", price: 69.90, isExclusive: false },
];

const animesSublimacao = [
  { name: "Anime 1", type: "Naruto", price: 89.90, isExclusive: false },
  { name: "Anime 2", type: "Dragon Ball", price: 89.90, isExclusive: true },
  { name: "Anime 3", type: "One Piece", price: 84.90, isExclusive: false },
  { name: "Anime 4", type: "Demon Slayer", price: 84.90, isExclusive: false },
  { name: "Anime 5", type: "Attack on Titan", price: 79.90, isExclusive: true },
  { name: "Anime 6", type: "My Hero Academia", price: 89.90, isExclusive: false },
  { name: "Anime 7", type: "Jujutsu Kaisen", price: 84.90, isExclusive: false },
  { name: "Anime 8", type: "Death Note", price: 94.90, isExclusive: false },
  { name: "Anime 9", type: "Fullmetal Alchemist", price: 94.90, isExclusive: true },
  { name: "Anime 10", type: "Hunter x Hunter", price: 89.90, isExclusive: false },
];

const animesEstampa = [
  { name: "Anime Estampa 1", type: "Naruto", price: 69.90, isExclusive: false },
  { name: "Anime Estampa 2", type: "Dragon Ball", price: 69.90, isExclusive: true },
  { name: "Anime Estampa 3", type: "One Piece", price: 64.90, isExclusive: false },
  { name: "Anime Estampa 4", type: "Demon Slayer", price: 64.90, isExclusive: false },
  { name: "Anime Estampa 5", type: "Attack on Titan", price: 59.90, isExclusive: true },
  { name: "Anime Estampa 6", type: "My Hero Academia", price: 69.90, isExclusive: false },
  { name: "Anime Estampa 7", type: "Jujutsu Kaisen", price: 64.90, isExclusive: false },
  { name: "Anime Estampa 8", type: "Death Note", price: 74.90, isExclusive: false },
  { name: "Anime Estampa 9", type: "Fullmetal Alchemist", price: 74.90, isExclusive: true },
  { name: "Anime Estampa 10", type: "Hunter x Hunter", price: 69.90, isExclusive: false },
];

const gamesSublimacao = [
  { name: "Game 1", type: "Minecraft", price: 94.90, isExclusive: true },
  { name: "Game 2", type: "Fortnite", price: 89.90, isExclusive: false },
  { name: "Game 3", type: "GTA", price: 89.90, isExclusive: true },
  { name: "Game 4", type: "FIFA", price: 94.90, isExclusive: false },
  { name: "Game 5", type: "Call of Duty", price: 89.90, isExclusive: false },
  { name: "Game 6", type: "League of Legends", price: 89.90, isExclusive: false },
  { name: "Game 7", type: "Valorant", price: 94.90, isExclusive: true },
  { name: "Game 8", type: "CS:GO", price: 84.90, isExclusive: false },
  { name: "Game 9", type: "Free Fire", price: 99.90, isExclusive: false },
  { name: "Game 10", type: "Roblox", price: 89.90, isExclusive: false },
];

const gamesEstampa = [
  { name: "Game Estampa 1", type: "Minecraft", price: 74.90, isExclusive: true },
  { name: "Game Estampa 2", type: "Fortnite", price: 69.90, isExclusive: false },
  { name: "Game Estampa 3", type: "GTA", price: 69.90, isExclusive: true },
  { name: "Game Estampa 4", type: "FIFA", price: 74.90, isExclusive: false },
  { name: "Game Estampa 5", type: "Call of Duty", price: 69.90, isExclusive: false },
  { name: "Game Estampa 6", type: "League of Legends", price: 69.90, isExclusive: false },
  { name: "Game Estampa 7", type: "Valorant", price: 74.90, isExclusive: true },
  { name: "Game Estampa 8", type: "CS:GO", price: 64.90, isExclusive: false },
  { name: "Game Estampa 9", type: "Free Fire", price: 79.90, isExclusive: false },
  { name: "Game Estampa 10", type: "Roblox", price: 69.90, isExclusive: false },
];

const inclusos = [
  { icon: Users, title: "Nome da Turma", description: "Já incluso no preço base", included: true },
  { icon: Shirt, title: "Número Individual", description: "Já incluso no preço base", included: true },
  { icon: MessageCircle, title: "Logo/Escudo", description: "Já incluso no preço base", included: true },
];

const extras = [
  { icon: Zap, title: "Design Exclusivo", price: "+R$ 30,00" },
];

const faqItems = [
  { question: "Qual o prazo de entrega para camisetas de Personagens?", answer: "O prazo de entrega varia de 7 a 15 dias úteis, dependendo da quantidade e complexidade do pedido." },
  { question: "Qual a quantidade mínima de peças?", answer: "A quantidade mínima é de 10 peças por modelo. Consulte-nos para pedidos menores." },
  { question: "Posso solicitar um personagem específico?", answer: "Sim! Você pode solicitar qualquer personagem e nossa equipe criará o design perfeito para você." },
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

const Personagens = () => {
  const [tipoSelecionado, setTipoSelecionado] = useState<TipoModelo>("Sublimações");
  const [visiblePop, setVisiblePop] = useState(4);
  const [visibleAnimes, setVisibleAnimes] = useState(4);
  const [visibleGames, setVisibleGames] = useState(4);

  const bestSellers = tipoSelecionado === "Sublimações" ? bestSellersSublimacao : bestSellersEstampa;
  const pop = tipoSelecionado === "Sublimações" ? popSublimacao : popEstampa;
  const animes = tipoSelecionado === "Sublimações" ? animesSublimacao : animesEstampa;
  const games = tipoSelecionado === "Sublimações" ? gamesSublimacao : gamesEstampa;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Banner Image */}
        <div className="w-full aspect-[16/9] bg-gradient-to-br from-[#0038a8] to-[#0059fa] flex items-center justify-center">
          <span className="text-white/30 text-sm font-medium">BANNER_PERSONAGENS</span>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 pt-8 pb-4">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#1a4fc9]/60 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Camisetas de Personagens</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-black text-white text-center leading-tight mb-6">
            Camisetas de<br />Personagens
          </h1>

          {/* Description */}
          <p className="text-white/90 text-center text-lg font-medium leading-relaxed mb-8 max-w-md mx-auto">
            Vista seus personagens favoritos! Heróis, animes, games e muito mais com qualidade premium.
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
              Confira os personagens que fizeram o maior sucesso entre nossos clientes.
            </p>
          </div>

          <BestSellersCarousel items={bestSellers} />
        </section>

        <WaveDivider variant="white-to-blue" />

        {/* Pop Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 py-10">
          <h2 className="text-3xl font-black text-white text-center leading-tight mb-3">
            Cultura Pop
          </h2>
          <p className="text-white/80 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Séries, filmes e ícones da cultura pop
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {pop.slice(0, visiblePop).map((item, index) => (
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

          {visiblePop < pop.length && (
            <button 
              onClick={() => setVisiblePop(prev => Math.min(prev + 6, pop.length))}
              className="w-full bg-white hover:bg-white/95 text-[#1e40af] py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg"
            >
              <span>Ver Mais</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </section>

        <WaveDivider variant="blue-to-white" />

        {/* Animes Section */}
        <section className="bg-background px-4 py-10">
          <h2 className="text-3xl font-black text-[#2563eb] text-center leading-tight mb-3">
            Animes
          </h2>
          <p className="text-foreground/70 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Os melhores animes em camisetas exclusivas
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {animes.slice(0, visibleAnimes).map((item, index) => (
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

          {visibleAnimes < animes.length && (
            <button 
              onClick={() => setVisibleAnimes(prev => Math.min(prev + 6, animes.length))}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg"
            >
              <span>Ver Mais</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </section>

        <WaveDivider variant="white-to-blue" />

        {/* Games Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 py-10">
          <h2 className="text-3xl font-black text-white text-center leading-tight mb-3">
            Games
          </h2>
          <p className="text-white/80 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Seus jogos favoritos em camisetas incríveis
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {games.slice(0, visibleGames).map((item, index) => (
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

          {visibleGames < games.length && (
            <button 
              onClick={() => setVisibleGames(prev => Math.min(prev + 6, games.length))}
              className="w-full bg-white hover:bg-white/95 text-[#1e40af] py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg"
            >
              <span>Ver Mais</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </section>

        <WaveDivider variant="blue-to-white" />

        {/* O que está Incluso Section */}
        <section className="bg-background px-4 py-10">
          <h2 className="text-3xl font-black text-foreground text-center leading-tight mb-3">
            O que está Incluso?
          </h2>
          <p className="text-foreground/70 text-center text-base leading-relaxed mb-8 max-w-md mx-auto">
            Veja tudo que você recebe no pacote básico e as opções extras disponíveis
          </p>

          <div className="space-y-4 mb-4">
            {inclusos.map((item, index) => (
              <div key={index} className="bg-[#ecfdf5] border-2 border-[#22c55e] rounded-2xl p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#22c55e] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-foreground text-base">{item.title}</h3>
                    <span className="text-[#22c55e] font-semibold text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Incluso
                    </span>
                  </div>
                  <p className="text-foreground/60 text-sm mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {extras.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-[#e6f0ff] to-[#cce0ff] border-2 border-[#2563eb] rounded-2xl p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e40af] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-foreground text-base">{item.title}</h3>
                    <span className="text-[#1e40af] font-bold text-base whitespace-nowrap">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-background px-4 py-10">
          <h2 className="text-3xl font-black text-foreground text-center leading-tight mb-3">
            Dúvidas Frequentes
          </h2>
          <p className="text-foreground/70 text-center text-base leading-relaxed mb-8 max-w-md mx-auto">
            Tudo que você precisa saber sobre camisetas de Personagens
          </p>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-border/30 px-5 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground py-5 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 py-14 text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-white" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-2xl font-black text-white leading-tight mb-4">
            Não encontrou seu<br />personagem favorito?
          </h2>
          
          <p className="text-white/80 text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Fale com nosso Designer agora e receba sua proposta personalizada!
          </p>

          <button className="w-full max-w-sm bg-white hover:bg-white/95 text-[#1e40af] py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg mx-auto">
            <MessageCircle className="w-5 h-5" />
            <span>Solicitar Meu Personagem</span>
          </button>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Personagens;
