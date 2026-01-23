import { useState } from "react";
import { Sparkles, Shirt, Gift, Truck, Clock, MapPin, ChevronDown, Upload, Send, Palette, Check, Sparkle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";

const products = [
  { name: "Camiseta", price: 42.0, available: true },
  { name: "Camiseta Polo", price: 55.0, available: true },
  { name: "Regata", price: 38.0, available: true },
  { name: "Bandeirão", price: 0, available: false, comingSoon: true },
];

const colors = [
  { name: "Branco", value: "#FFFFFF" },
  { name: "Preto", value: "#000000" },
  { name: "Azul Marinho", value: "#1e3a5f" },
  { name: "Azul Royal", value: "#1e40af" },
  { name: "Azul Claro", value: "#7dd3fc" },
  { name: "Vermelho", value: "#dc2626" },
  { name: "Verde", value: "#16a34a" },
  { name: "Amarelo", value: "#facc15" },
  { name: "Roxo", value: "#7c3aed" },
  { name: "Laranja", value: "#f97316" },
  { name: "Rosa", value: "#f472b6" },
  { name: "Cinza", value: "#6b7280" },
];

const collarTypes = [
  { name: "Gola Redonda", description: "Padrão - Sem custo", price: 0, recommended: false },
  { name: "Gola V", description: "+ R$ 7.00/un", price: 7, recommended: true },
];

const fabricTypes = [
  { name: "Thermica (Premium)", description: "Tecido térmico de alta performance", price: 8, priceLabel: "+R$ 8,00" },
  { name: "DryFit Premium (Padrão)", description: "Tecido esportivo/social com acabamento premium", price: 0, priceLabel: "Incluso", isDefault: true },
  { name: "Helanca (Econômico)", description: "Tecido leve e confortável", price: -5, priceLabel: "-R$ 5,00" },
];

const finishingTypes = [
  { name: "Masculino" },
  { name: "Babylook" },
];

const discountTiers = [
  { min: 12, discount: 10, unitPrice: 37.80, bonus: null },
  { min: 30, discount: 15, unitPrice: 35.70, bonus: null },
  { min: 50, discount: 20, unitPrice: 33.60, bonus: "+Brinde 1 personalizado" },
  { min: 80, discount: 22, unitPrice: 32.76, bonus: "+Brinde 2 personalizado" },
];

const FacaSua = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedCollar, setSelectedCollar] = useState<number | null>(null);
  const [selectedFabric, setSelectedFabric] = useState(1);
  const [selectedFinishing, setSelectedFinishing] = useState(0);
  const [selectedDiscountTier, setSelectedDiscountTier] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const [showDiscounts, setShowDiscounts] = useState(true);

  const basePrice = selectedProduct !== null ? products[selectedProduct].price : 0;
  const collarPrice = selectedCollar !== null ? collarTypes[selectedCollar].price : 0;
  const fabricPrice = fabricTypes[selectedFabric].price;
  const unitPrice = basePrice + collarPrice + fabricPrice;
  const totalPrice = unitPrice * quantity;

  const handleWhatsAppSubmit = () => {
    const product = selectedProduct !== null ? products[selectedProduct].name : "Não selecionado";
    const color = colors[selectedColor].name;
    const collar = selectedCollar !== null ? collarTypes[selectedCollar].name : "Não selecionado";
    
    const message = `*Pedido Personalizado FDesigner*%0A%0A` +
      `*Produto:* ${product}%0A` +
      `*Cor:* ${color}%0A` +
      `*Gola:* ${collar}%0A` +
      `*Quantidade:* ${quantity} unidades%0A` +
      `*Total Estimado:* R$ ${totalPrice.toFixed(2)}%0A%0A` +
      `*Descrição da Arte:*%0A${description || "Não informado"}`;
    
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-blue-700 text-white px-4 py-10 text-center relative">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Configure Cada Detalhe</span>
        </div>
        
        <h1 className="text-3xl font-extrabold mb-4 leading-tight">
          Monte Sua Camiseta Personalizada
        </h1>
        
        <p className="text-white/90 text-sm mb-6 max-w-sm mx-auto">
          Sistema inteligente de personalização. Escolha o produto e veja apenas as opções disponíveis para ele.
        </p>
        
        <div className="relative inline-block">
          <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-full px-6 py-3 flex items-center gap-3 shadow-xl">
            <Sparkles className="w-5 h-5 flex-shrink-0 text-black" />
            <span className="font-bold text-sm text-black">BÔNUS: Logo Personalizada e Exclusiva Grátis!</span>
          </div>
        </div>
        
        <WaveDivider variant="blue-to-white" />
      </section>

      {/* Form Section */}
      <section className="px-4 py-6 space-y-4">
        
        {/* Step 1: Escolha o Produto */}
        <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">1</div>
            <h2 className="font-bold text-foreground">Escolha o Produto</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => product.available && setSelectedProduct(index)}
                disabled={!product.available}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedProduct === index
                    ? "border-primary bg-primary/5"
                    : product.available
                    ? "border-border hover:border-primary/50"
                    : "border-border opacity-50 cursor-not-allowed"
                }`}
              >
                <Shirt className="w-10 h-10 mx-auto mb-2 text-muted-foreground" />
                <p className="font-semibold text-sm text-foreground">{product.name}</p>
                <p className={`text-sm ${product.available ? "text-primary font-bold" : "text-muted-foreground"}`}>
                  {product.comingSoon ? "Em breve" : `R$ ${product.price.toFixed(2)}`}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Cor Base da Peça */}
        <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">2</div>
            <h2 className="font-bold text-foreground">Cor Base da Peça</h2>
          </div>
          
          <div className="grid grid-cols-6 gap-2">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`w-full aspect-square rounded-lg border-2 transition-all flex items-center justify-center ${
                  selectedColor === index
                    ? "border-primary ring-2 ring-primary/30"
                    : "border-border hover:border-primary/50"
                }`}
                style={{ backgroundColor: color.value }}
              >
                {selectedColor === index && (
                  <Check className={`w-5 h-5 ${color.value === "#FFFFFF" || color.value === "#facc15" ? "text-foreground" : "text-white"}`} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tecido Selection */}
        <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-foreground">ESCOLHA <span className="text-primary">SEU TECIDO</span></h2>
            <button className="text-primary text-sm font-medium underline">Saiba Mais</button>
          </div>
          
          <div className="space-y-3">
            {fabricTypes.map((fabric, index) => (
              <button
                key={index}
                onClick={() => setSelectedFabric(index)}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all flex justify-between items-center ${
                  selectedFabric === index
                    ? "border-primary bg-primary/5"
                    : index === 0
                    ? "border-indigo-500 border-[3px] hover:bg-indigo-50"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div>
                  <p className={`font-semibold ${selectedFabric === index ? "text-primary" : "text-foreground"}`}>{fabric.name}</p>
                  <p className="text-xs text-muted-foreground">{fabric.description}</p>
                </div>
                <span className={`font-bold text-sm ${fabric.price > 0 ? "text-foreground" : fabric.price < 0 ? "text-green-600" : "text-primary"}`}>
                  {fabric.priceLabel}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Acabamento Selection */}
        <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
          <h2 className="font-bold text-foreground mb-3">Acabamento: <span className="text-primary">{finishingTypes[selectedFinishing].name}</span></h2>
          
          <div className="grid grid-cols-2 gap-3">
            {finishingTypes.map((finishing, index) => (
              <button
                key={index}
                onClick={() => setSelectedFinishing(index)}
                className={`p-3 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${
                  selectedFinishing === index
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <span className={`font-semibold ${selectedFinishing === index ? "text-primary" : "text-foreground"}`}>{finishing.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
          <h2 className="font-bold text-foreground mb-3">GOLA: <span className="text-primary">{selectedCollar !== null ? collarTypes[selectedCollar].name.toUpperCase() : "SELECIONE"}</span></h2>
          
          <div className="grid grid-cols-2 gap-4">
            {collarTypes.map((collar, index) => (
              <button
                key={index}
                onClick={() => setSelectedCollar(index)}
                className={`p-4 rounded-xl border-2 transition-all text-center ${
                  selectedCollar === index
                    ? "border-primary bg-primary/5"
                    : collar.recommended
                    ? "border-blue-500 border-[3px] bg-blue-50/50 shadow-md"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="w-20 h-20 mx-auto mb-3 bg-muted/50 rounded-xl flex items-center justify-center border border-border">
                  {/* Placeholder para imagem da gola */}
                  <span className="text-xs text-muted-foreground">Imagem</span>
                </div>
                <p className={`font-bold text-sm ${selectedCollar === index ? "text-primary" : "text-foreground"}`}>
                  {collar.name.toUpperCase()}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{collar.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Discounts Section - Redesigned */}
        <div className="bg-card rounded-2xl shadow-sm border border-primary/30 overflow-hidden">
          <button
            onClick={() => setShowDiscounts(!showDiscounts)}
            className="w-full p-4 flex items-center justify-between bg-primary/5"
          >
            <div className="flex items-center gap-3">
              <Gift className="w-5 h-5 text-primary" />
              <span className="font-bold text-foreground">Descubra descontos e brindes por quantidade</span>
            </div>
            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${showDiscounts ? "rotate-180" : ""}`} />
          </button>
          
          {showDiscounts && (
            <div className="p-4 space-y-3">
              <p className="text-sm text-center text-muted-foreground mb-4">
                Selecione uma opção e ganhe descontos progressivos + brindes exclusivos!
              </p>
              
              {discountTiers.map((tier, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDiscountTier(selectedDiscountTier === index ? null : index)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    selectedDiscountTier === index
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedDiscountTier === index ? "border-primary bg-primary" : "border-muted-foreground"
                      }`}>
                        {selectedDiscountTier === index && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="font-bold text-foreground">{tier.min}+ unidades</span>
                    </div>
                    <span className="font-bold text-primary">{tier.discount}% OFF</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground ml-8">
                    <span>R$ {tier.unitPrice.toFixed(2)}/un</span>
                    <span>Total: R$ {(tier.unitPrice * tier.min).toFixed(2)}</span>
                  </div>
                  
                  {tier.bonus && (
                    <div className="flex items-center gap-2 mt-2 ml-8 text-green-600">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-medium">{tier.bonus}</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Step 4: Quantidade Estimada */}
        <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">4</div>
            <h2 className="font-bold text-foreground">Quantidade Estimada</h2>
          </div>
          
          <div className="bg-primary/5 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Shirt className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">Quantas peças você deseja?</span>
            </div>
            
            <div className="flex items-center border border-border rounded-lg bg-background">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="flex-1 p-3 text-center text-xl font-bold bg-transparent outline-none"
              />
              <span className="pr-4 text-muted-foreground">un</span>
            </div>
            
            <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Detalhe tamanhos via WhatsApp
            </p>
          </div>
          
          {/* Order Summary */}
          <div className="bg-muted/50 rounded-xl p-4">
            <h3 className="font-bold text-foreground mb-3">Resumo do Pedido</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Valor Base:</span>
                <span className="text-foreground">R$ {unitPrice.toFixed(2)}/un</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Quantidade:</span>
                <span className="text-foreground">{quantity} unidades</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between">
                <span className="font-bold text-foreground">Total Estimado:</span>
                <span className="font-bold text-primary text-lg">R$ {totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5: Detalhes para o Designer */}
        <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">5</div>
            <h2 className="font-bold text-foreground">Detalhes para o Designer</h2>
          </div>
          
          <div className="bg-primary/10 rounded-xl p-3 mb-4 text-sm text-center">
            <span className="text-muted-foreground">Nossa equipe criará a arte. Descreva sua ideia em detalhes.</span>
          </div>
          
          <div className="mb-4">
            <label className="block font-semibold text-foreground mb-2">Descrição da Arte</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva em detalhes como você imagina sua arte. Exemplo: Nome do time em fonte bold, cores específicas, elementos gráficos, posicionamento, etc."
              className="w-full p-3 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground/40 resize-none h-32 outline-none focus:border-primary transition-colors"
            />
          </div>
          
          <div>
            <label className="block font-semibold text-foreground mb-2">Referências de Imagem</label>
            <div className="border-2 border-dashed border-border rounded-xl p-6 text-center">
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="font-semibold text-foreground text-sm">Envie suas imagens de referência</p>
              <p className="text-xs text-muted-foreground mt-1">
                Você pode enviar diretamente pelo WhatsApp após gerar o orçamento
              </p>
            </div>
          </div>
        </div>

        {/* Frete Grátis Banner */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-green-800">
                <span className="text-green-600">FRETE GRÁTIS</span> a partir de 3 pedidos
              </p>
              <p className="text-xs text-green-700 flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" />
                SP, Guarulhos, ABC, Diadema, Suzano, Mauá, Itaquá, Osasco
              </p>
              <p className="text-xs text-green-700 flex items-center gap-1 mt-1">
                <Clock className="w-3 h-3" />
                7-10 dias úteis
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleWhatsAppSubmit}
          className="w-full bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl p-4 font-bold flex items-center justify-center gap-3 shadow-lg hover:opacity-90 transition-opacity"
        >
          <Send className="w-5 h-5" />
          Enviar Pedido via WhatsApp
        </button>
        
        <p className="text-center text-xs text-muted-foreground">
          Ao clicar, você será direcionado ao WhatsApp com todas as informações preenchidas
        </p>
      </section>

      {/* Why Choose FDesigner */}
      <section className="px-4 py-10 bg-muted/30">
        <h2 className="text-2xl font-extrabold text-center text-foreground mb-8">
          Por que personalizar com a FDesigner?
        </h2>
        
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Design Profissional</h3>
            <p className="text-sm text-muted-foreground">
              Nossa equipe de designers está pronta para transformar suas ideias em realidade
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Qualidade Garantida</h3>
            <p className="text-sm text-muted-foreground">
              Tecidos premium e impressão de alta qualidade em todos os produtos
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <Sparkle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Descontos Progressivos</h3>
            <p className="text-sm text-muted-foreground">
              Quanto mais você pede, mais você economiza. Até 25% de desconto!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-primary to-blue-700 text-white px-4 py-12 text-center">
        <h2 className="text-2xl font-extrabold mb-4">
          Dúvidas sobre sua personalização?
        </h2>
        <p className="text-white/90 mb-6">
          Nossa equipe está pronta para ajudar você a criar o modelo perfeito
        </p>
        
        <button 
          onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
          className="bg-white text-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 mx-auto hover:bg-white/90 transition-colors"
        >
          <Send className="w-5 h-5" />
          Falar com Especialista
        </button>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FacaSua;
