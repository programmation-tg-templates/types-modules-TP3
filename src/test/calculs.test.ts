// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import { calculerMoyenne, donnerAppreciation, genererBulletin } from '../calculs';
import { Etudiant, Bulletin } from '../types';

describe('calculerMoyenne', () => {
  test('calcule la moyenne de plusieurs notes', () => {
    expect(calculerMoyenne([15, 18, 16, 14])).toBe(15.75);
    expect(calculerMoyenne([10, 12, 9, 11])).toBe(10.5);
    expect(calculerMoyenne([8, 7, 6])).toBe(7);
    expect(calculerMoyenne([17, 16, 18, 19])).toBe(17.5);
  });

  test('retourne 0 si le tableau est vide', () => {
    expect(calculerMoyenne([])).toBe(0);
  });

  test('arrondit à deux décimales', () => {
    expect(calculerMoyenne([10.123, 10.456])).toBe(10.29);
  });
});

describe('donnerAppreciation', () => {
  test('Excellent si moyenne >= 16', () => {
    expect(donnerAppreciation(16)).toBe('Excellent');
    expect(donnerAppreciation(17.5)).toBe('Excellent');
  });

  test('Très bien si moyenne >= 14 et < 16', () => {
    expect(donnerAppreciation(14)).toBe('Très bien');
    expect(donnerAppreciation(15.75)).toBe('Très bien');
  });

  test('Bien si moyenne >= 12 et < 14', () => {
    expect(donnerAppreciation(12)).toBe('Bien');
    expect(donnerAppreciation(13.99)).toBe('Bien');
  });

  test('Passable si moyenne >= 10 et < 12', () => {
    expect(donnerAppreciation(10)).toBe('Passable');
    expect(donnerAppreciation(11.99)).toBe('Passable');
  });

  test('Insuffisant si moyenne < 10', () => {
    expect(donnerAppreciation(9.99)).toBe('Insuffisant');
    expect(donnerAppreciation(0)).toBe('Insuffisant');
    expect(donnerAppreciation(7)).toBe('Insuffisant');
  });
});

describe('genererBulletin', () => {
  test('génère le bulletin complet pour Alice', () => {
    const etudiant: Etudiant = { nom: 'Alice', notes: [15, 18, 16, 14] };
    const attendu: Bulletin = { nom: 'Alice', moyenne: 15.75, appreciation: 'Très bien' };
    expect(genererBulletin(etudiant)).toEqual(attendu);
  });

  test('génère le bulletin complet pour Bob', () => {
    const etudiant: Etudiant = { nom: 'BobPrince', notes: [10, 12, 9, 11] };
    const attendu: Bulletin = { nom: 'BobPrince', moyenne: 10.5, appreciation: 'Passable' };
    expect(genererBulletin(etudiant)).toEqual(attendu);
  });

  test('génère le bulletin complet pour Charlie', () => {
    const etudiant: Etudiant = { nom: 'Charlie', notes: [8, 7, 6] };
    const attendu: Bulletin = { nom: 'Charlie', moyenne: 7, appreciation: 'Insuffisant' };
    expect(genererBulletin(etudiant)).toEqual(attendu);
  });

  test('génère le bulletin complet pour Diane', () => {
    const etudiant: Etudiant = { nom: 'Diane', notes: [17, 16, 18, 19] };
    const attendu: Bulletin = { nom: 'Diane', moyenne: 17.5, appreciation: 'Excellent' };
    expect(genererBulletin(etudiant)).toEqual(attendu);
  });

  test('bulletin avec tableau de notes vide', () => {
    const etudiant: Etudiant = { nom: 'Vide', notes: [] };
    const attendu: Bulletin = { nom: 'Vide', moyenne: 0, appreciation: 'Insuffisant' };
    expect(genererBulletin(etudiant)).toEqual(attendu);
  });
});