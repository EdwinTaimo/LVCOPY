import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatMT } from "@/data/products";
import { useState } from "react";
import { CheckoutDialog } from "./CheckoutDialog";
import { Logo } from "./Logo";

export const CartDrawer = () => {
  const { items, open, setOpen, setQty, remove, total, count, clear } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-full sm:max-w-md flex flex-col">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              O seu carrinho
              {count > 0 && <span className="text-sm font-normal text-muted-foreground">({count} {count === 1 ? "item" : "itens"})</span>}
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto py-4 -mx-6 px-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-10">
                <Logo size={60} showText={false} animated />
                <p className="text-muted-foreground">O seu carrinho está vazio.</p>
                <Button variant="outline" onClick={() => setOpen(false)}>Ver catálogo</Button>
              </div>
            ) : (
              <ul className="space-y-3">
                {items.map(({ product, quantity }) => (
                  <li key={product.id} className="flex gap-3 rounded-xl border border-border p-3 bg-card">
                    <div className="h-16 w-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                      ) : (
                        <div className="h-full w-full gradient-brand flex items-center justify-center p-1">
                          <span className="text-[8px] font-black text-primary-foreground text-center leading-tight">
                            {product.name}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm truncate">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{formatMT(product.price)}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => setQty(product.id, quantity - 1)}>
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-6 text-center text-sm font-bold">{quantity}</span>
                        <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => setQty(product.id, quantity + 1)}>
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-7 w-7 ml-auto text-destructive" onClick={() => remove(product.id)}>
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm text-gradient">{formatMT(product.price * quantity)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <SheetFooter className="flex-col gap-3 sm:flex-col border-t border-border pt-4">
              <div className="flex justify-between items-center w-full">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="text-2xl font-black text-gradient">{formatMT(total)}</span>
              </div>
              <Button
                size="lg"
                className="w-full gradient-brand text-primary-foreground border-0 shadow-glow"
                onClick={() => setCheckoutOpen(true)}
              >
                Finalizar encomenda
              </Button>
              <Button variant="ghost" size="sm" onClick={clear} className="text-muted-foreground">
                Limpar carrinho
              </Button>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>

      <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </>
  );
};
