import monopoly from "@/assets/games/monopoly.jpg";
import unoNoMercy from "@/assets/games/uno-nomercy.jpg";
import xadrez from "@/assets/games/xadrez.jpg";
import jenga from "@/assets/games/jenga.jpg";

export type Category = "UNO" | "Clássicos" | "Família" | "Festa";

export interface Product {
  id: string;
  name: string;
  price: number; // MT
  category: Category;
  image?: string; // optional real image
  featured?: boolean;
  description?: string;
}

export const products: Product[] = [
  { id: "monopoly", name: "Monopoly", price: 2250, category: "Clássicos", image: monopoly, featured: true, description: "O clássico jogo de negócios e propriedades." },
  { id: "xadrez", name: "Xadrez", price: 1850, category: "Clássicos", image: xadrez, featured: true, description: "Estratégia milenar para todas as idades." },
  { id: "uno-nomercy", name: "UNO No Mercy", price: 350, category: "UNO", image: unoNoMercy, featured: true, description: "Sem piedade. A versão mais intensa do UNO." },
  { id: "jenga", name: "Classic Jenga", price: 1000, category: "Clássicos", image: jenga, featured: true, description: "Equilíbrio, suspense e diversão garantida." },
  { id: "uno-wild", name: "UNO Wild (Clássico)", price: 300, category: "UNO" },
  { id: "uno-allwild", name: "UNO All Wild", price: 300, category: "UNO" },
  { id: "uno-flip", name: "UNO Flip", price: 300, category: "UNO" },
  { id: "uno-lilo", name: "UNO Lilo & Stitch", price: 300, category: "UNO" },
  { id: "uno-stacko", name: "UNO Stacko", price: 1500, category: "UNO" },
  { id: "30s", name: "30 Seconds", price: 1000, category: "Festa" },
  { id: "dominoes", name: "Dominoes", price: 850, category: "Clássicos" },
  { id: "mikado", name: "Mikado Spiel", price: 350, category: "Família" },
];

export const formatMT = (n: number) => `${n.toLocaleString("pt-PT")} MT`;
