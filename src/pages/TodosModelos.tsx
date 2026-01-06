import { useState, useEffect, useRef } from "react";
import { Sparkles, ChevronDown, Crown, MessageCircle, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";

type CategoryType = "Sublimações" | "Estampas";

interface Modelo {
  id: number;
  categoria: string;
  nome: string;
  descricao: string;
  preco: number;
  precoOriginal: number;
  desconto: number;
  isNew: boolean;
  isExclusive: boolean;
}

const modelosSublimacao: Modelo[] = [
  // Interclasse
  { id: 1, categoria: "Interclasse", nome: "Interclasse Modelo 1", descricao: "Design exclusivo com...", preco: 45.90, precoOriginal: 54.16, desconto: 15, isNew: false, isExclusive: false },
  { id: 2, categoria: "Interclasse", nome: "Interclasse Modelo 2", descricao: "Design exclusivo com...", preco: 47.90, precoOriginal: 56.52, desconto: 15, isNew: false, isExclusive: true },
  { id: 3, categoria: "Interclasse", nome: "Interclasse Modelo 3", descricao: "Design exclusivo com...", preco: 42.90, precoOriginal: 50.50, desconto: 15, isNew: true, isExclusive: false },
  { id: 4, categoria: "Interclasse", nome: "Interclasse Modelo 4", descricao: "Design exclusivo com...", preco: 49.90, precoOriginal: 58.80, desconto: 15, isNew: true, isExclusive: true },
  { id: 5, categoria: "Interclasse", nome: "Interclasse Modelo 5", descricao: "Design exclusivo com...", preco: 44.90, precoOriginal: 52.90, desconto: 15, isNew: false, isExclusive: false },
  { id: 6, categoria: "Interclasse", nome: "Interclasse Modelo 6", descricao: "Design exclusivo com...", preco: 46.90, precoOriginal: 55.20, desconto: 15, isNew: false, isExclusive: false },
  // Personagens
  { id: 7, categoria: "Personagens", nome: "Personagem 1", descricao: "Design exclusivo com...", preco: 49.90, precoOriginal: 58.88, desconto: 15, isNew: true, isExclusive: false },
  { id: 8, categoria: "Personagens", nome: "Personagem 2", descricao: "Design exclusivo com...", preco: 51.90, precoOriginal: 61.24, desconto: 15, isNew: false, isExclusive: true },
  { id: 9, categoria: "Personagens", nome: "Personagem 3", descricao: "Design exclusivo com...", preco: 48.90, precoOriginal: 57.60, desconto: 15, isNew: false, isExclusive: false },
  { id: 10, categoria: "Personagens", nome: "Personagem 4", descricao: "Design exclusivo com...", preco: 52.90, precoOriginal: 62.30, desconto: 15, isNew: true, isExclusive: false },
  { id: 11, categoria: "Personagens", nome: "Personagem 5", descricao: "Design exclusivo com...", preco: 47.90, precoOriginal: 56.40, desconto: 15, isNew: false, isExclusive: true },
  { id: 12, categoria: "Personagens", nome: "Personagem 6", descricao: "Design exclusivo com...", preco: 50.90, precoOriginal: 59.95, desconto: 15, isNew: false, isExclusive: false },
  // Desbravadores
  { id: 13, categoria: "Desbravadores", nome: "Desbravadores 1", descricao: "Design exclusivo com...", preco: 47.90, precoOriginal: 56.52, desconto: 15, isNew: false, isExclusive: true },
  { id: 14, categoria: "Desbravadores", nome: "Desbravadores 2", descricao: "Design exclusivo com...", preco: 49.90, precoOriginal: 58.88, desconto: 15, isNew: false, isExclusive: false },
  { id: 15, categoria: "Desbravadores", nome: "Desbravadores 3", descricao: "Design exclusivo com...", preco: 45.90, precoOriginal: 54.10, desconto: 15, isNew: true, isExclusive: false },
  { id: 16, categoria: "Desbravadores", nome: "Desbravadores 4", descricao: "Design exclusivo com...", preco: 51.90, precoOriginal: 61.24, desconto: 15, isNew: false, isExclusive: true },
  { id: 17, categoria: "Desbravadores", nome: "Desbravadores 5", descricao: "Design exclusivo com...", preco: 46.90, precoOriginal: 55.30, desconto: 15, isNew: true, isExclusive: false },
  { id: 18, categoria: "Desbravadores", nome: "Desbravadores 6", descricao: "Design exclusivo com...", preco: 48.90, precoOriginal: 57.60, desconto: 15, isNew: false, isExclusive: false },
  // Times Esportivos
  { id: 19, categoria: "Times Esportivos", nome: "Time Esportivo 1", descricao: "Design exclusivo com...", preco: 52.90, precoOriginal: 62.42, desconto: 15, isNew: false, isExclusive: false },
  { id: 20, categoria: "Times Esportivos", nome: "Time Esportivo 2", descricao: "Design exclusivo com...", preco: 54.90, precoOriginal: 64.78, desconto: 15, isNew: false, isExclusive: false },
  { id: 21, categoria: "Times Esportivos", nome: "Time Esportivo 3", descricao: "Design exclusivo com...", preco: 50.90, precoOriginal: 60.00, desconto: 15, isNew: true, isExclusive: true },
  { id: 22, categoria: "Times Esportivos", nome: "Time Esportivo 4", descricao: "Design exclusivo com...", preco: 56.90, precoOriginal: 67.10, desconto: 15, isNew: false, isExclusive: false },
  { id: 23, categoria: "Times Esportivos", nome: "Time Esportivo 5", descricao: "Design exclusivo com...", preco: 51.90, precoOriginal: 61.24, desconto: 15, isNew: false, isExclusive: true },
  { id: 24, categoria: "Times Esportivos", nome: "Time Esportivo 6", descricao: "Design exclusivo com...", preco: 53.90, precoOriginal: 63.55, desconto: 15, isNew: true, isExclusive: false },
];

const modelosEstampas: Modelo[] = [
  // Gospel
  { id: 101, categoria: "Gospel", nome: "Gospel 1", descricao: "Design exclusivo com...", preco: 39.90, precoOriginal: 47.00, desconto: 15, isNew: true, isExclusive: false },
  { id: 102, categoria: "Gospel", nome: "Gospel 2", descricao: "Design exclusivo com...", preco: 42.90, precoOriginal: 50.50, desconto: 15, isNew: false, isExclusive: true },
  { id: 103, categoria: "Gospel", nome: "Gospel 3", descricao: "Design exclusivo com...", preco: 38.90, precoOriginal: 45.80, desconto: 15, isNew: false, isExclusive: false },
  { id: 104, categoria: "Gospel", nome: "Gospel 4", descricao: "Design exclusivo com...", preco: 44.90, precoOriginal: 52.90, desconto: 15, isNew: true, isExclusive: true },
  { id: 105, categoria: "Gospel", nome: "Gospel 5", descricao: "Design exclusivo com...", preco: 40.90, precoOriginal: 48.20, desconto: 15, isNew: false, isExclusive: false },
  { id: 106, categoria: "Gospel", nome: "Gospel 6", descricao: "Design exclusivo com...", preco: 41.90, precoOriginal: 49.35, desconto: 15, isNew: false, isExclusive: false },
  // Frases
  { id: 107, categoria: "Frases", nome: "Frase 1", descricao: "Design exclusivo com...", preco: 35.90, precoOriginal: 42.30, desconto: 15, isNew: false, isExclusive: false },
  { id: 108, categoria: "Frases", nome: "Frase 2", descricao: "Design exclusivo com...", preco: 37.90, precoOriginal: 44.70, desconto: 15, isNew: true, isExclusive: true },
  { id: 109, categoria: "Frases", nome: "Frase 3", descricao: "Design exclusivo com...", preco: 34.90, precoOriginal: 41.15, desconto: 15, isNew: false, isExclusive: false },
  { id: 110, categoria: "Frases", nome: "Frase 4", descricao: "Design exclusivo com...", preco: 38.90, precoOriginal: 45.85, desconto: 15, isNew: true, isExclusive: false },
  { id: 111, categoria: "Frases", nome: "Frase 5", descricao: "Design exclusivo com...", preco: 36.90, precoOriginal: 43.50, desconto: 15, isNew: false, isExclusive: true },
  { id: 112, categoria: "Frases", nome: "Frase 6", descricao: "Design exclusivo com...", preco: 39.90, precoOriginal: 47.00, desconto: 15, isNew: false, isExclusive: false },
  // Casual
  { id: 113, categoria: "Casual", nome: "Casual 1", descricao: "Design exclusivo com...", preco: 42.90, precoOriginal: 50.55, desconto: 15, isNew: true, isExclusive: false },
  { id: 114, categoria: "Casual", nome: "Casual 2", descricao: "Design exclusivo com...", preco: 44.90, precoOriginal: 52.90, desconto: 15, isNew: false, isExclusive: true },
  { id: 115, categoria: "Casual", nome: "Casual 3", descricao: "Design exclusivo com...", preco: 41.90, precoOriginal: 49.35, desconto: 15, isNew: false, isExclusive: false },
  { id: 116, categoria: "Casual", nome: "Casual 4", descricao: "Design exclusivo com...", preco: 46.90, precoOriginal: 55.30, desconto: 15, isNew: true, isExclusive: true },
  { id: 117, categoria: "Casual", nome: "Casual 5", descricao: "Design exclusivo com...", preco: 43.90, precoOriginal: 51.75, desconto: 15, isNew: false, isExclusive: false },
  { id: 118, categoria: "Casual", nome: "Casual 6", descricao: "Design exclusivo com...", preco: 45.90, precoOriginal: 54.10, desconto: 15, isNew: false, isExclusive: false },
];

const categoriasSublimacao = ["Interclasse", "Personagens", "Desbravadores", "Times Esportivos"];
const categoriasEstampas = ["Gospel", "Frases", "Casual"];

const ModeloCard = ({ modelo }: { modelo: Modelo }) => (
  <div className={`bg-card rounded-2xl overflow-hidden shadow-sm ${modelo.isExclusive ? 'ring-2 ring-amber-400' : ''}`}>
    {/* Image Placeholder */}
    <div className="relative h-44 bg-gray-100 flex items-center justify-center">
      <span className="text-gray-400 text-sm">Imagem</span>
      
      {/* Badges */}
      {modelo.desconto > 0 && (
        <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
          {modelo.desconto}% OFF
        </span>
      )}
      {modelo.isNew && (
        <span className="absolute bottom-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
          Novo
        </span>
      )}
      {modelo.isExclusive && (
        <div className="absolute top-3 right-3 bg-amber-400 w-8 h-8 rounded-full flex items-center justify-center">
          <Crown className="w-4 h-4 text-black fill-black" />
        </div>
      )}
    </div>
    
    {/* Content */}
    <div className="p-3">
      <span className="text-[10px] text-muted-foreground uppercase tracking-wide whitespace-nowrap">
        {modelo.categoria}{modelo.isExclusive && " • EXCL."}
      </span>
      <h3 className="font-semibold text-foreground mt-1 text-sm">{modelo.nome}</h3>
      <p className="text-xs text-muted-foreground font-light truncate">{modelo.descricao}</p>
      
      <div className="flex flex-col mt-2">
        <span className="text-xs text-muted-foreground line-through">R$ {modelo.precoOriginal.toFixed(2).replace('.', ',')}</span>
        <span className="text-lg font-bold text-foreground">R$ {modelo.preco.toFixed(2).replace('.', ',')}</span>
      </div>
      
      <button className={`w-full mt-3 py-2.5 rounded-lg font-medium text-sm transition-colors ${
        modelo.isExclusive 
          ? 'bg-amber-400 text-white hover:bg-amber-500' 
          : 'bg-primary text-primary-foreground hover:bg-primary/90'
      }`}>
        Ver Detalhes
      </button>
    </div>
  </div>
);

// Continuous Carousel Component
const ContinuousCarousel = ({ modelos }: { modelos: Modelo[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Duplicate items for seamless loop
  const duplicatedModelos = [...modelos, ...modelos, ...modelos];
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    
    const animate = () => {
      if (!isHovered && scrollContainer) {
        scrollPosition += scrollSpeed;
        const itemWidth = 200; // w-48 = 192px + gap
        const totalWidth = modelos.length * itemWidth;
        
        if (scrollPosition >= totalWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered, modelos.length]);
  
  return (
    <div 
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto hide-scrollbar pb-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {duplicatedModelos.map((modelo, index) => (
        <div key={`${modelo.id}-${index}`} className="flex-shrink-0 w-48">
          <div className={`bg-card rounded-2xl overflow-hidden shadow-sm ${modelo.isExclusive ? 'ring-2 ring-amber-400' : ''}`}>
            <div className="relative h-40 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-xs">Imagem</span>
              {modelo.isNew && (
                <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                  Novo
                </span>
              )}
              {modelo.isExclusive && (
                <div className="absolute top-2 right-2 bg-amber-400 w-6 h-6 rounded-full flex items-center justify-center">
                  <Crown className="w-3 h-3 text-black fill-black" />
                </div>
              )}
            </div>
            <div className="p-3">
              <span className="text-[10px] text-muted-foreground uppercase whitespace-nowrap">{modelo.categoria}</span>
              <h3 className="font-semibold text-foreground text-sm truncate">{modelo.nome}</h3>
              <div className="flex flex-col mt-1">
                <span className="text-[10px] text-muted-foreground line-through">R$ {modelo.precoOriginal.toFixed(2).replace('.', ',')}</span>
                <span className="text-base font-bold text-foreground">R$ {modelo.preco.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TodosModelos = () => {
  const [tipoSelecionado, setTipoSelecionado] = useState<CategoryType>("Sublimações");
  const [visibleItems, setVisibleItems] = useState<Record<string, number>>({});

  const modelos = tipoSelecionado === "Sublimações" ? modelosSublimacao : modelosEstampas;
  const categorias = tipoSelecionado === "Sublimações" ? categoriasSublimacao : categoriasEstampas;

  const getVisibleCount = (categoria: string) => visibleItems[categoria] || 6;

  const handleShowMore = (categoria: string) => {
    setVisibleItems(prev => ({
      ...prev,
      [categoria]: (prev[categoria] || 6) + 6
    }));
  };

  const getModelosPorCategoria = (categoria: string) => {
    return modelos.filter(m => m.categoria === categoria);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-800 to-primary text-white px-4 py-12 text-center relative">
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Todos os Nossos<br />Modelos
        </h1>
        
        <p className="text-white/90 text-base font-light max-w-sm mx-auto">
          Escolha entre sublimações ou estampas e encontre o modelo perfeito para seu projeto
        </p>
        
        <WaveDivider variant="blue-to-white" />
      </section>

      {/* Type Selector */}
      <section className="px-4 py-8">
        <div className="flex gap-3">
          <button
            onClick={() => {
              setTipoSelecionado("Sublimações");
              setVisibleItems({});
            }}
            className={`flex-1 py-4 rounded-xl font-semibold text-base transition-colors ${
              tipoSelecionado === "Sublimações"
                ? 'bg-primary text-primary-foreground'
                : 'bg-card border-2 border-border text-foreground hover:border-primary'
            }`}
          >
            Sublimações
          </button>
          <button
            onClick={() => {
              setTipoSelecionado("Estampas");
              setVisibleItems({});
            }}
            className={`flex-1 py-4 rounded-xl font-semibold text-base transition-colors ${
              tipoSelecionado === "Estampas"
                ? 'bg-primary text-primary-foreground'
                : 'bg-card border-2 border-border text-foreground hover:border-primary'
            }`}
          >
            Estampas
          </button>
        </div>
      </section>

      {/* Em Destaque */}
      <section className="px-4 pb-8">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Em Destaque</span>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-foreground mb-2">
          Modelos Mais Vendidos
        </h2>
        
        <p className="text-center text-muted-foreground font-light mb-6">
          Os favoritos dos nossos clientes em {tipoSelecionado.toLowerCase()}
        </p>
        
        {/* Featured Continuous Carousel */}
        <ContinuousCarousel modelos={modelos.slice(0, 8)} />
      </section>

      {/* Categories with Models */}
      {categorias.map((categoria, catIndex) => {
        const modelosCategoria = getModelosPorCategoria(categoria);
        const visibleCount = getVisibleCount(categoria);
        const hasMore = modelosCategoria.length > visibleCount;

        return (
          <section key={categoria} className="px-4 py-4">
            {/* Ver Mais Modelos Button - only between categories */}
            {catIndex > 0 && (
              <div className="flex justify-center mb-4">
                <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-medium text-sm">
                  Ver Mais Modelos
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}

            <h2 className="text-2xl font-bold text-foreground mb-2">{categoria}</h2>
            <p className="text-muted-foreground font-light mb-4">Explore nossa coleção exclusiva</p>
            
            <div className="grid grid-cols-2 gap-3">
              {modelosCategoria.slice(0, visibleCount).map((modelo) => (
                <ModeloCard key={modelo.id} modelo={modelo} />
              ))}
            </div>

            {hasMore && (
              <button
                onClick={() => handleShowMore(categoria)}
                className="w-full mt-4 py-3 border-2 border-primary text-primary rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors"
              >
                Mostrar mais
                <ChevronDown className="w-4 h-4" />
              </button>
            )}
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-primary to-blue-700 text-white px-4 py-12 text-center mt-6">
        <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-2xl font-bold mb-4">
          Não Encontrou o Que<br />Procurava?
        </h2>
        
        <p className="text-white/90 font-light mb-8 leading-relaxed max-w-sm mx-auto">
          Crie seu próprio modelo do zero! Nossa ferramenta de personalização permite que você desenvolva designs únicos e exclusivos para seu time, turma ou clube.
        </p>
        
        <button 
          onClick={() => window.location.href = "/faca-sua"}
          className="w-full bg-white text-primary px-6 py-4 rounded-xl font-medium flex items-center justify-between mb-4"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5" />
            <span>Personalizar Meu Modelo</span>
          </div>
          <ChevronRight className="w-5 h-5" />
        </button>
        
        <button 
          onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
          className="w-full bg-primary/30 border-2 border-white text-white px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-3"
        >
          <MessageCircle className="w-5 h-5" />
          Falar com Especialista
        </button>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TodosModelos;
