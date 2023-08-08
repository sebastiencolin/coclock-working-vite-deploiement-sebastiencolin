<script>
  import ThemeCard from "~/components/ThemeCard.svelte";
  import spacesData from "~/spacesData";
</script>

<!-- Corps de la page -->
<main>
  <!-- Titre de la page -->
  <h1>Nos espaces</h1>

  <!-- Contient nos cartes représentant un espace -->
  <section class="spaces-grid" aria-label="Espaces de coworking">
    {#each spacesData as space}
      <!-- On oublie pas de lier notre prop 'picture' et la donnée qui va avec 'space.picture' -->
      <ThemeCard
        price={space.price}
        capacity={space.size}
        equipments={space.equipments}
        url={space.url}
        picture={space.picture}
      />
    {/each}
  </section>
</main>
