import { Plus } from "lucide-react";
import { Product, formatMT } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface Props {
  product: Product;
  featured?: boolean;
}

export const ProductCard = ({ product, featured }: Props) => {
  const { add } = useCart();

  const handleAdd = () => {
    add(product);
    toast.success(`${product.name} adicionado ao carrinho`);
  };

  return (
    <div className="group relative flex flex-col rounded-2xl border border-border bg-card shadow-card overflow-hidden transition-smooth hover:-translate-y-1 hover:shadow-glow">
      <div className="relative aspect-square overflow-hidden bg-muted">
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.name} - jogo de tabuleiro`}
            loading="lazy"
            width={800}
            height={800}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 gradient-brand flex items-center justify-center p-6">
            <span className="text-3xl md:text-4xl font-black text-primary-foreground text-center leading-tight tracking-tight drop-shadow-lg">
              {product.name}
            </span>
          </div>
        )}
        {featured && (
          <span className="absolute top-3 left-3 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-bold text-primary border border-primary/30">
            Destaque
          </span>
        )}
        <span className="absolute top-3 right-3 rounded-full bg-foreground/10 backdrop-blur px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 gap-3">
        <div className="flex-1">
          <h3 className="font-bold text-foreground leading-tight">{product.name}</h3>
          {product.description && (
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
          )}
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-lg font-black text-gradient">{formatMT(product.price)}</span>
          <Button size="sm" onClick={handleAdd} className="gradient-brand text-primary-foreground border-0 hover:opacity-90">
            <Plus className="h-4 w-4 mr-1" /> Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};
