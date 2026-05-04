import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { products, Category } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories: ("Todos" | Category)[] = ["Todos", "UNO", "Clássicos", "Família", "Festa"];

export const Catalog = () => {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("Todos");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCat = cat === "Todos" || p.category === cat;
      const matchesQ = p.name.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQ;
    });
  }, [query, cat]);

  return (
    <section id="catalogo" className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">Loja completa</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-black text-foreground">Catálogo <span className="text-gradient">ET TOY'S</span></h2>
          <p className="mt-3 text-muted-foreground">Pesquise, filtre e adicione todos os jogos que quiser ao carrinho.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Pesquisar jogo..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 h-11"
              maxLength={60}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Button
                key={c}
                variant={cat === c ? "default" : "outline"}
                size="sm"
                onClick={() => setCat(c)}
                className={cat === c ? "gradient-brand text-primary-foreground border-0" : ""}
              >
                {c}
              </Button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">Nenhum jogo encontrado.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
