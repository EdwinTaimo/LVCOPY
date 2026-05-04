import { Moon, ShoppingCart, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";

const nav = [
  { href: "#destaques", label: "Destaques" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
  { href: "#contactos", label: "Contactos" },
];

export const Header = () => {
  const { count, setOpen } = useCart();
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="#top" className="hover-scale">
          <Logo size={36} animated />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-muted-foreground hover:text-primary transition-smooth relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Alternar tema">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpen(true)}
            className="relative gap-2"
            aria-label="Abrir carrinho"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Carrinho</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-bold text-primary-foreground shadow-glow">
                {count}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
