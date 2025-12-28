<script setup lang="ts">

</script>

<template>
  <div class="app-container">
    <header class="navbar">
      <nav class="nav-content container">
        <RouterLink to="/" class="brand">Mon Portfolio</RouterLink>
        
        <div class="links">
          <RouterLink to="/projets">Mes Projets</RouterLink>
          <RouterLink to="/experiences">Expériences pro</RouterLink>
          <RouterLink to="/parcours">Parcours académique</RouterLink>
          <RouterLink to="/competences">Mes compétences</RouterLink>
          <RouterLink to="/contacts" class="btn-contact">Contact</RouterLink>
        </div>
      </nav>
    </header>

    <main class="container page-content">
      <RouterView />
    </main>

    <footer class="footer">
      <p>&copy; Louis Minotte 2025 - Développé avec Vue 3, TS, Vite et CSS</p>
    </footer>
  </div>
</template>