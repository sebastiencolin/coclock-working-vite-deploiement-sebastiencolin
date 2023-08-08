<script>
  import { link } from "svelte-spa-router";
</script>

<!-- Corps de la page -->
<main>
  <!-- En-tête de la présentation de la salle -->
  <section class="space-header">
    <!-- Titre de l'espace -->
    <h1>Espace Leclercq</h1>

    <!-- Bouton de réservation (ne mène à rien pour l'instant) -->
    <a class="theme-button" href="/" aria-label="Réserver cet espace" use:link
      >Réserver cet espace</a
    >
  </section>

  <!-- Informations sur la salle -->
  <section class="space-information">
    <ul class="space-information-list">
      <li class="space-information-list__elt">
        <!-- Aadresse icone corrigée ✅ -->

        <img src="/icons/euro-icon.png" alt="Prix" /><span>100€ / jour</span>
      </li>
      <li class="space-information-list__elt">
        <!-- Aadresse icone corrigée ✅ -->

        <img src="/icons/people-icon.png" alt="Capacité maximale" /><span
          >50</span
        >
      </li>
      <li class="space-information-list__elt">
        <!-- Aadresse icone corrigée ✅ -->

        <img
          src="/icons/equipment-icon.png"
          alt="Équipements disponibles"
        /><span>Borne Wi-Fi, projecteur sans-fil</span>
      </li>
    </ul>
  </section>

  <!-- Section commentaires -->
  <section class="space-comments">
    <!-- Titre section commentaire -->
    <h2>Commentaires</h2>

    <!-- Commentaire -->
    <article class="theme-comment">
      <h3 class="theme-comment__title">Un superbe espace</h3>

      <span class="theme-comment__timestamp">Posté le 31/03/2023</span>
      <p class="theme-comment__contain">
        Precisely. Alright, alright, okay McFly, get a grip on yourself. It's
        all a dream. Just a very intense dream. Woh, hey, listen, you gotta help
        me. The way I see it, if you're gonna build a time machine into a car
        why not do it with some style. Besides, the stainless, steel
        construction made the flux dispersal- look out. Well, what if they
        didn't like them, what if they told me I was no good. I guess that would
        be pretty hard for somebody to understand. Aw yeah, everything is great.
      </p>
    </article>

    <!-- Commentaire -->
    <article class="theme-comment">
      <h3 class="theme-comment__title">Un espace calme pour travailler</h3>
      <span class="theme-comment__timestamp">Posté le 25/05/2022</span>
      <p class="theme-comment__contain">
        You know what I do in those situations? Uh, well, I haven't finished
        those up yet, but you know I figured since they weren't due till-
        Remember, fellas, the future is in your hands. If you believe in
        progress, re-elect Mayor Red Thomas, progress is his middle name. Mayor
        Red Thomas's progress platform means more jobs, better education, bigger
        civic improvements, and lower taxes. On election day, cast your vote for
        a proven leader, re-elect Mayor Red Thomas... Marty, you made it. You
        broke it. Wow, look at him go.
      </p>
    </article>
  </section>

  <!-- Section ajout commentaire -->
  <section class="space-add-comment">
    <h2>Ajouter un commentaire</h2>

    <form class="theme-form" action="">
      <!-- Champ titre commentaire -->
      <div class="theme-form__input">
        <input
          class="theme-input"
          type="text"
          id="comment-title"
          name="comment-title"
          aria-label="Titre du commentaire"
          placeholder="ex : Mon commentaire"
        />
        <label class="theme-label" for="comment-title">Titre</label>
      </div>

      <!-- Champ gérant le contenu du commentaire -->
      <div class="theme-form__textarea">
        <textarea
          class="theme-textarea"
          name="add-comment"
          id="add-comment"
          cols="30"
          rows="10"
        />
        <label class="theme-label" for="add-comment"
          >Écrivez un commentaire</label
        >
      </div>

      <input
        type="submit"
        class="theme-button"
        value="Ajouter un commentaire"
        aria-label="Ajouter un commentaire"
      />
    </form>
  </section>
</main>
