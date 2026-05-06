export type Critique = {
  slug: string;
  film: string;
  realisateur: string;
  note: number;
  punchline: string;
  color: string;
};

export const critiques: Critique[] = [
  {
    slug: "amour-apocalypse",
    film: "Amour Apocalypse",
    realisateur: "Anne Émond",
    note: 4,
    punchline: "Un mélo de fin du monde, mais lumineux.",
    color: "#f28b82",
  },
  {
    slug: "la-danse-des-renards",
    film: "La Danse des Renards",
    realisateur: "Valéry Carnoy",
    note: 4,
    punchline: "Un premier long franc, nerveux, beau.",
    color: "#4a90d9",
  },
  {
    slug: "sorda",
    film: "Sorda",
    realisateur: "Eva Libertad",
    note: 5,
    punchline: "Le geste juste, la maternité comme paysage.",
    color: "#ffd966",
  },
];
