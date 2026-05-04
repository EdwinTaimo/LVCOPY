import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { ArrowRight, MessageCircle } from "lucide-react";

const Stars = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 40 }).map((_, i) => (
      <span
        key={i}
        className="absolute h-1 w-1 rounded-full bg-foreground/40 animate-twinkle"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      />
    ))}
  </div>
);

export const Hero = () => {
  return (
    <section id="top" className="relative bg-hero overflow-hidden">
      <Stars />
      <div className="container relative py-20 md:py-32 flex flex-col items-center text-center">
        <div className="animate-logo-pop animate-float">
          <Logo size={110} showText={false} animated />
        </div>
        <h1 className="mt-8 text-4xl md:text-6xl font-black tracking-tight animate-fade-up">
          <span className="text-gradient">ET TOY'S</span>
          <span className="block text-foreground mt-2 text-2xl md:text-3xl font-bold tracking-[0.3em]">
            GAMES &amp; ENTERTAINMENT
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Os melhores jogos de tabuleiro e cartas em Moçambique. Encomende já pelo WhatsApp e divirta-se em família.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Button size="lg" asChild className="gradient-brand text-primary-foreground border-0 shadow-glow hover:opacity-90">
            <a href="#catalogo">
              Ver catálogo <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://wa.me/258833973761" target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp direto
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
