import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, Heart, Share2, Star, User, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const modelosData: Record<string, {
  nome: string;
  descricao: string;
  preco: number;
  precoOriginal: number;
  desconto: number;
  isExclusive: boolean;
  categoria: string;
  subcategoria: string;
  avaliacao: number;
  numAvaliacoes: number;
}> = {
  "1": {
    nome: "Camiseta TOY-CHICA FNAF 2 Personalizada",
    descricao: "Camiseta exclusiva para fãs de FNAF.",
    preco: 49.90,
    precoOriginal: 69.90,
    desconto: 29,
    isExclusive: true,
    categoria: "GAMES",
    subcategoria: "CAMISETA",
    avaliacao: 4.9,
    numAvaliacoes: 243
  }
};

const tecidos = [
  { id: "thermica", nome: "Thermica (Premium)", desc: "Tecido térmico de alta performance", preco: 8 },
  { id: "dryfit", nome: "DryFit Premium (Padrão)", desc: "Tecido esportivo/social com acabamento premium", preco: 0, padrao: true },
  { id: "helanca", nome: "Helanca (Econômico)", desc: "Tecido leve e confortável", preco: -5 }
];

const extras = [
  { id: 1, nome: "Nome personalizado", preco: 5.00 },
  { id: 2, nome: "Número nas costas", preco: 5.00 },
  { id: 3, nome: "Manga personalizada", preco: 8.00 },
  { id: 4, nome: "Edição exclusiva", preco: 15.00 }
];

const tamanhos = ["PP", "P", "M", "G", "GG"];
const tamanhoExtra = { nome: "XG", preco: 4 };

const DetalhesModelo = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get("from") || "/";
  
  const [tecidoSelecionado, setTecidoSelecionado] = useState("dryfit");
  const [acabamento, setAcabamento] = useState("masculino");
  const [gola, setGola] = useState("redonda");
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("M");
  const [quantidade, setQuantidade] = useState(1);
  const [extrasSelecionados, setExtrasSelecionados] = useState<number[]>([]);

  const modelo = modelosData[id || "1"] || modelosData["1"];
  const tecido = tecidos.find(t => t.id === tecidoSelecionado)!;

  const toggleExtra = (extraId: number) => {
    setExtrasSelecionados(prev => prev.includes(extraId) ? prev.filter(i => i !== extraId) : [...prev, extraId]);
  };

  const calcularTotal = () => {
    let total = modelo.preco + tecido.preco;
    if (tamanhoSelecionado === "XG") total += tamanhoExtra.preco;
    extras.filter(e => extrasSelecionados.includes(e.id)).forEach(e => total += e.preco);
    return total * quantidade;
  };

  const handleWhatsApp = () => {
    const msg = `Olá! Pedido:\n📦 ${modelo.nome}\n👕 Tam: ${tamanhoSelecionado} | Tecido: ${tecido.nome}\n🔢 Qtd: ${quantidade}\n💰 Total: R$ ${calcularTotal().toFixed(2).replace(".", ",")}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link to={returnTo} className="p-1 hover:bg-secondary rounded-full"><ArrowLeft className="w-5 h-5" /></Link>
          <h1 className="text-base font-bold">Detalhes do modelo</h1>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto pb-28">
        {/* Image */}
        <div className="relative bg-secondary aspect-square flex items-center justify-center">
          <span className="text-muted-foreground text-2xl font-bold">TAQUI</span>
          {modelo.desconto > 0 && <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold bg-green-500 text-white rounded-full">{modelo.desconto}% OFF</span>}
        </div>

        <div className="p-4 space-y-5">
          {/* Category */}
          <p className="text-sm font-bold text-primary">{modelo.categoria} • {modelo.subcategoria}</p>

          {/* Title + Icons */}
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-xl font-extrabold leading-tight">{modelo.nome}</h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center"><Heart className="w-5 h-5" /></button>
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center"><Share2 className="w-5 h-5" /></button>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} className={`w-5 h-5 ${i <= Math.floor(modelo.avaliacao) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />)}</div>
            <span className="text-sm text-muted-foreground">{modelo.avaliacao} ({modelo.numAvaliacoes} avaliações)</span>
          </div>

          <div className="border-t border-border" />

          {/* Tecido */}
          <div>
            <div className="flex justify-between mb-3">
              <p className="text-sm font-bold">ESCOLHA <span className="text-primary">SEU TECIDO</span></p>
              <button className="text-sm text-primary underline">Saiba Mais</button>
            </div>
            <div className="space-y-2">
              {tecidos.map(t => (
                <button key={t.id} onClick={() => setTecidoSelecionado(t.id)} className={`w-full p-3 rounded-lg border-2 text-left transition-colors ${tecidoSelecionado === t.id ? "border-primary bg-primary/5" : "border-border"}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className={`font-bold text-sm ${tecidoSelecionado === t.id ? "text-primary" : ""}`}>{t.nome}</p>
                      <p className="text-xs text-muted-foreground">{t.desc}</p>
                    </div>
                    <span className={`font-bold text-sm ${t.preco < 0 ? "text-red-500" : t.preco > 0 ? "text-foreground" : "text-green-600"}`}>
                      {t.preco === 0 ? "Incluído" : `${t.preco > 0 ? "+" : ""}R$ ${Math.abs(t.preco).toFixed(2).replace(".", ",")}`}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Acabamento */}
          <div>
            <p className="text-sm font-bold mb-3">Acabamento: <span className="text-primary font-normal">{acabamento === "masculino" ? "Masculino" : "Babylook"}</span></p>
            <div className="grid grid-cols-2 gap-3">
              {["masculino", "babylook"].map(a => (
                <button key={a} onClick={() => setAcabamento(a)} className={`p-3 rounded-lg border-2 flex items-center justify-center gap-2 ${acabamento === a ? "border-primary bg-primary/5" : "border-border"}`}>
                  <User className="w-4 h-4" /><span className="font-bold text-sm capitalize">{a}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Gola */}
          <div>
            <p className="text-sm font-bold mb-3">GOLA: <span className="text-primary">{gola === "redonda" ? "MODELO REDONDA" : "MODELO V"}</span></p>
            <div className="grid grid-cols-2 gap-3">
              {[{id: "redonda", label: "MODELO REDONDA"}, {id: "v", label: "MODELO V"}].map(g => (
                <button key={g.id} onClick={() => setGola(g.id)} className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 ${gola === g.id ? "border-primary bg-primary/5" : "border-border"}`}>
                  <div className="w-16 h-16 bg-secondary rounded-full" />
                  <span className={`text-xs font-bold ${gola === g.id ? "text-primary" : ""}`}>{g.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tamanho */}
          <div>
            <p className="text-sm font-bold mb-3">Tamanho: <span className="text-primary">{tamanhoSelecionado}</span></p>
            <div className="flex flex-wrap gap-2">
              {tamanhos.map(t => (
                <button key={t} onClick={() => setTamanhoSelecionado(t)} className={`w-14 h-10 rounded-lg border-2 font-bold text-sm ${tamanhoSelecionado === t ? "border-primary bg-primary/5 text-primary" : "border-border"}`}>{t}</button>
              ))}
              <div className="relative">
                <button onClick={() => setTamanhoSelecionado("XG")} className={`w-14 h-10 rounded-lg border-2 font-bold text-sm ${tamanhoSelecionado === "XG" ? "border-primary bg-primary/5 text-primary" : "border-border"}`}>XG</button>
                <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px] font-bold bg-red-500 text-white rounded">+R$4</span>
              </div>
            </div>
          </div>

          {/* Extras */}
          <div className="bg-card rounded-xl p-4 border border-border">
            <h3 className="text-sm font-bold mb-3">Extras opcionais</h3>
            <div className="space-y-3">
              {extras.map(e => (
                <button key={e.id} onClick={() => toggleExtra(e.id)} className={`w-full flex justify-between items-center p-3 rounded-lg border-2 ${extrasSelecionados.includes(e.id) ? "border-primary bg-primary/5" : "border-border"}`}>
                  <span className="text-sm">{e.nome} <span className="font-extrabold text-primary">+R$ {e.preco.toFixed(2).replace(".", ",")}</span></span>
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${extrasSelecionados.includes(e.id) ? "bg-primary border-primary" : "border-muted-foreground"}`}>
                    {extrasSelecionados.includes(e.id) && <span className="text-white text-xs">✓</span>}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Discount Banner */}
          <div className="bg-primary/10 rounded-xl p-4 flex items-center gap-3">
            <Crown className="w-6 h-6 text-primary" />
            <p className="text-sm font-bold text-primary">Descubra descontos e brindes por quantidade</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Total</span>
          <span className="text-xl font-extrabold">R$ {calcularTotal().toFixed(2).replace(".", ",")}</span>
        </div>
        <Button onClick={handleWhatsApp} className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl">Pedir pelo WhatsApp</Button>
      </div>
    </div>
  );
};

export default DetalhesModelo;
