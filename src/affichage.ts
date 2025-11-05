import { Etudiant, Bulletin } from "./types";
import { genererBulletin } from "./calculs";

export function afficherBulletins(etudiants: Etudiant[]): void {
  let bulletins: Bulletin[] = [];
  for (const etudiant of etudiants) {
    bulletins.push(genererBulletin(etudiant));
  }
  console.log("Bulletins des étudiants :\n");
  console.table(bulletins);
}
