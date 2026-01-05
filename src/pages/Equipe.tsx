import { useState, useEffect, useRef } from "react";
import { Star, Sparkles, Users, Heart, TrendingUp, Award, Rocket, Palette, MessageCircle, CheckCircle, Scissors, ShirtIcon, ThumbsUp, Headphones, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";

const timelineEvents = [
  {
    year: "2019",
    title: "O Começo do Sonho",
    description: "Fundação da FDesigner com foco em grupos de desbravadores. Primeiros projetos e aprendizados valiosos.",
    icon: Sparkles,
    color: "bg-primary"
  },
  {
    year: "2020-2021",
    title: "Crescimento e Expansão",
    description: "Ampliamos nosso portfólio para interclasses e times de futebol. Parcerias estratégicas com gráficas de qualidade.",
    icon: TrendingUp,
    color: "bg-primary"
  },
  {
    year: "2022-2023",
    title: "Consolidação no Mercado",
    description: "Atingimos a marca de 500+ turmas atendidas. Referência em uniformes escolares e personagens personalizados.",
    icon: Award,
    color: "bg-primary"
  },
  {
    year: "2024-2025",
    title: "Inovação e Excelência",
    description: "Implementação de tecnologias de mockup 3D e sistema de personalização online. Sempre além do esperado!",
    icon: Rocket,
    color: "bg-primary"
  }
];

const pilares = [
  {
    icon: Palette,
    title: "Criatividade Sem Limites",
    subtitle: "DESIGN QUE ENCANTA",
    description: "Cada projeto é único e desenvolvido com paixão pela arte. Suas ideias ganham vida em designs exclusivos que contam histórias e criam conexões emocionais.",
    color: "bg-purple-500"
  },
  {
    icon: Award,
    title: "Qualidade Impecável",
    subtitle: "EXCELÊNCIA EM CADA DETALHE",
    description: "Padrão profissional em todos os trabalhos. Tecidos premium, impressão de alta definição e acabamento perfeito. Sua satisfação é nossa missão.",
    color: "bg-primary"
  },
  {
    icon: Rocket,
    title: "Agilidade que Surpreende",
    subtitle: "RAPIDEZ COM PERFEIÇÃO",
    description: "Entrega rápida sem comprometer a excelência. Seu projeto pronto quando você precisa, com prazos realistas e cumpridos à risca.",
    color: "bg-orange-500"
  },
  {
    icon: Heart,
    title: "Satisfação Garantida",
    subtitle: "VOCÊ NO CENTRO DE TUDO",
    description: "Seu sonho é nossa prioridade. Acompanhamento personalizado do início ao fim, com aprovação antes da produção e suporte humanizado.",
    color: "bg-pink-500"
  }
];

const diferenciais = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Não somos apenas fornecedores, somos parceiros que entendem a importância do seu evento. Cada cliente é único para nós."
  },
  {
    icon: CheckCircle,
    title: "Aprovação Antes da Produção",
    description: "Você aprova cada detalhe antes de produzirmos. Mockups 3D realistas para visualização perfeita do resultado final."
  },
  {
    icon: Palette,
    title: "Design Exclusivo que se Destaca",
    description: "Artes 100% originais criadas especialmente para você. Nada de templates genéricos, cada projeto é uma obra única."
  },
  {
    icon: Sparkles,
    title: "Vista suas Maiores Ideias",
    description: "Transformamos seus conceitos em realidade visual. Sua visão ganha forma através de arte profissional e personalizada."
  },
  {
    icon: Truck,
    title: "Entrega em Todo Brasil",
    description: "Atendemos clientes de norte a sul do país. Envio seguro e rastreável para qualquer região brasileira."
  }
];

const equipe = [
  { name: "Designer Gráfico", description: "Criação de artes exclusivas" },
  { name: "Costura", description: "Acabamento perfeito" },
  { name: "Confecção", description: "Produção de qualidade" },
  { name: "Aprovação de Arte", description: "Validação com cliente" },
  { name: "Suporte", description: "Atendimento humanizado" }
];

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Turmas Atendidas" },
  { icon: Heart, value: 97, suffix: "%", label: "Satisfação" },
  { icon: Sparkles, value: 500, suffix: "+", label: "Artes Criadas" }
];

const experienceStats = [
  { value: 5, suffix: "+", label: "Anos de Experiência" },
  { value: 200, suffix: "+", label: "Clientes Satisfeitos" },
  { value: 500, suffix: "+", label: "Artes Criadas" },
  { value: 97, suffix: "%", label: "Satisfação" }
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  
  return count;
};

const Equipe = () => {
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-800 to-primary text-white px-4 py-12 text-center relative">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Star className="w-4 h-4" />
          <span className="text-sm font-normal">5 Anos de História e Dedicação</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Conheça a<br />FDesigner
        </h1>
        
        <p className="text-white/90 text-base font-light mb-4 max-w-sm mx-auto">
          Mais do que um estúdio de design, somos realizadores de sonhos.
        </p>
        
        <p className="text-white font-medium text-lg mb-8">
          5 anos entregando pedidos sempre além do esperado!
        </p>
        
        {/* Stats - Transparent rectangles style */}
        <div className="space-y-3 max-w-sm mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="border-2 border-white/40 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 flex items-center justify-center gap-3">
              <stat.icon className="w-5 h-5" />
              <span className="font-normal text-white">{stat.value}{stat.suffix} {stat.label}</span>
            </div>
          ))}
        </div>
        
        <WaveDivider variant="blue-to-white" />
      </section>

      {/* Nossa Jornada - Timeline */}
      <section className="px-4 py-12">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 mx-auto block text-center">
          <span className="text-sm font-normal text-primary">De Onde Viemos</span>
        </div>
        
        <h2 className="text-2xl font-semibold text-center text-foreground mb-2">
          Uma Jornada de Paixão e Dedicação
        </h2>
        
        <p className="text-center text-muted-foreground font-light mb-8 max-w-sm mx-auto">
          Cada marca tem uma história. A nossa é feita de sonhos realizados, clientes satisfeitos e muita arte exclusiva!
        </p>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - solid color */}
          <div className="absolute left-[28px] top-0 bottom-0 w-1 bg-primary rounded-full" />
          
          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex gap-4">
                {/* Icon with blue border */}
                <div className={`w-14 h-14 ${event.color} rounded-full flex items-center justify-center flex-shrink-0 z-10 border-4 border-blue-400`}>
                  <event.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content with blue border */}
                <div className="flex-1 bg-blue-50 rounded-2xl p-4 border-2 border-blue-400">
                  <div className="flex items-center gap-2 text-primary font-medium mb-1">
                    <event.icon className="w-4 h-4" />
                    <span>{event.year}</span>
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão Section */}
      <section className="bg-gradient-to-b from-primary to-blue-700 text-white px-4 py-12 mx-4 rounded-3xl mb-8">
        <h2 className="text-2xl font-medium text-center mb-4">
          Nossa Missão:<br />Entregar Sempre Além do Esperado
        </h2>
        
        <p className="text-white/90 text-center mb-8 leading-relaxed font-light">
          Acreditamos que cada evento merece ser único e memorável. Por isso, trabalhamos com paixão para criar artes que contam histórias, fortalecem laços e eternizam momentos especiais. Não somos apenas um estúdio de design - somos parceiros que entendem a importância do seu momento especial.
        </p>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center justify-center gap-3 max-w-xs mx-auto">
          <Heart className="w-5 h-5 text-pink-300" />
          <span className="font-normal">Comprometimento total com sua satisfação</span>
        </div>
      </section>

      {/* Pilares Section */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Os Pilares da FDesigner
        </h2>
        
        <p className="text-muted-foreground font-light mb-8">
          Valores que guiam cada decisão, cada arte e cada relacionamento com nossos clientes
        </p>
        
        <div className="space-y-4">
          {pilares.map((pilar, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <div className={`w-16 h-16 ${pilar.color} rounded-2xl flex items-center justify-center mb-4`}>
                <pilar.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-medium text-foreground mb-1">{pilar.title}</h3>
              <p className="text-sm font-medium text-primary mb-3">{pilar.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{pilar.description}</p>
              
              <div className="w-12 h-1 bg-primary rounded-full mt-4" />
            </div>
          ))}
        </div>
      </section>

      {/* Wave before Stats */}
      <div className="relative">
        <WaveDivider variant="white-to-blue" />
      </div>

      {/* Stats Counter Section */}
      <section ref={statsRef} className="bg-primary px-4 py-12">
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {experienceStats.map((stat, index) => {
            const count = useCountUp(stat.value, 2000, isStatsVisible);
            return (
              <div key={index} className="text-center text-white">
                <div className="text-3xl font-bold mb-1">
                  {count}{stat.suffix}
                </div>
                <p className="text-white/80 text-sm font-light">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Wave after Stats */}
      <div className="relative">
        <WaveDivider variant="blue-to-white" />
      </div>

      {/* Review CTA */}
      <section className="px-4 py-8 text-center bg-background">
        <p className="text-muted-foreground font-light mb-4">
          Gostou do nosso trabalho? Deixe sua avaliação!
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="https://instagram.com/fdesigner" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Avaliar no Instagram
          </a>
          <a 
            href="https://tiktok.com/@fdesigner" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Avaliar no TikTok
          </a>
        </div>
      </section>

      {/* Conheça Nossa Equipe */}
      <section className="px-4 py-12 bg-muted/30">
        <h2 className="text-2xl font-semibold text-center text-foreground mb-2">
          Conheça Nossa Equipe
        </h2>
        
        <p className="text-center text-muted-foreground font-light mb-8">
          Profissionais dedicados em cada etapa do seu projeto
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          {equipe.map((membro, index) => (
            <div key={index} className={`bg-card rounded-2xl p-4 text-center shadow-sm border border-border ${index === equipe.length - 1 ? 'col-span-2 max-w-[200px] mx-auto' : ''}`}>
              {/* Photo placeholder */}
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                <span className="text-xs text-gray-400 font-light">Foto</span>
              </div>
              <h3 className="font-medium text-foreground text-sm mb-1">{membro.name}</h3>
              <p className="text-xs text-muted-foreground font-light">{membro.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Por Que Escolher */}
      <section className="px-4 py-12">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full">
            <span className="text-sm font-normal">O Que Nos Torna Especiais</span>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold text-center text-foreground mb-2">
          Por Que Escolher a FDesigner?
        </h2>
        
        <p className="text-center text-muted-foreground font-light mb-8">
          Não somos apenas mais um fornecedor. Somos o parceiro que você pode confiar nos momentos importantes!
        </p>
        
        <div className="space-y-4">
          {diferenciais.map((item, index) => (
            <div key={index} className="bg-blue-50 rounded-2xl p-5 border-2 border-blue-400">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-primary to-blue-700 text-white px-4 py-12 text-center">
        <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-80" />
        
        <h2 className="text-2xl font-semibold mb-4">
          Pronto para Criar Algo Incrível Juntos?
        </h2>
        
        <p className="text-white/90 mb-8 font-light">
          Junte-se a <span className="font-medium">500+ turmas e grupos</span> que já confiam em nosso trabalho. Vamos transformar suas ideias em arte visual memorável!
        </p>
        
        <button 
          onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
          className="w-full bg-white text-foreground px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-3 mb-4"
        >
          <MessageCircle className="w-5 h-5" />
          Solicitar Orçamento Agora
        </button>
        
        <button 
          onClick={() => window.location.href = "/"}
          className="w-full bg-transparent border-2 border-white text-white px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-3"
        >
          <Sparkles className="w-5 h-5" />
          Ver Nossos Modelos
        </button>
        
        <div className="border-t border-white/20 mt-8 pt-6 space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm font-light">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Atendimento Humanizado</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm font-light">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Aprovação Antes da Produção</span>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Equipe;
