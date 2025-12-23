<template>
    <div>
        <header class="navbar">
            <nav class="container nav-content">
                <NuxtLink to="/" class="logo">Acceuil</NuxtLink>
                <div class="links">
                    <NuxtLink to="/projets">Mes Projets</NuxtLink>
                    <NuxtLink to="/experience">Mes experiences professionnelle</NuxtLink>
                    <NuxtLink to="/parcours">Mon parcours académique</NuxtLink>
                    <NuxtLink to="/competences">Mes compétences</NuxtLink>
                    <NuxtLink to="/contacts">Contacts</NuxtLink>
                </div>
            </nav>
        </header>

        <main class="container page-content">
            <slot />
        </main>

        <footer class="footer">
            <p>&copy; 2025 - Développé avec Nuxt 3, vue, ts et css</p>
        </footer>
    </div>
</template>

<style scoped>
.navbar {
    background-color: var(--card-bg);
    border-bottom: 1px solid var(--border);
    position: sticky; top: 0; z-index: 10;
}
.nav-content {
    display: flex; justify-content: space-between; align-items: center;
    padding: 15px 20px;
}
.logo { font-weight: bold; font-size: 1.2rem; color: #fff; }
.links a { margin-left: 20px; font-size: 0.9rem; }
.page-content { min-height: 80vh; padding-top: 40px; }
.footer { text-align: center; padding: 20px; color: var(--text-muted); font-size: 0.8rem; }
</style>