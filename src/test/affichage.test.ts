// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import { afficherBulletins } from '../affichage';
import { Etudiant } from '../types';

describe('afficherBulletins', () => {
  const etudiants: Etudiant[] = [
    { nom: 'Alice', notes: [15, 18, 16, 14] },
    { nom: 'BobPrince', notes: [10, 12, 9, 11] },
    { nom: 'Charlie', notes: [8, 7, 6] },
    { nom: 'Diane', notes: [17, 16, 18, 19] }
  ];

  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'table').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('affiche le tableau des bulletins avec les bons résultats', () => {
    afficherBulletins(etudiants);
    expect(console.log).toHaveBeenCalledWith("Bulletins des étudiants :\n");
    expect(console.table).toHaveBeenCalledWith([
      { nom: 'Alice', moyenne: 15.75, appreciation: 'Très bien' },
      { nom: 'BobPrince', moyenne: 10.5, appreciation: 'Passable' },
      { nom: 'Charlie', moyenne: 7, appreciation: 'Insuffisant' },
      { nom: 'Diane', moyenne: 17.5, appreciation: 'Excellent' }
    ]);
  });

  test('affiche le tableau vide si aucun étudiant', () => {
    afficherBulletins([]);
    expect(console.log).toHaveBeenCalledWith("Bulletins des étudiants :\n");
    expect(console.table).toHaveBeenCalledWith([]);
  });
});