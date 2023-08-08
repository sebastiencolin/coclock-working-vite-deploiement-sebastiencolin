<!-- Scripts -->
<script>
  import { link } from "svelte-spa-router";
  // Déclaration des variables qui seront liées à
  // des éléments de notre code
  let lastname, firstname, email, password, error, success;

  // Fonction de vérification des caractères spéciaux
  function aDesCaracteresSpeciaux(valeurAVerifier) {
    const lesCaractereSpeciaux = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const ilYAunCaractereSpecial = lesCaractereSpeciaux.test(valeurAVerifier);
    return ilYAunCaractereSpecial;
  }

  // Fonction de vérification d'adresse email
  function estUneAdresseEmail(valeurAVerifier) {
    const formatEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
    const estUnEmail = formatEmail.test(valeurAVerifier);
    return estUnEmail;
  }

  // Fonction de vérification du mot de passe
  function leMDPEstValide(valeurAVerifier) {
    if (valeurAVerifier.length < 8 || valeurAVerifier > 16) {
      return false;
    }
    const nbMaj = valeurAVerifier.match(/[A-Z]/g);
    if (nbMaj === null || nbMaj.length < 1) {
      return false;
    }
    const nbMin = valeurAVerifier.match(/[a-z]/g);
    if (nbMin === null || nbMin.length < 1) {
      return false;
    }
    const nbNumb = valeurAVerifier.match(/[0-9]/g);
    if (nbNumb === null || nbNumb.length < 1) {
      return false;
    }
    return true;
  }

  function checkForm() {
    // On reset nos alertes en cas de renvoi
    error.style.display = "none";
    success.style.display = "none";

    /* -- Version améliorée */
    // La variable me sert de témoin d'erreur
    let isError = false;
    let tabError = [];

    // Vérification des champs vides
    if (
      lastname.value == "" ||
      firstname.value == "" ||
      email.value == "" ||
      password.value == ""
    ) {
      isError = true;
      tabError.push("Erreur, un champ est vide");

      // -- ⭐⭐ SUPER-BONUS⭐⭐
      showAlert(error);
    }

    // Vérifie tous les autres paramètres en éclatant les tests
    if (aDesCaracteresSpeciaux(firstname.value)) {
      isError = true;
      tabError.push("Nom invalide");
    }
    if (aDesCaracteresSpeciaux(lastname.value)) {
      isError = true;
      tabError.push("Prénom invalide");
    }
    if (estUneAdresseEmail(email.value) === false) {
      isError = true;
      tabError.push("Mauvais email");
    }
    if (leMDPEstValide(password.value) === false) {
      isError = true;
      tabError.push("Mot de passe trop faible");
    }

    // Choisi quoi faire en fonction de la vérification
    if (isError) {
      console.log(tabError);
      showAlert(error);
    } else {
      console.log("tout va bien");
      showAlert(success);
    }
  }

  // -- ⭐ BONUS ⭐

  // On crée une fonction qui va permettre de cacher nos alertes en changeant
  // la règle CSS 'display: flex' en 'display: none'
  function cacherAlerte(event) {
    let alerteVisee = event.currentTarget.parentElement;
    alerteVisee.style.display = "none";
  }

  // -- ⭐⭐ SUPER-BONUS⭐⭐
  const showAlert = (alertElement) => {
    alertElement.style.display = "flex";
    // Ajout d'un timer pour fermer automatiquement l'alerte
    setTimeout(() => {
      alertElement.style.display = "none";
    }, 3000);
  };
</script>

<!-- Corps de la page -->
<main>
  <!-- Titre de la page -->
  <h1>Créer un compte</h1>

  <!-- Formulaire d'inscription -->
  <form class="theme-form" method="GET" on:submit|preventDefault={checkForm}>
    <!-- Champ nom -->
    <div class="theme-form__input">
      <input
        class="theme-input theme-input--small"
        type="text"
        id="lastname"
        name="lastname"
        aria-label="nom"
        placeholder="ex : Sotoca"
        bind:this={lastname}
      />
      <label class="theme-label" for="lastname">Nom</label>
    </div>

    <!-- Champ prénom -->
    <div class="theme-form__input">
      <input
        class="theme-input theme-input--small"
        type="text"
        id="firstname"
        name="firstname"
        aria-label="prénom"
        placeholder="ex : Florian"
        bind:this={firstname}
      />
      <label class="theme-label" for="firstname">Prénom</label>
    </div>

    <!-- Champ email -->
    <div class="theme-form__input">
      <input
        class="theme-input"
        type="email"
        id="email"
        name="email-address"
        aria-label="adresse email"
        placeholder="flo.sotoca@mail.com"
        bind:this={email}
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
        bind:this={password}
      />
      <label class="theme-label" for="password">Mot de passe</label>
    </div>

    <!-- envoi formulaire -->
    <input
      type="submit"
      class="theme-button button-validate"
      value="Envoyer le formulaire"
      aria-label="soumission formulaire"
    />
  </form>

  <!-- Lien vers page de connexion -->
  <a
    class="theme-minor-link"
    href="/login"
    aria-label="Connectez-vous à votre compte"
    use:link>Déjà un compte ?</a
  >

  <!-- Champs d'alertes formulaire -->
  <div class="theme-alert error" bind:this={error}>
    <p>Erreur lors de l'inscription</p>
    <span on:click={cacherAlerte} on:keydown={cacherAlerte}>╳</span>
  </div>

  <div class="theme-alert success" bind:this={success}>
    <p>Inscription réussie</p>
    <span on:click={cacherAlerte} on:keypress={cacherAlerte}>╳</span>
  </div>
</main>
