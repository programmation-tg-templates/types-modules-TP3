import { Etudiant } from "./types";
import { afficherBulletins } from "./affichage";

const classe: Etudiant[] = [
  { nom: "Alice", notes: [15, 18, 16, 14] },
  { nom: "Bob", notes: [10, 12, 9, 11] },
  { nom: "Charlie", notes: [8, 7, 6] },
  { nom: "Diane", notes: [17, 16, 18, 19] },
];

afficherBulletins(classe);
