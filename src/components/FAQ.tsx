import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como faço uma encomenda?",
    a: "Adicione os jogos ao carrinho, clique em 'Finalizar encomenda', preencha os seus dados e será redirecionado para o WhatsApp com a mensagem pronta a enviar.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Aceitamos M-Pesa, e-Mola e transferência bancária. Os detalhes são confirmados no WhatsApp após o pedido.",
  },
  {
    q: "Fazem entregas em todo o lado?",
    a: "Entregamos em Maputo cidade e Matola. Para outras zonas, contacte-nos pelo WhatsApp para verificarmos disponibilidade e custo.",
  },
  {
    q: "Posso encomendar vários jogos de uma vez?",
    a: "Sim! O carrinho permite escolher quantos jogos quiser e ajustar as quantidades. Tudo segue numa única encomenda.",
  },
  {
    q: "Os jogos são originais?",
    a: "Sim, todos os nossos jogos são originais e novos.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container max-w-3xl">
        <div className="mb-10 text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">Dúvidas frequentes</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-black text-foreground">Antes de <span className="text-gradient">encomendar</span></h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl bg-card px-5 shadow-card">
              <AccordionTrigger className="text-left font-bold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
