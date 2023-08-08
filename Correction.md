# Correction E10

## Etape 1 - Les images

Pour que notre bundler ViteJs traite correctement les images, il faut les importer. Comme ça lors du build il saura où aller chercher les images une fois qu'elle seront traitées.

Déplacer les fichiers images dans `src/assets`

Modifier `App.svelte` pour charger le logo différement :

```js
<script>
    import logo from './assets/coclockworking.png';
</script>


<header>
  <nav aria-label="header navigation">
      <a href="/" class="logo" title="Co'Clock Working" aria-label="accueil du site">
          <img src="{logo}" alt="Logo de l'entreprise">
      </a>
```

Au niveau CSS, il faut juste changer les chemins : 
```css
background-image: url("../assets/bandeau.jpg");
...
background: url("../assets/pexels-cowomen-2041627.jpg");
```

## Etape 2 - Les tableaux

Créer 2 tableaux contenant les données. Voici un exemple de structure qui fonctionne : 

```js
const nav_links = [
    {
        "label": "Page d'accueil du site",
        "text": "Accueil",
        "url": "#"
    },
    {
        "label": "Page de réservation de salles",
        "text": "Réservation",
        "url": "#"
    },
    {
        "label": "Formulaire de connexion au site",
        "text": "Se connecter",
        "url": "#"
    },
    {
        "label": "Formulaire d'inscription au site",
        "text": "S'enregistrer",
        "url": "#"
    },
];
```
```js
const stat_values = [
    {
        "text": "Total de coworkers",
        "value": "603"
    },
    {
        "text": "Espaces de coworking",
        "value": "15"
    },
    {
        "text": "Actuellement disponibles",
        "value": "3"
    },
]
```

## Etape 3 - Dynamisation

Grace à l'instruction `each` je peux parcourir mon tableau et afficher un li pour chaque élément.

Avec un élément en main, je peux extraire les valeurs avec les clés `label`, `text` et `url`

Pour le menu de navigation :

```js
<ul id="menu2" class="links" role="menu" aria-labelledby="menubutton">
    {#each nav_links as nav}
    <li role="none">
        <a role="menuitem" aria-label="{nav.label}" href="{nav.url}">{nav.text}</a>
    </li>
    {/each}
</ul>
```

Pour les statistiques :

```js
<ul>
    {#each stat_values as stat}
    <li>
        <h3>{stat.text}</h3>
        <big>{stat.value}</big>
    </li>
    {/each}
</ul>
```

## Etape 4 - Découpage de la page en composants

### Menu

Créer le fichier `Menu.svelte` et copier la balise `nav`

```js
<nav aria-label="header navigation">
    <a href="/" class="logo" title="Co'Clock Working" aria-label="accueil du site">
        <img src="{logo}" alt="Logo de l'entreprise">
    </a>

    <ul id="menu2" class="links" role="menu" aria-labelledby="menubutton">
    {#each nav_links as nav}
        <li role="none">
            <a role="menuitem" aria-label="{nav.label}" href="{nav.url}">{nav.text}</a>
        </li>
    {/each}
    </ul>

    <button type="button"
        id="menubutton"
        aria-haspopup="true"
        aria-controls="menu2">
        <i class="fa-solid fa-bars"></i>
    </button>
</nav>
```

On déplace également la constante `nav_links` et le logo (+ modification du chemin) :

```js
<script>
import logo from '../assets/coclockworking.png';

const nav_links = [
    {
        "label": "Page d'accueil du site",
        "text": "Accueil",
        "url": "#"
    },
    {
        "label": "Page de réservation de salles",
        "text": "Réservation",
        "url": "#"
    },
    {
        "label": "Formulaire de connexion au site",
        "text": "Se connecter",
        "url": "#"
    },
    {
        "label": "Formulaire d'inscription au site",
        "text": "S'enregistrer",
        "url": "#"
    },
];
</script>
```

Et on finit en ajoutant le composant dans `App.svelte` : 

```js
<script>
    import Menu from "./lib/Menu.svelte";

    ...
</script>

<header>
    <Menu />
    ...
```

### Stats

Créer le fichier `Stats.svelte` et copier la balise la `section`

```js
<section class="stats" aria-labelledby="stats-title">
    <h2 id="stats-title">Quelques chiffres</h2>
    <ul>
        {#each stat_values as stat}
        <li>
            <h3>{stat.text}</h3>
            <big>{stat.value}</big>
        </li>
        {/each}
    </ul>
</section>
```

Copier également la constant `stat_value`

Et pour finir, importer le composant dans `App.svelte`

```js

```

### Autres composants 

On pourrait imaginer créer un composant `Header.svelte`

Le contenu de la section introduction mérite-t-il d'étre dans un composant ?

On se posera la question lorsque l'on devra gérer toutes les pages ;)