<template>
    <div class="container">
        <header>
            <nav>
                <NuxtLink to="/">Acceuil</NuxtLink>
                <NuxtLink to="/projets">Mes Projets</NuxtLink>
                <NuxtLink to="/experience">Mes experiences professionnelle</NuxtLink>
                <NuxtLink to="/parcours">Mon parcours académique</NuxtLink>
                <NuxtLink to="/competences">Mes compétences</NuxtLink>
                <NuxtLink to="/contacts">Contacts</NuxtLink>
            </nav>
        </header>

        <main>
            <slot />
        </main>

        <footer>
            <p>&copy; 2025 - Mon Portfolio</p>
        </footer>
    </div>
</template>

<style scoped>
    nav { padding: 20px; border-bottom: 1px solid #ccc; }
    main { padding: 20px; min-height: 80vh; }
</style>