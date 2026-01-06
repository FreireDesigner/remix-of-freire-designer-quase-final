import { useState, useRef, useEffect } from "react";
import { Star, MessageCircle, Heart, Users, ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";

const projetos = [
  {
    id: 1,
    titulo: "Time Estrelas FC - Uniformes Completos",
    descricao: "Desenvolvemos um projeto completo para o time Estrelas FC, incluindo camisetas de jogo, treino e apresentação. A equipe escolheu um design moderno com degradê azul e detalhes em dourado. O resultado surpreendeu todos os jogadores e torcedores!",
    features: ["120 camisetas personalizadas", "Impressão em sublimação", "Entrega em 10 dias úteis", "Tecido dry-fit premium"],
    imagem: null
  },
  {
    id: 2,
    titulo: "Interclasse Colégio São José - Edição 2024",
    descricao: "O interclasse 2024 foi um dos nossos projetos mais empolgantes! Criamos camisetas únicas para 8 turmas diferentes, cada uma com sua identidade visual exclusiva. As artes foram desenvolvidas em parceria com os alunos, resultando em designs autênticos e cheios de personalidade.",
    features: ["320 camisetas para 8 turmas", "8 designs exclusivos", "Participação dos alunos na criação", "Prazo cumprido antes do evento"],
    imagem: null
  },
  {
    id: 3,
    titulo: "Desbravadores Arautos do Rei",
    descricao: "Os Desbravadores Arautos do Rei nos procuraram para criar uniformes que representassem sua identidade e missão. Desenvolvemos um design que combina modernidade com os valores do grupo, em cores vibrantes que chamam atenção em qualquer evento.",
    features: ["85 uniformes completos", "Design exclusivo do emblema", "Material resistente", "Prazo de 12 dias úteis"],
    imagem: null
  }
];

const avaliacoes = [
  {
    nome: "Marcos Silva",
    projeto: "Interclasse",
    estrelas: 5,
    comentario: "Qualidade impecável! As camisetas do nosso interclasse ficaram perfeitas e duraram o ano todo."
  },
  {
    nome: "Ana Carolina",
    projeto: "Desbravadores",
    estrelas: 5,
    comentario: "Excelente atendimento! A equipe nos ajudou em cada etapa e o resultado superou nossas expectativas."
  },
  {
    nome: "Pedro Santos",
    projeto: "Time Futebol",
    estrelas: 5,
    comentario: "Nosso time nunca teve uniformes tão bonitos! A qualidade do tecido e da estampa são incríveis."
  },
  {
    nome: "Maria Oliveira",
    projeto: "Formatura",
    estrelas: 5,
    comentario: "Fizeram exatamente o que pedimos! A arte ficou linda e chegou antes do prazo. Super recomendo!"
  }
];

const parceiros = [
  { inicial: "C", nome: "Colégio São José" },
  { inicial: "T", nome: "Time Estrelas FC" },
  { inicial: "D", nome: "Desbravadores AR" },
  { inicial: "E", nome: "Escola Municipal" },
  { inicial: "U", nome: "União Jovem" },
  { inicial: "C", nome: "Clube Esportivo" }
];

const instagramPhotos = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  label: `FOTO #${i + 1}`
}));

const Feedbacks = () => {
  const carouselRef1 = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-800 to-primary text-white px-4 py-12 text-center relative">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-normal">5.0 Estrelas • 500+ Avaliações</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          Histórias de Sucesso
        </h1>
        
        <p className="text-white/90 text-base font-light max-w-sm mx-auto">
          Conheça os projetos que transformamos em realidade e o que nossos clientes têm a dizer sobre nós
        </p>
        
        <WaveDivider variant="blue-to-white" />
      </section>

      {/* Projetos em Destaque */}
      <section className="px-4 py-12">
        <h2 className="text-2xl font-semibold text-center text-foreground mb-2">
          Projetos em Destaque
        </h2>
        
        <p className="text-center text-muted-foreground font-light mb-8">
          Alguns dos nossos trabalhos mais marcantes e os resultados que conquistamos juntos
        </p>
        
        <div className="space-y-8">
          {projetos.map((projeto, index) => (
            <div key={projeto.id}>
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded-2xl mb-4 flex items-center justify-center">
                <span className="text-gray-400 font-light">Imagem do Projeto</span>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-3 py-1 rounded-full mb-3">
                <span className="text-sm font-medium">Projeto #{projeto.id}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {projeto.titulo}
              </h3>
              
              <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                {projeto.descricao}
              </p>
              
              <ul className="space-y-2 mb-6">
                {projeto.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {index < projetos.length - 1 && (
                <div className="border-t border-border my-8" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* O Que Nossos Clientes Dizem - WhatsApp Screenshots */}
      <section className="px-4 py-12 bg-muted/30">
        <h2 className="text-2xl font-semibold text-center text-foreground mb-2">
          O Que Nossos Clientes Dizem
        </h2>
        
        <p className="text-center text-muted-foreground font-light mb-8">
          Conversas reais com clientes que amaram o resultado
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[180px]">
              <MessageCircle className="w-10 h-10 text-gray-400 mb-3" />
              <span className="text-sm font-medium text-gray-500">PRINT #{num}</span>
              <span className="text-xs text-gray-400">Screenshot WhatsApp</span>
            </div>
          ))}
        </div>
      </section>

      {/* Avaliações dos Clientes */}
      <section className="px-4 py-12">
        <h2 className="text-2xl font-semibold text-center text-foreground mb-2">
          Avaliações dos Clientes
        </h2>
        
        <p className="text-center text-muted-foreground font-light mb-8">
          Veja o que nossos clientes dizem sobre nosso trabalho
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          {avaliacoes.map((avaliacao, index) => (
            <div key={index} className="bg-card rounded-2xl p-4 shadow-sm border border-border">
              {/* Avatar */}
              <div className="w-14 h-14 bg-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-semibold text-center text-foreground mb-1">
                {avaliacao.nome}
              </h3>
              
              {/* Stars */}
              <div className="flex justify-center gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Project Badge */}
              <div className="flex justify-center mb-3">
                <span className="bg-blue-100 text-primary text-xs px-3 py-1 rounded-full font-medium">
                  {avaliacao.projeto}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground font-light text-center leading-relaxed">
                {avaliacao.comentario}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Parceiros de Sucesso */}
      <section className="px-4 py-12 bg-muted/30">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-2 rounded-full">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Parceiros de Sucesso</span>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold text-center text-foreground mb-2">
          Grandes Nomes Que Confiam Em Nós
        </h2>
        
        <p className="text-center text-muted-foreground font-light mb-3">
          Instituições, times e escolas que escolheram qualidade e profissionalismo
        </p>
        
        <p className="text-center text-primary font-medium italic mb-8">
          Sua marca pode estar aqui também!
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          {parceiros.map((parceiro, index) => (
            <div key={index} className="bg-card rounded-2xl p-4 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{parceiro.inicial}</span>
              </div>
              <span className="text-xs text-muted-foreground font-light">LOGO DA MARCA</span>
            </div>
          ))}
        </div>
      </section>

      {/* Seja Nosso Próximo Modelo - Instagram */}
      <section className="px-4 py-12 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
          <Instagram className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          📸 Seja Nosso Próximo Modelo!
        </h2>
        
        <p className="text-muted-foreground font-light mb-2">
          Recebeu seu pedido? <span className="text-primary font-medium">Tire uma foto incrível</span> e marque <span className="text-primary font-medium">@freiredesigner</span> no Instagram!
        </p>
        
        <p className="text-muted-foreground font-light italic mb-6">
          As melhores fotos aparecem aqui e ganham destaque nas nossas redes!
        </p>
        
        <a 
          href="https://instagram.com/freiredesigner" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          <Instagram className="w-5 h-5" />
          Seguir Agora e Marcar
        </a>
      </section>

      {/* Instagram Carousel Row 1 */}
      <div className="relative">
        <div 
          ref={carouselRef1}
          className="flex gap-4 overflow-x-auto hide-scrollbar px-4 py-4"
        >
          {instagramPhotos.slice(0, 4).map((photo) => (
            <div 
              key={photo.id}
              className="flex-shrink-0 w-40 h-48 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: photo.id % 2 === 0 ? '#fce7f3' : '#e0e7ff' }}
            >
              <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Instagram className="w-4 h-4 text-pink-500" />
              </div>
              <Instagram className="w-12 h-12 text-purple-400 mb-2" />
              <span className="text-primary font-medium text-sm">{photo.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Carousel Row 2 */}
      <div className="relative mb-8">
        <div 
          ref={carouselRef2}
          className="flex gap-4 overflow-x-auto hide-scrollbar px-4 py-4"
        >
          {instagramPhotos.slice(4).map((photo) => (
            <div 
              key={photo.id}
              className="flex-shrink-0 w-40 h-48 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: photo.id % 2 === 0 ? '#dbeafe' : '#fce7f3' }}
            >
              <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Instagram className="w-4 h-4 text-pink-500" />
              </div>
              <Instagram className="w-12 h-12 text-purple-400 mb-2" />
              <span className="text-primary font-medium text-sm">{photo.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-6 text-center bg-pink-50">
        <p className="text-muted-foreground font-light">
          <Heart className="w-4 h-4 inline text-pink-500 mr-1" />
          Mais de <span className="text-primary font-semibold">2.500 fotos</span> compartilhadas por clientes satisfeitos!
        </p>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-primary to-blue-700 text-white px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Faça Parte Dessa História!
        </h2>
        
        <p className="text-white/90 font-light mb-8 leading-relaxed">
          Junte-se aos nossos clientes satisfeitos e transforme suas ideias em realidade com qualidade e profissionalismo
        </p>
        
        <button 
          onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
          className="w-full bg-white text-primary px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-3 mb-4"
        >
          <MessageCircle className="w-5 h-5" />
          Solicitar Orçamento
        </button>
        
        <button 
          onClick={() => window.location.href = "/faca-sua"}
          className="w-full bg-primary/30 border-2 border-white text-white px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-3"
        >
          Criar Meu Modelo
        </button>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Feedbacks;
