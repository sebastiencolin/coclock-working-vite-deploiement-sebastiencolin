<script>
  import { link } from "svelte-spa-router";

  // Fonction pour afficher le menu en mobile
  function displayMenu() {
    const navMenu = document.querySelector(".nav-menu");
    // @ts-ignore
    navMenu.style.display = "flex";
    navMenu.style.left = 0;
  }

  // Masquer le menu en mobile
  function hideMenu() {
    const navMenu = document.querySelector(".nav-menu");
    // @ts-ignore
    navMenu.style.display = "none";
  }
</script>

<!-- Entête de page-->
<header>
  <!-- Lien vers la page d'accueil -->
  <a
    href="/"
    class="home-link-logo"
    aria-label="Aller à la page d'accueil"
    use:link
  />

  <!-- Le bouton n'est visible qu'au format mobile & tablette -->
  <!-- Il lui faut une description pour l'accessibilité que l'on définit avec aria-label pour indiquer la nature
      mais aussi la propriété aria-haspopmenu à 'true' pour indique qu'au clic un menu apparaît -->
  <button
    type="button"
    id="menubutton"
    class="menu-button"
    aria-label="Accès menu"
    aria-haspopup="true"
    aria-expanded="false"
    aria-controls="main-menu"
    on:click={displayMenu}
  />

  <!-- La navigation n'est visible qu'au format desktop -->
  <nav class="nav-menu" aria-label="header navigation">
    <button
      type="button"
      id="closebutton"
      class="menu-button menu-button--close"
      aria-label="Fermer menu"
      aria-haspopup="true"
      aria-expanded="false"
      aria-controls="close-menu"
      on:click={hideMenu}
    />
    <!-- Notre liste comprenant notre menu -->
    <ul id="main-menu" role="menu" aria-labelledby="menubutton">
      <!-- Attention à bien mettre les liens dans chaque élément <li> et non l'inverse -->
      <li role="menuitem">
        <!-- On n'oublie pas de donner une description claire à chaque lien -->
        <a
          href="/"
          class="nav-menu__link"
          aria-label="Page d'accueil du site"
          on:click={hideMenu}
          use:link>Accueil</a
        >
      </li>
      <li role="menuitem">
        <a
          href="/spaces"
          class="nav-menu__link"
          aria-label="Découvrez nos espaces de travail"
          on:click={hideMenu}
          use:link>Nos espaces</a
        >
      </li>

      <li role="menuitem">
        <a
          href="/login"
          class="nav-menu__link"
          aria-label="Connexion au compte"
          on:click={hideMenu}
          use:link>Se connecter</a
        >
      </li>
      <li role="menuitem">
        <a
          href="/register"
          class="nav-menu__link"
          aria-label="Créer un compte"
          on:click={hideMenu}
          use:link>S'enregistrer</a
        >
      </li>
    </ul>
    <img
      class="menu-logo"
      src="/CW-mobile-menu-logo.png"
      alt="Logo entreprise"
    />
  </nav>
</header>
