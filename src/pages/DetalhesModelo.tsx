import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, Heart, Share2, Star, User, Crown, Sparkles, Truck, Check, Gift, MessageCircle, ThermometerSun, Shirt, WashingMachine, Wind, CircleOff, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import WaveDivider from "@/components/WaveDivider";
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
  corTema: string;
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
    numAvaliacoes: 243,
    corTema: "yellow"
  }
};

const tecidos = [
  { id: "thermica", nome: "Thermica (Premium)", desc: "Tecido térmico de alta performance", preco: 8 },
  { id: "dryfit", nome: "DryFit Premium (Padrão)", desc: "Tecido esportivo/social com acabamento premium", preco: 0, padrao: true },
  { id: "helanca", nome: "Helanca (Econômico)", desc: "Tecido leve e confortável", preco: -5 }
];

const inclusos = [
  { id: 1, nome: "Nome personalizado" },
  { id: 2, nome: "Número nas costas" },
  { id: 3, nome: "Manga personalizada" }
];

const tamanhos = ["PP", "P", "M", "G", "GG"];
const tamanhoExtra = { nome: "XG", preco: 4 };

const brindes = [
  { quantidade: "30+", desconto: 15, precoUn: 35.70, brinde: null },
  { quantidade: "50+", desconto: 20, precoUn: 33.60, brinde: "1 personalizado" },
  { quantidade: "80+", desconto: 22, precoUn: 32.76, brinde: "2 personalizados" },
  { quantidade: "100+", desconto: 25, precoUn: 31.50, brinde: "1 e 2 Personalizados", premium: true }
];

const modelosSugeridos = [
  { id: "2", nome: "Camiseta Freddy FNAF", preco: 49.90, categoria: "GAMES" },
  { id: "3", nome: "Camiseta Bonnie FNAF", preco: 49.90, categoria: "GAMES" },
  { id: "4", nome: "Camiseta Foxy FNAF", preco: 49.90, categoria: "GAMES" },
  { id: "5", nome: "Camiseta Chica FNAF", preco: 49.90, categoria: "GAMES" },
  { id: "6", nome: "Camiseta Golden Freddy", preco: 54.90, categoria: "GAMES" }
];

const DetalhesModelo = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [descontosAberto, setDescontosAberto] = useState(false);
  const returnTo = searchParams.get("from") || "/";
  
  const [tecidoSelecionado, setTecidoSelecionado] = useState("dryfit");
  const [acabamento, setAcabamento] = useState("masculino");
  const [gola, setGola] = useState("redonda");
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("M");
  const [quantidade, setQuantidade] = useState(1);
  const [edicaoExclusiva, setEdicaoExclusiva] = useState(false);
  const [brindeSelecionado, setBrindeSelecionado] = useState<string | null>(null);

  const modelo = modelosData[id || "1"] || modelosData["1"];
  const tecido = tecidos.find(t => t.id === tecidoSelecionado)!;

  const calcularTotal = () => {
    let total = modelo.preco + tecido.preco;
    if (tamanhoSelecionado === "XG") total += tamanhoExtra.preco;
    if (edicaoExclusiva) total += 15;
    
    // Aplicar desconto por quantidade
    if (brindeSelecionado) {
      const brinde = brindes.find(b => b.quantidade === brindeSelecionado);
      if (brinde) {
        const qtd = parseInt(brindeSelecionado.replace("+", ""));
        return brinde.precoUn * qtd;
      }
    }
    
    return total * quantidade;
  };

  const handleWhatsApp = () => {
    const msg = `Olá! Pedido:\n📦 ${modelo.nome}\n👕 Tam: ${tamanhoSelecionado} | Tecido: ${tecido.nome}\n🔢 Qtd: ${brindeSelecionado || quantidade}\n${edicaoExclusiva ? "✨ Com edição exclusiva\n" : ""}💰 Total: R$ ${calcularTotal().toFixed(2).replace(".", ",")}`;
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

        <div className="p-4 space-y-5 max-w-2xl mx-auto">
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

          {/* Personalização Disponível - Inclusos */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-base font-bold text-primary">Personalização Disponível!</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Este produto pode ser 100% personalizado de acordo com suas necessidades:</p>
            <div className="space-y-2">
              {inclusos.map(item => (
                <div key={item.id} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{item.nome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Edição Exclusiva - Extra */}
          <div className={`rounded-xl p-4 border-2 transition-all ${edicaoExclusiva ? "border-amber-400 bg-amber-50/50" : "border-border"}`}>
            <button onClick={() => setEdicaoExclusiva(!edicaoExclusiva)} className="w-full flex justify-between items-start">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span className="font-bold">Edição Exclusiva</span>
                  <span className="font-extrabold text-amber-600">+R$ 15,00</span>
                </div>
                <p className="text-xs text-muted-foreground">Você pode pedir para editar qualquer coisa na arte: adicionar elementos, mudar cores, personalização completa da estampa.</p>
              </div>
              <div className={`w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 mt-1 ${edicaoExclusiva ? "bg-amber-500 border-amber-500" : "border-muted-foreground"}`}>
                {edicaoExclusiva && <span className="text-white text-sm">✓</span>}
              </div>
            </button>
          </div>

          {/* Brindes por Quantidade - Collapsible */}
          <Collapsible open={descontosAberto} onOpenChange={setDescontosAberto}>
            <CollapsibleTrigger className="w-full p-4 rounded-xl border-2 border-green-500 flex items-center justify-between hover:bg-green-50/50 transition-colors">
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-green-600" />
                <h3 className="text-base font-bold text-green-700">Descontos & Brindes por Quantidade</h3>
              </div>
              <ChevronDown className={`w-5 h-5 text-green-600 transition-transform ${descontosAberto ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-3 space-y-2">
              {brindes.map(b => (
                <button 
                  key={b.quantidade} 
                  onClick={() => setBrindeSelecionado(brindeSelecionado === b.quantidade ? null : b.quantidade)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    b.premium 
                      ? brindeSelecionado === b.quantidade 
                        ? "border-amber-400 bg-amber-50" 
                        : "border-amber-300 bg-amber-50/50"
                      : brindeSelecionado === b.quantidade 
                        ? "border-green-500 bg-green-50" 
                        : "border-border"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${brindeSelecionado === b.quantidade ? "border-green-500" : "border-muted-foreground"}`}>
                        {brindeSelecionado === b.quantidade && <div className="w-2.5 h-2.5 rounded-full bg-green-500" />}
                      </div>
                      <span className="font-bold">{b.quantidade} unidades</span>
                      {b.premium && (
                        <span className="flex items-center gap-1 text-xs text-amber-600 font-bold">
                          <Crown className="w-3 h-3" /> Pacote Premium
                        </span>
                      )}
                    </div>
                    <span className="font-bold text-green-600">{b.desconto}% OFF</span>
                  </div>
                  <div className="flex justify-between items-center pl-7">
                    <span className="text-sm text-muted-foreground">R$ {b.precoUn.toFixed(2).replace(".", ",")}/un</span>
                    <span className="text-sm font-medium">Total: R$ {(b.precoUn * parseInt(b.quantidade.replace("+", ""))).toFixed(2).replace(".", ",")}</span>
                  </div>
                  {b.brinde && (
                    <>
                      <div className="border-t border-border/50 my-2 ml-7" />
                      <div className="flex items-center gap-2 pl-7">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span className="text-sm text-amber-600 font-medium">+Brinde {b.brinde}</span>
                      </div>
                    </>
                  )}
                </button>
              ))}
              <div className="flex items-center gap-2 text-sm text-muted-foreground pl-1">
                <Crown className="w-4 h-4" />
                <span>Quanto maior a quantidade, melhores os benefícios</span>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Frete Grátis */}
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-green-700">Frete Grátis acima de 3 pedidos!</p>
                <p className="text-sm text-green-600">Entrega em 2 a 3 dias úteis</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Descrição, Especificações, Cuidados */}
          <Tabs defaultValue="descricao" className="w-full">
            <TabsList className="w-full grid grid-cols-3 h-auto p-1.5 bg-primary/10 rounded-xl">
              <TabsTrigger value="descricao" className="text-sm font-bold py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg">Descrição</TabsTrigger>
              <TabsTrigger value="especificacoes" className="text-sm font-bold py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg">Especificações</TabsTrigger>
              <TabsTrigger value="cuidados" className="text-sm font-bold py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg">Cuidados</TabsTrigger>
            </TabsList>

            <TabsContent value="descricao" className="mt-4 space-y-4">
              <div className="space-y-3">
                <p className="text-sm leading-relaxed text-gray-500">
                  Vista-se com estilo e mostre seu amor por <span className="font-medium text-yellow-600">FNAF</span>! Esta camiseta exclusiva traz a 
                  <span className="font-medium text-gray-700"> TOY-CHICA</span> em uma arte <span className="text-yellow-600 font-medium">vibrante e detalhada</span>.
                </p>
                <p className="text-sm leading-relaxed text-gray-500">
                  Perfeita para <span className="font-medium text-gray-700">eventos, festas temáticas</span> ou para usar no dia a dia com muito 
                  <span className="text-yellow-600 font-medium"> estilo e personalidade</span>.
                </p>
                <div className="bg-yellow-50 rounded-lg p-3 border-l-4 border-yellow-400">
                  <p className="text-sm font-medium text-yellow-700">
                    🎮 Ideal para fãs que querem se destacar com uma peça única e exclusiva!
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-gray-500">
                  Produzida com <span className="font-medium text-gray-700">sublimação de alta qualidade</span>, garantindo cores vivas que 
                  <span className="text-yellow-600 font-medium"> não desbotam</span> mesmo após várias lavagens.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="especificacoes" className="mt-4 space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border-l-4 border-blue-500">
                <Shirt className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-bold text-sm text-blue-900">Material</p>
                  <p className="text-xs text-blue-700">100% Poliéster de alta qualidade</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 border-l-4 border-purple-500">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-bold text-sm text-purple-900">Impressão</p>
                  <p className="text-xs text-purple-700">Sublimação digital HD</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border-l-4 border-green-500">
                <Check className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-bold text-sm text-green-900">Acabamento</p>
                  <p className="text-xs text-green-700">Costura reforçada e gola ribana</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-50 border-l-4 border-amber-500">
                <Crown className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="font-bold text-sm text-amber-900">Garantia</p>
                  <p className="text-xs text-amber-700">30 dias contra defeitos de fabricação</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cuidados" className="mt-4 space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                <WashingMachine className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-bold text-sm">Lavagem</p>
                  <p className="text-xs text-muted-foreground">Lavar à máquina com água fria (máx. 30°C)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                <CircleOff className="w-5 h-5 text-red-500" />
                <div>
                  <p className="font-bold text-sm">Não usar alvejante</p>
                  <p className="text-xs text-muted-foreground">Produtos com cloro podem danificar as cores</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                <ThermometerSun className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="font-bold text-sm">Secagem</p>
                  <p className="text-xs text-muted-foreground">Secar à sombra, não usar secadora</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                <Wind className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="font-bold text-sm">Passar</p>
                  <p className="text-xs text-muted-foreground">Passar do avesso em temperatura baixa</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

        </div>

        {/* Você também pode gostar - Blue Section */}
        <div className="relative">
          <WaveDivider variant="white-to-blue" />
          <div className="gradient-blue py-10 px-4">
            <h3 className="text-lg font-bold text-white mb-6 text-center">Você também pode gostar:</h3>
            <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-4xl mx-auto">
              <CarouselContent className="-ml-2">
                {modelosSugeridos.map(m => (
                  <CarouselItem key={m.id} className="pl-2 basis-1/2 md:basis-1/3">
                    <Link to={`/modelo/${m.id}`} className="block">
                      <div className="rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow">
                        <div className="aspect-square bg-secondary flex items-center justify-center">
                          <span className="text-muted-foreground text-sm font-bold">IMG</span>
                        </div>
                        <div className="p-3">
                          <p className="text-xs text-primary font-bold mb-1">{m.categoria}</p>
                          <p className="text-sm font-bold line-clamp-2 mb-2 text-foreground">{m.nome}</p>
                          <p className="text-sm font-extrabold text-foreground">R$ {m.preco.toFixed(2).replace(".", ",")}</p>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-white/90" />
              <CarouselNext className="right-0 bg-white/90" />
            </Carousel>
          </div>
          <WaveDivider variant="blue-to-white" />
        </div>

        <div className="p-4">

          <div className="border-t border-border" />

          {/* CTA Central de Atendimento */}
          <div className="bg-primary rounded-xl p-6 text-center text-primary-foreground">
            <MessageCircle className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">Ficou com alguma dúvida?</h3>
            <p className="text-sm opacity-90 mb-4">Nossa equipe está pronta para te ajudar com qualquer questão sobre seu pedido.</p>
            <Link to="/central-atendimento">
              <Button variant="secondary" className="w-full font-bold">
                Ir para Central de Atendimento
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Total {brindeSelecionado ? `(${brindeSelecionado} un)` : ""}</span>
          <span className="text-xl font-extrabold">R$ {calcularTotal().toFixed(2).replace(".", ",")}</span>
        </div>
        <Button onClick={handleWhatsApp} className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl">Pedir pelo WhatsApp</Button>
      </div>
    </div>
  );
};

export default DetalhesModelo;
