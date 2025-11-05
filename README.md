# Types et modules - TP3 - Gestion de notes

## Consignes

Vous allez concevoir une application qui **gère les notes d'une classe** d'étudiants.

L’application devra permettre de :

- Calculer la moyenne de chaque étudiant;
- Déterminer une appréciation en fonction de la moyenne;
- Générer et afficher un bulletin récapitulatif pour chaque étudiant.

## Arborescence de fichiers

```
📁 src/
├── 📄 affichage.ts
├── 📄 calculs.ts
├── 📄 main.ts
└── 📄 types.ts
```

## Fonctions

### Fichier `types.ts`

- Définit le type `Etudiant` composé d'un `nom` et d'un tableau de nombres `notes`.
- Définit le type `Bulletin` composé d'un `nom`, d'une `moyenne` et d'une `appreciation`

### Fichier `calculs.ts`

- `calculerMoyenne(notes: number[]): number`
  Calcule la moyenne d'un tableau de notes.
- `donnerAppreciation(note: number): string`
  Génère une appréciation en fonction de la note :
  | Note | Appréciation |
  |------|--------------|
  | ≥ 16 | Excellent |
  | ≥ 14 | Très bien |
  | ≥ 12 | Bien |
  | ≥ 10 | Passable |
  | < 10 | Insuffisant |
- `genererBulletin(etudiant: Etudiant): Bulletin`
  Cette fonction utilise les fonctions précédentes pour générer le bulletin de l'étudiant.

### Fichier `affichage.ts`

- `afficherBulletins(etudiants: Etudiant[]): void`
  Cette fonction affiche les livres contenus dans le tableau à l'aide de la commande `console.table(...)` ou le message `Aucun livre trouvé.` si le tableau est vide.

## Programme principal

Le fichier `main.ts` utilise les fonctions définies dans les autres fichiers pour produire l'affichage suivant :

```
Bulletins des étudiants :
┌─────────┬─────────────┬─────────┬───────────────┐
│ (index) │ nom         │ moyenne │ appreciation  │
├─────────┼─────────────┼─────────┼───────────────┤
│ 0       │ 'Alice'     │ 15.75   │ 'Très bien'   │
│ 1       │ 'BobPrince' │ 10.5    │ 'Passable'    │
│ 2       │ 'Charlie'   │ 7       │ 'Insuffisant' │
│ 3       │ 'Diane'     │ 17.5    │ 'Excellent'   │
└─────────┴─────────────┴─────────┴───────────────┘
```

Les notes des étudiants sont :
| Nom | Notes |
|-----|-------|
| Alice | 15, 18, 16, 14 |
| Bob | 10, 12, 9, 11 |
| Charlie | 8, 7, 6 |
| Diane | 17, 16, 18, 19 |

## Astuces

- Pour réussir les tests unitaires, n'utilisez que des imports nommés.
