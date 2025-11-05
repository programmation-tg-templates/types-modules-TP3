import { Etudiant, Bulletin } from "./types";

// Calcul de la moyenne
export function calculerMoyenne(notes: number[]): number {
  if (notes.length === 0) return 0;
  let somme: number = 0;
  for (const note of notes) {
    somme += note;
  }

  return parseFloat((somme / notes.length).toFixed(2));
}

// Attribution d’une appréciation
export function donnerAppreciation(moyenne: number): string {
  if (moyenne >= 16) return "Excellent";
  if (moyenne >= 14) return "Très bien";
  if (moyenne >= 12) return "Bien";
  if (moyenne >= 10) return "Passable";
  return "Insuffisant";
}

// Génération du bulletin d’un élève
export function genererBulletin(etudiant: Etudiant): Bulletin {
  const moyenne = calculerMoyenne(etudiant.notes);
  const appreciation = donnerAppreciation(moyenne);
  return { nom: etudiant.nom, moyenne, appreciation };
}
