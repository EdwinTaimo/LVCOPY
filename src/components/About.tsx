import { Logo } from "./Logo";
import { Sparkles, Truck, MessageCircle } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Originais & Selecionados", text: "Jogos cuidadosamente escolhidos para garantir diversão de qualidade." },
  { icon: Truck, title: "Entregas em Maputo", text: "Coordenamos a entrega rápida diretamente pelo WhatsApp." },
  { icon: MessageCircle, title: "Atendimento humano", text: "Tira dúvidas, recomendações e encomendas em conversa direta." },
];

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">Sobre nós</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-black text-foreground">
            A diversão começa na <span className="text-gradient">ET TOY'S</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Somos uma loja moçambicana de jogos de tabuleiro e cartas. Acreditamos que momentos em família e com amigos
            valem mais quando partilhados à volta de uma boa mesa de jogo. Trabalhamos com clássicos como Monopoly, Xadrez,
            Jenga e toda a família UNO.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-card p-4 shadow-card">
                <f.icon className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-bold text-sm text-foreground">{f.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative rounded-3xl bg-hero p-12 border border-border shadow-glow">
            <div className="animate-float">
              <Logo size={140} showText={false} animated />
            </div>
            <p className="mt-6 text-center text-sm tracking-[0.4em] text-muted-foreground font-bold">
              GAMES &amp; ENTERTAINMENT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
