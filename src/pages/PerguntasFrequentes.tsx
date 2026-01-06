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
    answer: React.ReactNode;
  }[];
}

const BlueText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-primary font-semibold">{children}</span>
);

const faqCategories: FAQCategory[] = [
  {
    title: "Pedidos e Orçamentos",
    questions: [
      {
        question: "Como faço um pedido?",
        answer: (
          <div className="space-y-3">
            <p>É simples.</p>
            <p>Você escolhe um <strong>modelo disponível no site</strong> e inicia a personalização.</p>
            <p>Se for um pedido único, você pode inserir todas as informações desejadas.</p>
            <p>No carrinho, é possível adicionar:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Nome personalizado</li>
              <li>Número nas costas</li>
              <li>Informar se deseja o modelo exatamente como está ou com alguma edição</li>
            </ul>
            <p>Como bônus, já incluímos <strong>nome personalizado</strong>, <strong>logo personalizado</strong> e <strong>número</strong> sem custo adicional.</p>
            <p>Caso queira outras alterações na arte, nosso designer entra em contato para alinhar tudo com você antes da produção.</p>
            <p className="pt-2">👉 Clique em <BlueText>Monte a sua</BlueText> e comece agora.</p>
          </div>
        )
      },
      {
        question: "Quanto tempo demora para receber o orçamento?",
        answer: (
          <div className="space-y-3">
            <p>O orçamento é feito <strong>diretamente no site</strong>.</p>
            <p>Você já visualiza valores, opções e detalhes antes mesmo de finalizar o pedido.</p>
            <p>Sem espera, sem surpresa.</p>
            <p className="pt-2">👉 <BlueText>Escolha um modelo</BlueText> e veja o valor na hora.</p>
          </div>
        )
      },
      {
        question: "Existe valor mínimo ou quantidade mínima?",
        answer: (
          <div className="space-y-3">
            <p>Não existe valor mínimo nem quantidade mínima.</p>
            <p>Você pode pedir <strong>1 peça ou quantas quiser</strong>.</p>
            <p>E quanto maior a quantidade, maiores são os <strong>descontos e brindes</strong> que aparecem automaticamente no site.</p>
            <p className="pt-2">👉 Veja as promoções disponíveis em cada modelo.</p>
          </div>
        )
      },
      {
        question: "Fazem orçamento sem compromisso?",
        answer: (
          <div className="space-y-3">
            <p>Sim.</p>
            <p>Você pode simular seu pedido, ver todos os valores e só confirmar quando tiver certeza.</p>
            <p className="pt-2">👉 <BlueText>Monte seu pedido</BlueText> sem compromisso.</p>
          </div>
        )
      },
    ]
  },
  {
    title: "Artes e Criação",
    questions: [
      {
        question: "Quantas revisões de arte estão incluídas?",
        answer: (
          <div className="space-y-3">
            <p>Estão incluídas <strong>2 revisões</strong>.</p>
            <p>Você solicita a arte, visualiza o mockup e pode pedir até duas edições antes da aprovação final.</p>
            <p className="pt-2">👉 Acompanhe todo o processo com o designer.</p>
          </div>
        )
      },
      {
        question: "Vocês criam personagens do zero?",
        answer: (
          <div className="space-y-3">
            <p>Sim.</p>
            <p>Criamos <strong>personagens do zero</strong> e artes totalmente exclusivas, desenvolvidas de acordo com a sua ideia.</p>
            <p className="pt-2">👉 Acesse <BlueText>Faça a Sua</BlueText> e envie sua ideia agora.</p>
          </div>
        )
      },
      {
        question: "Posso usar artes prontas como referência?",
        answer: (
          <div className="space-y-3">
            <p>Pode sim.</p>
            <p>Você pode enviar artes prontas, referências, ou até pedir para unir elementos de camisetas diferentes.</p>
            <p>Tudo é feito do seu jeito.</p>
            <p className="pt-2">👉 Envie suas referências e personalize.</p>
          </div>
        )
      },
      {
        question: "Em quais formatos vocês entregam a arte?",
        answer: (
          <div className="space-y-3">
            <p>A arte é entregue em <strong>mockup realista</strong> para aprovação.</p>
            <p>Caso queira adquirir a arte separadamente, também realizamos a venda do arquivo.</p>
            <p className="pt-2">👉 Consulte essa opção com o designer.</p>
          </div>
        )
      },
    ]
  },
  {
    title: "Pagamento e Prazos",
    questions: [
      {
        question: "Quais formas de pagamento aceitam?",
        answer: (
          <div className="space-y-3">
            <p>As formas de pagamento disponíveis variam conforme o modelo, mas no geral aceitamos:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>PIX</li>
              <li>Débito</li>
              <li>Crédito</li>
              <li>PicPay</li>
              <li>Mercado Pago</li>
            </ul>
            <p>O pagamento é realizado <strong>antes da confirmação do pedido</strong>.</p>
            <p className="pt-2">👉 <BlueText>Finalize seu pedido</BlueText> com segurança.</p>
          </div>
        )
      },
      {
        question: "Qual o prazo de entrega?",
        answer: (
          <div className="space-y-3">
            <p>O prazo padrão é de até <strong>7 dias úteis de produção</strong> + <strong>3 dias de envio</strong>.</p>
            <p>Caso a arte seja criada do zero, acrescentam-se até <strong>2 dias úteis</strong> ao prazo de produção.</p>
            <p className="pt-2">👉 Veja o prazo detalhado antes de <BlueText>fechar o pedido</BlueText>.</p>
          </div>
        )
      },
      {
        question: "Oferecem descontos para grupos grandes?",
        answer: (
          <div className="space-y-3">
            <p>Sim.</p>
            <p>Os descontos e brindes aparecem automaticamente de acordo com a quantidade escolhida.</p>
            <p className="pt-2">👉 Simule seu pedido e veja as promoções ativas.</p>
          </div>
        )
      },
    ]
  },
  {
    title: "Impressão e Produção",
    questions: [
      {
        question: "Como funciona a impressão e produção?",
        answer: (
          <div className="space-y-3">
            <p>Nós cuidamos de todo o processo.</p>
            <p>Primeiro realizamos a <strong>impressão da arte</strong>, depois fazemos a <strong>confecção e costura da camiseta</strong>, garantindo acabamento e qualidade.</p>
            <p className="pt-2">👉 Conheça nosso processo de produção.</p>
          </div>
        )
      },
      {
        question: "Os arquivos servem para qualquer tipo de impressão?",
        answer: (
          <div className="space-y-3">
            <p>Nossos arquivos são exclusivos.</p>
            <p>Porém, caso deseje, vendemos a arte separadamente para uso em outras gráficas também.</p>
            <p className="pt-2">👉 Consulte valores para compra da arte.</p>
          </div>
        )
      },
      {
        question: "Vocês ajudam a escolher o tecido e a impressão?",
        answer: (
          <div className="space-y-3">
            <p>Sim.</p>
            <p>Ajudamos você a escolher o <strong>tecido ideal</strong>.</p>
            <p>O tipo de impressão já está definido em cada modelo e explicado detalhadamente no site.</p>
            <p className="pt-2">👉 Acesse a página de <BlueText>Tecidos</BlueText> para saber mais.</p>
          </div>
        )
      },
    ]
  },
  {
    title: "Direitos e Propriedade",
    questions: [
      {
        question: "A arte fica exclusiva para mim?",
        answer: (
          <div className="space-y-3">
            <p>Por padrão, os modelos criados podem ser exibidos em nosso site.</p>
            <p>Caso queira a arte <strong>100% exclusiva</strong>, isso é possível, com um valor adicional.</p>
            <p className="pt-2">👉 <BlueText>Fale com a gente</BlueText> para solicitar exclusividade.</p>
          </div>
        )
      },
      {
        question: "Posso usar a arte em outros produtos?",
        answer: (
          <div className="space-y-3">
            <p>Sim.</p>
            <p>Você pode utilizar a arte em outros produtos sem problema.</p>
            <p className="pt-2">👉 Consulte condições com o designer.</p>
          </div>
        )
      },
      {
        question: "A arte é assinada?",
        answer: (
          <div className="space-y-3">
            <p>Entregamos a arte com um <strong>logo minimalista</strong>, discreto e sem chamar atenção.</p>
            <p>Caso prefira remover ou alterar essa assinatura, isso pode ser feito mediante valor adicional.</p>
            <p className="pt-2">👉 Personalize todos os detalhes do seu projeto.</p>
          </div>
        )
      },
    ]
  },
  {
    title: "Ainda tem dúvidas?",
    questions: [
      {
        question: "Qualquer dúvida?",
        answer: (
          <div className="space-y-3">
            <p>Se ainda restar alguma dúvida, basta clicar em <BlueText>Fale Conosco</BlueText> e falar diretamente com a equipe.</p>
            <p className="pt-2">👉 <BlueText>Fale com a gente agora mesmo.</BlueText></p>
          </div>
        )
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
      </section>
      
      <WaveDivider variant="blue-to-white" />

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
