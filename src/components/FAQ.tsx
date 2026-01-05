import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual o prazo de entrega?",
    answer: (
      <>
        Nosso prazo padrão de produção é de até <span className="text-primary font-semibold">7 dias úteis</span>. Após a produção, o prazo de entrega é de aproximadamente <span className="text-primary font-semibold">3 dias</span>, variando conforme a região. Caso a arte seja criada do zero pela nossa equipe de design, acrescentam-se até 2 dias úteis no prazo de produção.
        <br /><br />
        👉 Quer iniciar agora? Acesse a seção <span className="text-primary font-semibold">"Faça a Sua"</span> e envie sua ideia.
      </>
    ),
  },
  {
    question: "Qual a quantidade mínima de peças?",
    answer: (
      <>
        <span className="text-primary font-semibold">Não temos quantidade mínima</span>. Você pode pedir desde <span className="text-primary font-semibold">1 peça</span> até grandes quantidades. Quanto maior a quantidade, mais <span className="text-primary font-semibold">promoções e brindes exclusivos</span> você pode conquistar.
        <br /><br />
        👉 Veja os <span className="text-primary font-semibold">modelos disponíveis</span> ou monte sua camiseta agora mesmo.
      </>
    ),
  },
  {
    question: "Posso personalizar todos os modelos?",
    answer: (
      <>
        Sim. <span className="text-primary font-semibold">Todos os modelos</span> disponíveis no site podem ser personalizados. <span className="text-primary font-semibold">Nome, número e logotipo</span> já estão incluídos no valor da camiseta, <span className="text-primary font-semibold">sem custo adicional</span>. Alterações extras além disso podem ter um pequeno valor adicional, dependendo da personalização escolhida.
        <br /><br />
        👉 <span className="text-primary font-semibold">Escolha seu modelo</span> e comece a personalização.
      </>
    ),
  },
  {
    question: "Vocês fazem arte do zero?",
    answer: (
      <>
        <span className="text-primary font-semibold">Sim, fazemos</span>. Temos uma área exclusiva para <span className="text-primary font-semibold">criação de arte personalizada</span>. Ao acessar a seção "Faça a Sua", você pode enviar suas ideias, referências ou descrições diretamente para o nosso <span className="text-primary font-semibold">designer</span>, que desenvolverá a arte do zero para você.
        <br /><br />
        👉 Clique em <span className="text-primary font-semibold">"Faça a Sua"</span> e fale direto com o designer.
      </>
    ),
  },
  {
    question: "Fazem entrega em todo Brasil?",
    answer: (
      <>
        <span className="text-primary font-semibold">Sim</span>. Realizamos entregas para <span className="text-primary font-semibold">todo o Brasil</span>, com envio seguro e acompanhamento do pedido.
        <br /><br />
        👉 <span className="text-primary font-semibold">Faça seu pedido</span> de onde estiver.
      </>
    ),
  },
  {
    question: "Posso acompanhar meu pedido após a compra?",
    answer: (
      <>
        <span className="text-primary font-semibold">Sim</span>. Assim que o pagamento é confirmado, seu pedido entra em processamento e você pode <span className="text-primary font-semibold">acompanhar todas as etapas</span>. O designer entra em contato com você, e o acompanhamento acontece desde a parte gráfica, produção, confecção até o envio. Quando o pedido for postado, você receberá o <span className="text-primary font-semibold">código de rastreio</span> para acompanhar a entrega.
        <br /><br />
        👉 Acompanhe tudo com <span className="text-primary font-semibold">transparência e suporte direto</span>.
      </>
    ),
  },
  {
    question: "As cores da estampa ficam fiéis ao que vejo na tela?",
    answer: (
      <>
        <span className="text-primary font-semibold">Sim</span>. Nossas impressões são feitas com projeção de cor <span className="text-primary font-semibold">Epson Full HD</span>, utilizando tecnologia de ponta importada do Japão, o que garante <span className="text-primary font-semibold">máxima fidelidade de cores</span>.
        <br /><br />
        👉 Veja <span className="text-primary font-semibold">exemplos reais</span> nos modelos disponíveis no site.
      </>
    ),
  },
  {
    question: "O tecido desbota ou perde qualidade com o tempo?",
    answer: (
      <>
        <span className="text-primary font-semibold">Não</span>. Trabalhamos com <span className="text-primary font-semibold">Dry Fit Premium</span> e impressão de alta qualidade, tanto em DTF quanto em sublimação, justamente para garantir <span className="text-primary font-semibold">durabilidade e resistência</span>. Recomendamos apenas seguir os cuidados básicos de lavagem, disponíveis na descrição de cada modelo.
        <br /><br />
        👉 Confira os <span className="text-primary font-semibold">cuidados de cada produto</span> antes de finalizar.
      </>
    ),
  },
  {
    question: "Vocês fazem camisetas para empresas, eventos ou times?",
    answer: (
      <>
        <span className="text-primary font-semibold">Sim</span>. Desenvolvemos camisetas personalizadas para <span className="text-primary font-semibold">empresas, eventos, times esportivos</span> e também para igrejas. Trabalhamos tanto com estampa quanto com <span className="text-primary font-semibold">personalização total</span>, sempre adaptando o tecido e o acabamento para cada necessidade.
        <br /><br />
        👉 <span className="text-primary font-semibold">Fale com a gente</span> e solicite seu projeto personalizado.
      </>
    ),
  },
  {
    question: "Existe garantia em caso de defeito de produção?",
    answer: (
      <>
        Temos um rigoroso controle de pós-produção, onde cada peça é conferida antes do envio. Mesmo assim, você conta com <span className="text-primary font-semibold">garantia gráfica</span>. Caso exista qualquer erro gráfico, basta nos informar que enviaremos uma <span className="text-primary font-semibold">nova peça corrigida, sem custo adicional</span>.
        <br /><br />
        👉 <span className="text-primary font-semibold">Sua satisfação é prioridade</span>.
      </>
    ),
  },
];

const FAQ = () => {
  return (
    <section className="py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary mb-2">
          Perguntas Frequentes
        </h2>
        <p className="text-muted-foreground font-normal">
          Tire suas dúvidas sobre nossos serviços e processo de personalização
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card rounded-xl border border-border px-4 shadow-card"
          >
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 font-normal leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center mt-8">
        <p className="text-muted-foreground mb-4 font-normal">Não encontrou sua dúvida?</p>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 px-8 rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto transition-colors">
          <MessageCircle className="w-5 h-5" />
          Falar com Atendimento
        </button>
      </div>
    </section>
  );
};

export default FAQ;
