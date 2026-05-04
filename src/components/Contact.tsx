import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contactos" className="py-20 bg-background">
      <div className="container">
        <div className="rounded-3xl bg-hero border border-border p-8 md:p-14 text-center shadow-glow">
          <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">Fale connosco</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-black text-foreground">
            Pronto para <span className="text-gradient">jogar</span>?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Encomende, tire dúvidas ou peça uma recomendação. Estamos disponíveis no WhatsApp e por chamada.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild className="gradient-brand text-primary-foreground border-0 shadow-glow">
              <a href="https://wa.me/258833973761" target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+258833973761">
                <Phone className="mr-2 h-5 w-5" /> +258 83 397 3761
              </a>
            </Button>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Maputo, Moçambique
          </div>
        </div>
      </div>
    </section>
  );
};
