export type Interview = {
  slug: string;
  name: string;
  film: string;
  color: string;
};

export const interviews: Interview[] = [
  { slug: "anne-emond", name: "Anne Émond", film: "Amour Apocalypse", color: "#f28b82" },
  { slug: "valery-carnoy", name: "Valéry Carnoy", film: "La Danse des Renards", color: "#4a90d9" },
  { slug: "sorda", name: "— Sorda", film: "Sorda", color: "#ffd966" },
  { slug: "chloe-robichaud", name: "Chloé Robichaud", film: "Deux femmes et quelques hommes", color: "#f28b82" },
  { slug: "namir-abdelmesseh", name: "Namir Abdelmesseh", film: "La Vie après Siham", color: "#4a90d9" },
  { slug: "carla-simon", name: "Carla Simón", film: "Romeria", color: "#f28b82" },
];
