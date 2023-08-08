<script>
  import { link } from "svelte-spa-router";

  export let price, capacity, equipments, url, picture;
</script>

<!-- Carte d'un espace -->
<article
  class="theme-card"
  style="background: url({picture}) center/cover no-repeat"
>
  <div class="theme-card__informations">
    <ul class="theme-card__infos-list">
      <li class="theme-card__infos-elt">
        <img src="/icons/euro-icon.png" alt="Prix" />{price} €<span />
      </li>
      <li class="theme-card__infos-elt">
        <img src="/icons/people-icon.png" alt="Capacité" /><span
          >{capacity}</span
        >
      </li>
      <li class="theme-card__infos-elt">
        <img
          src="/icons/equipment-icon.png"
          alt="Équipements disponibles"
        /><span>{equipments}</span>
      </li>
    </ul>
  </div>
  <a
    href={url}
    class="theme-card__button"
    aria-label="Accéder à l'espace de coworking"
    use:link>Voir l'espace</a
  >
</article>
