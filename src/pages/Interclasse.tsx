import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";
import { Trophy, ArrowRight, Users, Shirt, MessageCircle, Zap, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stats = [
  { value: "5+", label: "Anos no Mercado" },
  { value: "500+", label: "Turmas Atendidas" },
  { value: "98%", label: "Satisfação" },
];

const bestSellers = [
  { name: "Modelo Best Seller 10", sales: "330+ vendidos" },
  { name: "Modelo Best Seller 11", sales: "350+ vendidos" },
  { name: "Modelo Best Seller 12", sales: "280+ vendidos" },
  { name: "Modelo Best Seller 13", sales: "310+ vendidos" },
];

const mascotes = [
  { name: "Interclasse com Mascote 1", type: "Leão" },
  { name: "Interclasse com Mascote 2", type: "Águia" },
  { name: "Interclasse com Mascote 3", type: "Tigre" },
  { name: "Interclasse com Mascote 4", type: "Lobo" },
];

const timesEsportivos = [
  { name: "Time Esportivo 1", type: "Futebol" },
  { name: "Time Esportivo 2", type: "Basquete" },
  { name: "Time Esportivo 3", type: "Vôlei" },
  { name: "Time Esportivo 4", type: "Handebol" },
];

const personagens = [
  { name: "Personagem 1", type: "Super-Heróis" },
  { name: "Personagem 2", type: "Anime" },
  { name: "Personagem 3", type: "Games" },
  { name: "Personagem 4", type: "Filmes" },
];

const inclusos = [
  { icon: Users, title: "Nome da Turma", description: "Já incluído no preço base", included: true },
  { icon: Shirt, title: "Número Individual", description: "Já incluído no preço base", included: true },
  { icon: MessageCircle, title: "Logo/Escudo", description: "Já incluído no preço base", included: true },
];

const extras = [
  { icon: Zap, title: "Design Exclusivo", price: "+R$ 30.00" },
];

const faqItems = [
  { question: "Qual o prazo de entrega para uniformes de Interclasse?", answer: "O prazo de entrega varia de 7 a 15 dias úteis, dependendo da quantidade e complexidade do pedido." },
  { question: "Qual a quantidade mínima de peças?", answer: "A quantidade mínima é de 10 peças por modelo. Consulte-nos para pedidos menores." },
  { question: "Posso escolher as cores da minha turma?", answer: "Sim! Você pode escolher as cores que representam sua turma e personalizamos conforme sua preferência." },
  { question: "Como funciona a aprovação do layout?", answer: "Após o pedido, enviamos uma arte para aprovação. Só iniciamos a produção após sua confirmação." },
];

const Interclasse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 pt-8 pb-4">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#1a4fc9]/60 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">Especialistas em Uniformes de Interclasse</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-black text-white text-center leading-tight mb-6">
            Uniformes de<br />Interclasse
          </h1>

          {/* Description */}
          <p className="text-white/90 text-center text-lg font-medium leading-relaxed mb-8 max-w-md mx-auto">
            Vista sua turma com estilo e personalidade! Designs exclusivos, qualidade garantida e preços que cabem no seu bolso.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-black text-white italic">{stat.value}</div>
                <div className="text-white/80 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Image Container */}
          <div className="mx-auto max-w-sm">
            <div className="bg-[#2563eb]/40 rounded-3xl border-2 border-[#3b82f6]/30 aspect-square flex items-center justify-center">
              <span className="text-[#5b9aff]/50 text-sm font-medium">O_IMAGE_INTERCLASSE</span>
            </div>
          </div>
        </section>

        <WaveDivider variant="blue-to-white" />

        {/* Best Sellers Section */}
        <section className="bg-background px-4 py-10">
          <h2 className="text-3xl font-black text-[#2563eb] text-center leading-tight mb-4">
            Modelos Mais<br />Vendidos
          </h2>
          <p className="text-foreground/70 text-center text-base leading-relaxed mb-8 max-w-md mx-auto">
            Confira os uniformes de interclasse que fizeram o maior sucesso entre centenas de turmas por todo o Brasil. Designs aprovados, testados e amados pelos alunos.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {bestSellers.map((item, index) => (
              <div key={index} className="bg-[#f8f9fc] rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-[#f0f2f7] flex items-center justify-center">
                  <span className="text-[#c5c9d6] text-xs font-medium">SELLER_INTERCLASSE</span>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-foreground text-sm leading-tight">{item.name}</h3>
                  <p className="text-foreground/60 text-xs mt-1">{item.sales}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <WaveDivider variant="white-to-blue" />

        {/* Mascotes Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 py-10">
          <h2 className="text-3xl font-black text-white text-center leading-tight mb-3">
            Interclasse com<br />Mascotes
          </h2>
          <p className="text-white/80 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Dê identidade à sua turma com mascotes incríveis
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {mascotes.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-[#fdf2f2] flex items-center justify-center">
                  <span className="text-[#e8c5c5] text-xs font-medium">MASCOTE_INTERCLASSE</span>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-foreground text-sm leading-tight">{item.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Trophy className="w-3.5 h-3.5 text-foreground/60" />
                    <span className="text-foreground/60 text-xs">{item.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-white hover:bg-white/95 text-[#1e40af] py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg">
            <span>Ver Mais</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </section>

        <WaveDivider variant="blue-to-white" />

        {/* Times Esportivos Section */}
        <section className="bg-background px-4 py-10">
          <h2 className="text-3xl font-black text-[#2563eb] text-center leading-tight mb-3">
            Interclasse com<br />Times Esportivos
          </h2>
          <p className="text-foreground/70 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Para as turmas que amam esporte e competição
          </p>

          <div className="grid grid-cols-2 gap-3">
            {timesEsportivos.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/30">
                <div className="aspect-[4/3] bg-[#ecfdf5] flex items-center justify-center">
                  <span className="text-[#a7f3d0] text-xs font-medium">ESPORTE_INTERCLASSE</span>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-foreground text-sm leading-tight">{item.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Trophy className="w-3.5 h-3.5 text-foreground/60" />
                    <span className="text-foreground/60 text-xs">{item.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <WaveDivider variant="white-to-blue" />

        {/* Personagens Section */}
        <section className="bg-gradient-to-br from-[#0038a8] to-[#0059fa] px-4 py-10">
          <h2 className="text-3xl font-black text-white text-center leading-tight mb-3">
            Interclasse com<br />Personagens
          </h2>
          <p className="text-white/80 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Heróis, animes, games e muito mais!
          </p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {personagens.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-[#fdf2f2] flex items-center justify-center">
                  <span className="text-[#e8c5c5] text-xs font-medium">PERSONAGEM_INTERCLASSE</span>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-foreground text-sm leading-tight">{item.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <MessageCircle className="w-3.5 h-3.5 text-foreground/60" />
                    <span className="text-foreground/60 text-xs">{item.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-white hover:bg-white/95 text-[#1e40af] py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg">
            <span>Ver Mais</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </section>

        <WaveDivider variant="blue-to-white" />

        {/* O que está Incluído Section */}
        <section className="bg-background px-4 py-10">
          <h2 className="text-3xl font-black text-foreground text-center leading-tight mb-3">
            O que está Incluído?
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
                      Incluído
                    </span>
                  </div>
                  <p className="text-foreground/60 text-sm mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {extras.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-[#fef3c7] to-[#fde68a] border-2 border-[#f59e0b] rounded-2xl p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#f59e0b] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-foreground text-base">{item.title}</h3>
                    <span className="text-[#f59e0b] font-bold text-base">{item.price}</span>
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
            Tudo que você precisa saber sobre uniformes de Interclasse
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
            <Trophy className="w-16 h-16 text-white" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-2xl font-black text-white leading-tight mb-4">
            Deseja criar um modelo<br />único para vocês?
          </h2>
          
          <p className="text-white/80 text-base leading-relaxed mb-8 max-w-sm mx-auto">
            Fale com nosso Designer agora e receba sua proposta personalizada para fechar o pedido!
          </p>

          <button className="w-full max-w-sm bg-white hover:bg-white/95 text-[#1e40af] py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg mx-auto">
            <MessageCircle className="w-5 h-5" />
            <span>Criar Meu Modelo Agora</span>
          </button>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Interclasse;
