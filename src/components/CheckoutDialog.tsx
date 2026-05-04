import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatMT } from "@/data/products";
import { Logo } from "./Logo";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "258833973761";

const schema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(100, "Máximo 100 caracteres"),
  phone: z
    .string()
    .trim()
    .min(7, "Contacto inválido")
    .max(20, "Contacto inválido")
    .regex(/^[0-9+\s()-]+$/, "Apenas números e + ( ) -"),
  zone: z.string().trim().min(2, "Indique a zona de entrega").max(120),
  notes: z.string().trim().max(300, "Máximo 300 caracteres").optional(),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
  const { items, total, clear, setOpen } = useCart();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", zone: "", notes: "" },
  });

  const onSubmit = (data: FormValues) => {
    if (items.length === 0) {
      toast.error("O carrinho está vazio");
      return;
    }
    const lines = [
      "*🎲 NOVA ENCOMENDA — ET TOY'S*",
      "",
      `*Cliente:* ${data.name}`,
      `*Contacto:* ${data.phone}`,
      `*Zona de entrega:* ${data.zone}`,
      data.notes ? `*Notas:* ${data.notes}` : null,
      "",
      "*Pedido:*",
      ...items.map(({ product, quantity }) => `• ${quantity}x ${product.name} — ${formatMT(product.price * quantity)}`),
      "",
      `*TOTAL: ${formatMT(total)}*`,
    ].filter(Boolean) as string[];

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("A abrir WhatsApp com a sua encomenda...");
    clear();
    onOpenChange(false);
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-2">
            <Logo size={50} showText={false} animated />
          </div>
          <DialogTitle className="text-center">Finalizar encomenda</DialogTitle>
          <DialogDescription className="text-center">
            Preencha os seus dados. Será redirecionado para o WhatsApp com o pedido pronto.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl><Input placeholder="O seu nome" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem>
                <FormLabel>Contacto telefónico</FormLabel>
                <FormControl><Input placeholder="+258 ..." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="zone" render={({ field }) => (
              <FormItem>
                <FormLabel>Zona de entrega</FormLabel>
                <FormControl><Input placeholder="Cidade / bairro" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="notes" render={({ field }) => (
              <FormItem>
                <FormLabel>Notas (opcional)</FormLabel>
                <FormControl><Textarea placeholder="Informação adicional..." rows={3} {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <div className="flex justify-between items-center rounded-lg bg-muted/50 p-3">
              <span className="text-sm text-muted-foreground">Total da encomenda</span>
              <span className="text-xl font-black text-gradient">{formatMT(total)}</span>
            </div>

            <Button type="submit" size="lg" className="w-full gradient-brand text-primary-foreground border-0 shadow-glow">
              <MessageCircle className="mr-2 h-5 w-5" /> Enviar via WhatsApp
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
