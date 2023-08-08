<script>
  import { link } from "svelte-spa-router";
</script>

<!-- Corps de la page -->
<main>
  <!-- Titre de la page -->
  <h1>Se connecter</h1>

  <!-- Formulaire d'inscription -->
  <form class="theme-form" method="GET">
    <!-- Champ email -->
    <div class="theme-form__input">
      <input
        class="theme-input"
        type="email"
        id="email"
        name="email-address"
        aria-label="adresse email"
        placeholder="flo.sotoca@mail.com"
      />
      <label class="theme-label" for="email-address">Adresse email</label>
    </div>

    <!-- Champ mot de passe -->
    <div class="theme-form__input">
      <input
        class="theme-input"
        type="password"
        id="password"
        name="password"
        aria-label="mot de passe"
        placeholder="********"
      />
      <label class="theme-label" for="password">Mot de passe</label>
    </div>

    <!-- envoi formulaire -->
    <input
      type="submit"
      class="theme-button"
      value="Envoyer le formulaire"
      aria-label="soumission formulaire"
    />
  </form>

  <!-- Lien vers page de connexion -->
  <a
    class="theme-minor-link"
    href="/register"
    aria-label="Créez-vous un compte"
    use:link>Vous n'avez pas de compte ?</a
  >
</main>
