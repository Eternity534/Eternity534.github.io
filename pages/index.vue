<template>
    <div class="hero">
        <h1>Bienvenue, je suis Louis Minotte</h1>
        <p class="subtitle">Étudiant en 4ème année à l'ESIEA (école d'ingénieur du numérique à Ivry-sur-Seine, France).</p>
        <p class="intro">
            Je suis passioné par l'informatique, les jeux vidéos, l'automobile et la robotique (de manière plus générale les systèmes embarqués).
            Sur ce site, vous pouvez retrouver mon parcours académique, mes expériences professionnelles, mes projets et mes compétences.
            Vous avez aussi une section contacts si vous souhaitez me faire un retour sur le site ou juste parler d'une expérience ou d'un projet avec moi !
        </p>

        <div class="actions">
            <NuxtLink to="/projets" class="btn">Voir mes projets</NuxtLink>
            <NuxtLink to="/contacts" class="btn">Me contacter</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.hero { text-align: center; margin-top: 50px; }
.subtitle { font-size: 1.2rem; color: var(--accent); margin-bottom: 20px; }
.intro { max-width: 600px; margin: 0 auto 30px auto; color: var(--text-muted); }
</style>