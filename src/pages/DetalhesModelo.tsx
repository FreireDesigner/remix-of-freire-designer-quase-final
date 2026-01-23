import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, Crown, Check, Plus, Minus, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dados de exemplo - em produção viriam de uma API/banco
const modelosData: Record<string, {
  nome: string;
  descricao: string;
  preco: number;
  precoOriginal: number;
  desconto: number;
  isExclusive: boolean;
  categoria: string;
  imagens: string[];
}> = {
  "1": {
    nome: "Camiseta Interclasse 2024",
    descricao: "Camiseta exclusiva para eventos de interclasse escolar. Produzida com materiais de alta qualidade para garantir conforto e durabilidade durante todas as atividades esportivas.",
    preco: 49.90,
    precoOriginal: 69.90,
    desconto: 29,
    isExclusive: true,
    categoria: "Interclasse",
    imagens: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  "2": {
    nome: "Camiseta Times - Flamengo",
    descricao: "Camiseta personalizada do seu time do coração. Design exclusivo com acabamento premium.",
    preco: 59.90,
    precoOriginal: 79.90,
    desconto: 25,
    isExclusive: false,
    categoria: "Times",
    imagens: ["/placeholder.svg", "/placeholder.svg"]
  }
};

const inclusos = [
  "Arte personalizada",
  "2 revisões inclusas",
  "Etiqueta interna",
  "Embalagem individual"
];

const extras = [
  { id: 1, nome: "Nome personalizado", preco: 5.00 },
  { id: 2, nome: "Número nas costas", preco: 5.00 },
  { id: 3, nome: "Manga personalizada", preco: 8.00 },
  { id: 4, nome: "Design exclusivo", preco: 15.00 }
];

const tamanhos = ["PP", "P", "M", "G", "GG", "XGG"];

const DetalhesModelo = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get("from") || "/";
  
  const [currentImage, setCurrentImage] = useState(0);
  const [quantidade, setQuantidade] = useState(1);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("M");
  const [extrasSelecionados, setExtrasSelecionados] = useState<number[]>([]);
  const [showDescription, setShowDescription] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  // Buscar modelo ou usar dados padrão
  const modelo = modelosData[id || "1"] || modelosData["1"];

  const toggleExtra = (extraId: number) => {
    setExtrasSelecionados(prev => 
      prev.includes(extraId) 
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    );
  };

  const calcularTotal = () => {
    const precoBase = modelo.preco * quantidade;
    const precoExtras = extras
      .filter(e => extrasSelecionados.includes(e.id))
      .reduce((acc, e) => acc + (e.preco * quantidade), 0);
    return precoBase + precoExtras;
  };

  const handleWhatsApp = () => {
    const extrasTexto = extras
      .filter(e => extrasSelecionados.includes(e.id))
      .map(e => e.nome)
      .join(", ");

    const mensagem = `Olá! Gostaria de fazer um pedido:

📦 *Produto:* ${modelo.nome}
👕 *Tamanho:* ${tamanhoSelecionado}
🔢 *Quantidade:* ${quantidade}
${extrasTexto ? `✨ *Extras:* ${extrasTexto}` : ""}
💰 *Total:* R$ ${calcularTotal().toFixed(2).replace(".", ",")}

Aguardo confirmação! 😊`;

    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link to={returnTo} className="p-1 hover:bg-secondary rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <h1 className="text-base font-bold text-foreground">Detalhes do modelo</h1>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Image Carousel */}
        <div className="relative bg-secondary aspect-square">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted-foreground text-2xl font-bold">TAQUI</span>
          </div>
          
          {/* Image dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {modelo.imagens.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentImage === index ? "bg-primary" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Discount badge */}
          {modelo.desconto > 0 && (
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold bg-green-500 text-white rounded-full">
              {modelo.desconto}% OFF
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-4">
          {/* Name and Crown */}
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-lg font-extrabold text-foreground leading-tight">
              {modelo.nome}
            </h2>
            {modelo.isExclusive && (
              <span className="flex-shrink-0 w-8 h-8 gradient-gold rounded-full flex items-center justify-center">
                <Crown className="w-4 h-4 text-foreground" fill="currentColor" />
              </span>
            )}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            {modelo.precoOriginal > modelo.preco && (
              <span className="text-sm text-muted-foreground line-through">
                R$ {modelo.precoOriginal.toFixed(2).replace(".", ",")}
              </span>
            )}
            <span className="text-2xl font-extrabold text-primary">
              R$ {modelo.preco.toFixed(2).replace(".", ",")}
            </span>
          </div>

          {/* Size Selection */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-foreground">Tamanho</h3>
            <div className="flex flex-wrap gap-2">
              {tamanhos.map(tam => (
                <button
                  key={tam}
                  onClick={() => setTamanhoSelecionado(tam)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                    tamanhoSelecionado === tam
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {tam}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-foreground">Quantidade</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-lg font-bold w-8 text-center">{quantidade}</span>
              <button
                onClick={() => setQuantidade(quantidade + 1)}
                className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* O que está incluso */}
          <div className="bg-card rounded-xl p-4 border border-border">
            <h3 className="text-sm font-bold text-foreground mb-3">O que está incluso</h3>
            <div className="space-y-2">
              {inclusos.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Extras opcionais */}
          <div className="bg-card rounded-xl p-4 border border-border">
            <h3 className="text-sm font-bold text-foreground mb-3">Extras opcionais</h3>
            <div className="space-y-3">
              {extras.map(extra => (
                <div key={extra.id} className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-foreground">{extra.nome}</span>
                    <span className="text-sm font-extrabold text-primary ml-2">
                      +R$ {extra.preco.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleExtra(extra.id)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      extrasSelecionados.includes(extra.id)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {extrasSelecionados.includes(extra.id) ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Description Accordion */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="w-full flex items-center justify-between p-4"
            >
              <h3 className="text-sm font-bold text-foreground">Descrição</h3>
              {showDescription ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
            {showDescription && (
              <div className="px-4 pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {modelo.descricao}
                </p>
              </div>
            )}
          </div>

          {/* Size Guide Accordion */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <button
              onClick={() => setShowSizeGuide(!showSizeGuide)}
              className="w-full flex items-center justify-between p-4"
            >
              <h3 className="text-sm font-bold text-foreground">Guia de tamanhos</h3>
              {showSizeGuide ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
            {showSizeGuide && (
              <div className="px-4 pb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-2 text-left font-bold">Tam.</th>
                        <th className="py-2 text-center font-bold">Largura</th>
                        <th className="py-2 text-center font-bold">Altura</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-2">PP</td>
                        <td className="py-2 text-center">48cm</td>
                        <td className="py-2 text-center">66cm</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">P</td>
                        <td className="py-2 text-center">50cm</td>
                        <td className="py-2 text-center">68cm</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">M</td>
                        <td className="py-2 text-center">52cm</td>
                        <td className="py-2 text-center">70cm</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">G</td>
                        <td className="py-2 text-center">56cm</td>
                        <td className="py-2 text-center">72cm</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">GG</td>
                        <td className="py-2 text-center">60cm</td>
                        <td className="py-2 text-center">74cm</td>
                      </tr>
                      <tr>
                        <td className="py-2">XGG</td>
                        <td className="py-2 text-center">64cm</td>
                        <td className="py-2 text-center">76cm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Total</span>
          <span className="text-xl font-extrabold text-foreground">
            R$ {calcularTotal().toFixed(2).replace(".", ",")}
          </span>
        </div>
        <Button
          onClick={handleWhatsApp}
          className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-bold text-base rounded-xl"
        >
          Pedir pelo WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default DetalhesModelo;
