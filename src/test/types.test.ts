// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import { Etudiant, Bulletin } from "../types";

describe("Types - Etudiant", () => {
  test("Etudiant doit avoir les propriétés nom et notes", () => {
    const etudiant: Etudiant = { nom: "Alice", notes: [15, 18, 16, 14] };
    expect(etudiant.nom).toBe("Alice");
    expect(Array.isArray(etudiant.notes)).toBe(true);
    expect(etudiant.notes).toEqual([15, 18, 16, 14]);
  });

  test("notes doit être un tableau de nombres", () => {
    const etudiant: Etudiant = { nom: "Bob", notes: [10, 12, 9, 11] };
    etudiant.notes.forEach((note) => {
      expect(typeof note).toBe("number");
    });
  });
});

describe("Types - Bulletin", () => {
  test("Bulletin doit avoir les propriétés nom, moyenne et appreciation", () => {
    const bulletin: Bulletin = { nom: "Alice", moyenne: 15.75, appreciation: "Très bien" };
    expect(bulletin.nom).toBe("Alice");
    expect(typeof bulletin.moyenne).toBe("number");
    expect(bulletin.moyenne).toBeCloseTo(15.75);
    expect(typeof bulletin.appreciation).toBe("string");
    expect(bulletin.appreciation).toBe("Très bien");
  });
});
