import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export const Featured = () => {
  const items = products.filter((p) => p.featured);
  return (
    <section id="destaques" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">Mais procurados</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-black text-foreground">Jogos em <span className="text-gradient">destaque</span></h2>
          <p className="mt-3 text-muted-foreground">Selecionados para começar bem qualquer noite de jogos.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p) => (
            <div key={p.id} className="animate-fade-up" style={{ animationDelay: `${items.indexOf(p) * 0.08}s` }}>
              <ProductCard product={p} featured />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
