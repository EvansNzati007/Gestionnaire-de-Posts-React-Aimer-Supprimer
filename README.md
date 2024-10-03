
# Gestionnaire de Posts React : Aimer & Supprimer

Une application web simple et moderne pour gérer des posts avec des fonctionnalités de **liker** et **supprimer**. Ce projet est construit avec **React** et présente une interface épurée et responsive.

## Fonctionnalités

- **Afficher des posts** : Chaque post a un titre, une description et peut être aimé ou supprimé.
- **Liker des posts** : Les utilisateurs peuvent aimer un post, ce qui est reflété visuellement.
- **Supprimer des posts** : Les utilisateurs peuvent supprimer des posts de la liste.
- **Compteur de likes** : Un compteur dans la barre de navigation affiche le nombre de posts aimés.



## Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir installé ces outils sur votre machine :

- [Node.js](https://nodejs.org/) (v12 ou supérieur)
- [npm](https://www.npmjs.com/) (v6 ou supérieur)

### Étapes d'installation

1. Clonez ce repository :

   ```bash
   git clone https://github.com/mon-utilisateur/mon-repo.git
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd mon-repo
   ```

3. Installez les dépendances nécessaires :

   ```bash
   npm install
   ```

4. Lancez l'application en mode développement :

   ```bash
   npm start
   ```

   L'application sera accessible à l'adresse : `http://localhost:3000`.

## Structure du projet

Voici un aperçu de la structure des fichiers du projet :

```
/src
├── /composants
│   ├── NavBar.js    # Composant de la barre de navigation avec compteur de likes
│   └── Post.js      # Composant qui gère l'affichage et les actions sur chaque post
├── App.js           # Composant principal qui gère les posts et leurs interactions
├── App.css          # Styles de l'application
└── index.js         # Point d'entrée principal du projet
```

## Utilisation

### Liker un post

Cliquez sur le bouton **"Liker"** pour aimer un post. Le texte du bouton changera en **"Déjà Liker"**, et le post sera visuellement marqué.

### Supprimer un post

Cliquez sur le bouton **"Effacer"** pour supprimer un post de la liste. L'interface sera mise à jour automatiquement.

### Affichage du compteur

La barre de navigation affiche en temps réel le nombre de posts qui ont été aimés.

## Styles

Les styles de l'application sont définis dans le fichier `App.css`. L'application utilise un design moderne, épuré et responsive.

## Technologies utilisées

- **React** : Bibliothèque JavaScript pour la construction de l'interface utilisateur.
- **CSS** : Pour la mise en page et le design.

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez proposer des améliorations ou signaler des problèmes, n'hésitez pas à créer une **issue** ou à soumettre une **pull request**.

## Auteurs

- **Nzati Doumbi Evans** - Créateur et développeur principal.

## Licence



---

Ce fichier `README.md` explique de manière claire et concise le fonctionnement du projet, son installation et sa structure. N'hésitez pas à l'adapter selon vos besoins spécifiques.