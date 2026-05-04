import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo size={32} animated />
        <nav className="flex flex-wrap gap-5 text-sm text-muted-foreground">
          <a href="#destaques" className="hover:text-primary transition-smooth">Destaques</a>
          <a href="#catalogo" className="hover:text-primary transition-smooth">Catálogo</a>
          <a href="#faq" className="hover:text-primary transition-smooth">FAQ</a>
          <a href="#contactos" className="hover:text-primary transition-smooth">Contactos</a>
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} ET TOY'S. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
