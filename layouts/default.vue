<template>
    <div>
        <header class="navbar">
            <nav class="nav-content container">
                <NuxtLink to="/" class="brand">Mon Portfolio</NuxtLink>
                <div class="links">
                    <NuxtLink to="/projets">Mes Projets</NuxtLink>
                    <NuxtLink to="/experiences">Mes experiences professionnelle</NuxtLink>
                    <NuxtLink to="/parcours">Mon parcours académique</NuxtLink>
                    <NuxtLink to="/competences">Mes compétences</NuxtLink>
                    <NuxtLink to="/contacts" class="btn-contact">Contact</NuxtLink>
                </div>
            </nav>
        </header>

        <main class="container page-content">
            <slot />
        </main>

        <footer class="footer">
            <p>&copy; Louis Minotte 2025 - Développé avec Nuxt 3, vue, ts et css</p>
        </footer>
    </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.navbar {
  background-color: #1e1e1e;
  border-bottom: 1px solid #333;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 20px;
}
.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}
.brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
.links {
  display: flex;
  gap: 25px;
  align-items: center;
}
.links a {
  color: #b0b0b0;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  font-weight: 500;
}
.links a:hover {
  color: #42b883;
}
.router-link-active {
  color: #fff !important;
}
.btn-contact {
  background-color: #42b883;
  color: #121212 !important;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold !important;
}
.btn-contact:hover {
  background-color: #3aa876;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
.page-container {
  flex: 1;
  padding-top: 40px;
  padding-bottom: 40px;
}
.footer {
  text-align: center;
  padding: 20px;
  border-top: 1px solid #333;
  color: #666;
  font-size: 0.8rem;
}
@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    height: auto;
    padding: 15px 0;
    gap: 15px;
  }
  .links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
}
</style>