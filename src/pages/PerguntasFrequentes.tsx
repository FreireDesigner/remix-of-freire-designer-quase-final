import { HelpCircle, MessageCircle, Mail, Sparkles, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WaveDivider from "@/components/WaveDivider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQCategory {
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "Pedidos e Orçamentos",
    questions: [
      {
        question: "Como faço um pedido?",
        answer: "Para fazer um pedido, basta entrar em contato conosco pelo WhatsApp ou e-mail. Nossa equipe irá te orientar em todo o processo, desde a escolha do modelo até a finalização do pedido."
      },
      {
        question: "Quanto tempo demora para receber o orçamento?",
        answer: "Nossos orçamentos são enviados em até 24 horas úteis após o recebimento de todas as informações necessárias sobre seu projeto."
      },
      {
        question: "Qual o valor mínimo de pedido?",
        answer: "O valor mínimo de pedido varia de acordo com o tipo de produto. Entre em contato conosco para mais informações sobre seu projeto específico."
      },
      {
        question: "Fazem orçamento sem compromisso?",
        answer: "Sim! Todos os nossos orçamentos são gratuitos e sem compromisso. Você pode solicitar quantos orçamentos precisar antes de tomar sua decisão."
      },
    ]
  },
  {
    title: "Artes e Criação",
    questions: [
      {
        question: "Quantas revisões estão incluídas?",
        answer: "Oferecemos revisões ilimitadas até que você fique completamente satisfeito com o resultado. Nosso objetivo é entregar exatamente o que você imaginou."
      },
      {
        question: "Vocês criam personagens do zero?",
        answer: "Sim! Nossa equipe de designers é especializada em criar personagens exclusivos e únicos para seu projeto, desde mascotes até figuras personalizadas."
      },
      {
        question: "Posso usar artes prontas como referência?",
        answer: "Claro! Você pode enviar referências de artes que goste para que nossa equipe crie algo inspirado, respeitando sempre os direitos autorais."
      },
      {
        question: "Em quais formatos vocês entregam os arquivos?",
        answer: "Entregamos os arquivos em diversos formatos, incluindo PNG, PDF, AI, CDR, dependendo da sua necessidade e do tipo de impressão que será utilizada."
      },
    ]
  },
  {
    title: "Pagamento e Prazos",
    questions: [
      {
        question: "Quais formas de pagamento aceitam?",
        answer: "Aceitamos PIX, cartão de crédito (em até 12x), boleto bancário e transferência. O pagamento pode ser dividido conforme combinado."
      },
      {
        question: "Quando devo pagar?",
        answer: "Trabalhamos com 50% de entrada para iniciar o projeto e 50% na entrega final. Condições especiais podem ser negociadas para pedidos maiores."
      },
      {
        question: "Qual o prazo de entrega?",
        answer: "O prazo varia de acordo com a complexidade do projeto. Em média, projetos simples levam de 3 a 5 dias úteis, e projetos mais complexos de 7 a 15 dias úteis."
      },
      {
        question: "Oferecem desconto para grupos grandes?",
        answer: "Sim! Oferecemos descontos progressivos para pedidos em grandes quantidades. Quanto maior o pedido, maior o desconto aplicado."
      },
    ]
  },
  {
    title: "Impressão e Produção",
    questions: [
      {
        question: "Vocês imprimem as camisetas?",
        answer: "Não realizamos a impressão diretamente, mas trabalhamos com parceiros de confiança que garantem a melhor qualidade de impressão para seus projetos."
      },
      {
        question: "Os arquivos servem para qualquer tipo de impressão?",
        answer: "Sim! Preparamos os arquivos de acordo com o tipo de impressão desejada (sublimação, serigrafia, DTF, etc.), garantindo a melhor qualidade final."
      },
      {
        question: "Vocês ajudam a escolher o tipo de tecido/impressão?",
        answer: "Com certeza! Nossa equipe está preparada para orientar sobre os melhores tecidos e tipos de impressão para cada projeto, considerando durabilidade, custo e resultado final."
      },
    ]
  },
  {
    title: "Direitos e Propriedade",
    questions: [
      {
        question: "A arte fica exclusiva para mim?",
        answer: "Sim! Todas as artes criadas são exclusivas e não serão revendidas ou utilizadas para outros clientes. O design é completamente seu."
      },
      {
        question: "Posso usar a arte em outros produtos?",
        answer: "Sim! Após a finalização do projeto, você tem total liberdade para usar a arte em qualquer produto ou material que desejar."
      },
      {
        question: "Vocês assinam as artes?",
        answer: "Não inserimos assinaturas ou marcas d'água nas artes finais. O arquivo entregue é limpo e pronto para uso profissional."
      },
    ]
  },
];

const PerguntasFrequentes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-800 to-primary text-white px-4 py-12 text-center relative">
        <div className="w-20 h-20 border-4 border-white rounded-full mx-auto mb-6 flex items-center justify-center">
          <HelpCircle className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-3xl font-bold mb-2 leading-tight">
          Tire Todas as Suas
        </h1>
        <h1 className="text-3xl font-bold mb-4 text-white">
          Dúvidas! 💡
        </h1>
        
        <p className="text-white/90 text-base font-light max-w-sm mx-auto">
          Respostas rápidas e diretas para você começar seu projeto agora mesmo
        </p>
        
        <WaveDivider variant="blue-to-white" />
      </section>

      {/* FAQ Categories */}
      <section className="px-4 py-8">
        {faqCategories.map((category, index) => (
          <div key={index} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-3">
              {category.questions.map((faq, faqIndex) => (
                <AccordionItem 
                  key={faqIndex} 
                  value={`${index}-${faqIndex}`}
                  className="bg-card border border-border rounded-xl px-4 data-[state=open]:border-primary"
                >
                  <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-50 px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Não encontrou sua<br />resposta?
        </h2>
        
        <p className="text-muted-foreground font-light mb-8">
          Nossa equipe está pronta para ajudar você <span className="text-primary font-medium">agora mesmo!</span>
        </p>
        
        <button 
          onClick={() => window.open("https://wa.me/5511932856472", "_blank")}
          className="w-full bg-primary text-white px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-3 mb-3"
        >
          Falar no WhatsApp
        </button>
        
        <button 
          onClick={() => window.location.href = "/central-atendimento"}
          className="w-full bg-white border-2 border-primary text-primary px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-3"
        >
          Enviar E-mail
        </button>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PerguntasFrequentes;
