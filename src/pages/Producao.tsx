import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ShoppingCart, Palette, Monitor, Printer, Scissors, Package, CheckCircle, MessageSquare, Rocket, ArrowRight, ArrowDown, Camera } from "lucide-react";

const productionSteps = [
  {
    number: "01",
    icon: ShoppingCart,
    title: "Pedido e Escolha",
    subtitle: "Seu Sonho Começa Aqui",
    description: "Escolha entre modelos exclusivos ou crie algo 100% personalizado. Transformamos suas ideias em realidade.",
    color: "bg-gradient-to-br from-[hsl(218,100%,50%)] to-[hsl(218,100%,40%)]",
    iconBg: "bg-[hsl(218,100%,60%)]/20",
    numberBg: "bg-[hsl(218,100%,70%)]/30",
  },
  {
    number: "02",
    icon: Palette,
    title: "Criação de Arte",
    subtitle: "Design que Impressiona",
    description: "Designers profissionais trabalham cada detalhe com Photoshop e Illustrator. Cores vibrantes, tipografia marcante e ilustrações exclusivas. Sua arte será única e inesquecível.",
    color: "bg-gradient-to-br from-[hsl(280,80%,55%)] to-[hsl(300,80%,50%)]",
    iconBg: "bg-white/20",
    numberBg: "bg-[hsl(280,80%,70%)]/30",
  },
  {
    number: "03",
    icon: Monitor,
    title: "Mockup e Aprovação",
    subtitle: "Veja Antes de Produzir",
    description: "Mockups realistas em 3D para você visualizar exatamente como ficará. Ajustes ilimitados até você ficar completamente satisfeito. Só produzimos com sua aprovação total.",
    color: "bg-gradient-to-br from-[hsl(340,80%,55%)] to-[hsl(350,80%,50%)]",
    iconBg: "bg-white/20",
    numberBg: "bg-[hsl(340,80%,70%)]/30",
  },
  {
    number: "04",
    icon: Printer,
    title: "Impressão na Gráfica",
    subtitle: "Tecnologia de Última Geração",
    description: "Gráficas parceiras com equipamentos de ponta. DTF, silk screen e sublimação para resultados profissionais em cada peça.",
    color: "bg-gradient-to-br from-[hsl(24,95%,50%)] to-[hsl(20,95%,45%)]",
    iconBg: "bg-white/20",
    numberBg: "bg-[hsl(24,95%,70%)]/30",
  },
  {
    number: "05",
    icon: Scissors,
    title: "Costura e Acabamento",
    subtitle: "Perfeição em Cada Detalhe",
    description: "Costureiras especializadas garantem acabamento impecável. Costuras reforçadas, etiquetas personalizadas e inspeção rigorosa. Cada peça é uma obra de arte.",
    color: "bg-gradient-to-br from-[hsl(145,70%,45%)] to-[hsl(145,70%,35%)]",
    iconBg: "bg-white/20",
    numberBg: "bg-[hsl(145,70%,60%)]/30",
  },
  {
    number: "06",
    icon: Package,
    title: "Embalagem e Envio",
    subtitle: "Entrega com Segurança Total",
    description: "Embalagem cuidadosa e envio rastreado pelos Correios. Acompanhe seu pedido em tempo real. Garantia de entrega perfeita no prazo.",
    color: "bg-gradient-to-br from-[hsl(218,100%,50%)] to-[hsl(218,100%,40%)]",
    iconBg: "bg-[hsl(218,100%,60%)]/20",
    numberBg: "bg-[hsl(218,100%,70%)]/30",
  },
];

const benefits = [
  {
    icon: CheckCircle,
    number: "01",
    title: "Realize Seu Sonho",
    description: "Vista finalmente aquele modelo de tema que você sempre quis em eventos esportivos, interclasses ou até ocasiões sociais. Transformamos sua ideia em realidade!",
    tag: "100% Personalizado",
    iconBg: "bg-primary",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Cores Vibrantes",
    description: "Impressão em alta definição com cores vivas e intensas que não desbotam. Destaque-se na multidão com estampas impactantes que chamam atenção de verdade!",
    tag: "Alta Definição",
    iconBg: "bg-gradient-to-br from-[hsl(280,80%,55%)] to-[hsl(300,80%,50%)]",
  },
  {
    icon: Printer,
    number: "03",
    title: "Qualidade Durável",
    description: "Tecnologia DTF de ponta garante estampas que resistem a várias lavagens sem rachar ou desbotar. Use e lave sem preocupação, sua arte permanece perfeita!",
    tag: "Longa Duração",
    iconBg: "bg-[hsl(24,95%,53%)]",
  },
  {
    icon: Package,
    number: "04",
    title: "Para Você, Onde Estiver",
    description: "Receba em casa com segurança e rastreamento completo. Não importa onde você esteja, seu manto chega perfeito e pronto para usar no grande dia!",
    tag: "Entrega Nacional",
    iconBg: "bg-[hsl(145,70%,45%)]",
  },
];

const Producao = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-blue py-12 px-4 text-center wave-divider-blue">
        <span className="inline-block bg-white text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
          Bastidores da Criação
        </span>
        
        <h1 className="text-3xl font-extrabold text-white leading-tight mb-4">
          Da Ideia ao Produto Perfeito: Conheça Nossa Magia
        </h1>
        
        <p className="text-white/90 text-base mb-6">
          Descubra como transformamos sonhos em realidade através de 6 etapas incríveis de produção
        </p>
        
        <p className="text-white font-bold text-lg">
          100% Transparente <span className="font-normal">· Cada detalhe pensado para você</span>
        </p>
      </section>

      {/* Journey Section */}
      <section className="py-12 px-4 bg-background">
        <h2 className="text-2xl font-extrabold text-foreground text-center mb-4">
          Veja a Jornada Completa do Seu Produto
        </h2>
        
        <p className="text-muted-foreground text-center mb-10 text-sm leading-relaxed">
          Transparência total! Cada etapa é executada com excelência por profissionais apaixonados. Veja como seu sonho ganha vida desde o primeiro contato até chegar nas suas mãos!
        </p>

        {/* Production Steps Cards */}
        <div className="space-y-6">
          {productionSteps.map((step, index) => (
            <div
              key={index}
              className={`${step.color} rounded-3xl p-5 text-white shadow-lg`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`${step.numberBg} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                  <span className="text-2xl font-extrabold text-white">{step.number}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <step.icon className="w-5 h-5 text-white/80" />
                  <button className={`${step.numberBg} w-10 h-10 rounded-xl flex items-center justify-center`}>
                    {index < productionSteps.length - 1 ? (
                      <ArrowDown className="w-5 h-5 text-white" />
                    ) : (
                      <ArrowRight className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>
              </div>
              
              <h3 className="text-xl font-extrabold mb-1">{step.title}</h3>
              <p className="text-white/80 text-sm font-semibold mb-2">{step.subtitle}</p>
              <p className="text-white/90 text-sm leading-relaxed mb-4">{step.description}</p>
              
              {/* Image Gallery inside card */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {[1, 2, 3].map((imgIndex) => (
                  <div key={imgIndex} className="bg-white/20 rounded-xl overflow-hidden cursor-pointer hover:bg-white/30 transition-colors">
                    <div className="aspect-square flex flex-col items-center justify-center">
                      <Camera className="w-6 h-6 text-white/60 mb-1" />
                    </div>
                    <div className="bg-white/10 px-2 py-1.5">
                      <span className="text-xs font-medium text-white/80 block text-center truncate">Título {imgIndex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="py-12 px-4 bg-foreground">
        <span className="inline-flex items-center gap-2 bg-[hsl(220,20%,25%)] text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-6 mx-auto">
          ✨ POR QUE ESCOLHER A FDESIGNER
        </span>
        
        <h2 className="text-2xl font-extrabold text-background text-center mb-4">
          O Que Nos Torna Únicos
        </h2>
        
        <p className="text-background/70 text-center mb-10 text-sm">
          Muito mais que camisetas: são memórias que você vai guardar para sempre!
        </p>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[hsl(220,20%,18%)] rounded-2xl p-5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${benefit.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-muted-foreground text-sm font-bold bg-[hsl(220,15%,25%)] px-3 py-1.5 rounded-lg">
                  {benefit.number}
                </span>
              </div>
              
              <h3 className="text-lg font-extrabold text-background mb-1">{benefit.title}</h3>
              <div className="w-8 h-1 bg-primary rounded-full mb-3" />
              <p className="text-background/70 text-sm leading-relaxed mb-4">{benefit.description}</p>
              <span className="inline-block bg-primary/20 text-primary text-xs font-bold px-3 py-1.5 rounded-lg">
                {benefit.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-blue py-12 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-3xl">🎯</span>
          <h2 className="text-2xl font-extrabold text-white">
            Sua Vez de Brilhar!
          </h2>
        </div>
        <h3 className="text-2xl font-extrabold text-white mb-6">
          Vamos Criar Juntos?
        </h3>
        
        <p className="text-white/90 text-base mb-8 leading-relaxed">
          Agora que você viu toda a dedicação do nosso processo, está esperando o quê? Chama no WhatsApp e vamos transformar seu sonho em realidade agora mesmo! 🚀
        </p>

        <div className="space-y-3">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-background text-foreground font-bold py-4 rounded-2xl text-base hover:bg-background/90 transition-colors"
          >
            <svg className="w-6 h-6 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quero Meu Manto Agora!
          </a>
          
          <a
            href="/"
            className="flex items-center justify-center gap-2 w-full bg-transparent border-2 border-white text-white font-bold py-4 rounded-2xl text-base hover:bg-white/10 transition-colors"
          >
            <Rocket className="w-5 h-5" />
            Explorar Modelos Prontos
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Producao;
