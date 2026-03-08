## 1) Présentation du projet

**Description rapide de la page reproduite :**
Il s’agit d’une landing page pour **Inovasi Agriplot**. La page inclut :

* Un **header fixe** avec logo et navigation principale
* Une **section hero** avec titre, sous-titre et badges
* Une section **trending articles**
* Une section **Sustainability Cards** présentant des services ou produits
* Une section **FAQ**
* Un **footer** complet avec logo, liens, contacts et adresses

**Structure générale choisie :**

* **Header** – navigation et dashboard
* **Hero** – titre principal, description, badges et tags
* **TrendingArticles** – liste des articles récents
* **SustainabilityGoals** – cartes de services/produits
* **Faq** – questions fréquentes avec accordéon
* **Footer** – informations de contact et liens utiles

---

## 2) Application des concepts d’ergonomie

**Hiérarchie visuelle :**

* Titres en grande taille
* Sous-titres plus petits et en gris clair pour indiquer un niveau inférieur
* Badges et CTA clairement distincts par couleur et forme

**Charge cognitive :**

* La page est segmentée en sections distinctes avec des **espaces blancs**
* Chaque section a un objectif unique.

**Pattern de lecture utilisé :**

* Pattern **F** sur le header et les listes d’articles
* Pattern **Z** pour le hero, qui attire d’abord l’œil sur le badge, puis le titre, puis le CTA

**CTA mis en avant :**

* `Get in touch`, `Dashboard` et `Contact us` sont en boutons colorés contrastés
* Taille, couleur et position fixée pour attirer l’attention

**Application des heuristiques de Nielsen :**

* **Correspondance entre le système et le monde réel** : labels explicites (`Dashboard`, `Contact us`)
* **Contrôle et liberté de l’utilisateur** : navigation claire, liens vers toutes les pages importantes
* **Prévention des erreurs** : boutons CTA clairement distincts

---

## 3) Accessibilité

**Respect des WCAG :**

* Contraste texte/fond respecté (texte noir sur fond clair, texte blanc sur fond foncé)
* Badges et boutons ont un contraste suffisant pour la lisibilité

**Gestion du focus :**

* Les liens et boutons ont des styles de focus visibles

**Choix sémantiques HTML :**

* `<header>`, `<section>`, `<h1>`, `<h2>`, `<h3>` correctement utilisés pour la hiérarchie
* `<nav>` pour la navigation
* `<ul>` et `<li>` pour les listes d’articles et FAQ

---

## 4) Choix techniques Tailwind

**Définition des tokens :**

* Variables CSS globales pour couleurs :

  ```css
  --color-bg-dark: #111111;
  --color-white: #ffffff;
  --color-black: #000000;
  --color-gray: #9ca3af;
  --color-gray-light: #f9fafb;
  --color-emerald: #10b981;
  --color-emerald-light: #d1fae5;
  ```
* Cela permet de **centraliser le thème** et de faciliter les changements globaux

**Structuration des sections :**

* Chaque section est un composant React (`Hero`, `TrendingArticles`, `SustainabilityGoals`, `Faq`, `Footer`)
* Layout responsive avec `grid` et `flex`

**Utilities créées :**

* `text-(--color-black)`, `text-(--color-gray)`, `bg-(--color-emerald-light)`
* Permettent d’éviter la répétition et de respecter le design system

**Gestion du responsive :**

* Breakpoints Tailwind : `sm`, `md`, `lg`
* Grids adaptatifs pour Sustainability Cards et Articles

---

## 5) Difficultés rencontrées

**Problèmes techniques :**

* Intégratione et choix des **variables CSS avec Tailwind**
* Gestion des couleurs dynamiques dans les classes Tailwind (`text-(--color-gray)`)

**Problèmes responsive :**

* Alignement des images et texte dans `ArticleCard` sur petit écran
* Badges et tags doivent rester lisibles et centrés

**Arbitrages faits :**

* Réduction du nombre de colonnes sur mobile pour les cartes
* Simplification de certains textes pour éviter la surcharge cognitive

