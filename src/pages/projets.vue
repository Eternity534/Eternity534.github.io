<template>
  <div>
    <h1>Mes Projets</h1>
    <div class="projects-list">
      
      <div 
        v-for="projet in projets" 
        :key="projet.id" 
        class="project-card"
        :class="{ 'is-open': openId === projet.id }"
      >
        <div class="project-header" @click="toggle(projet.id)">
          <h3>{{ projet.title }}</h3>
          <span class="arrow">{{ openId === projet.id ? '−' : '+' }}</span>
        </div>

        <div class="project-body" v-if="openId === projet.id">
          <p>{{ projet.description }}</p>
          <div class="tags">
            <span v-for="tag in projet.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <a :href="projet.link" target="_blank" class="link-btn">Voir le dépôt →</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openId = ref<number | null>(null)

const toggle = (id: number) => {
  openId.value = openId.value === id ? null : id
}

const projets = [
  {
    id: 1,
    title: 'Portfolio Nuxt',
    description: 'Ce site web ! Créé avec Vite, TypeScript et déployé sur GitHub Pages.',
    tags: ['Vite', 'Vue.js', 'GitHub Actions'],
    link: 'https://github.com/...'
  }
]
</script>

<style scoped>
.project-card {
  background: var(--card-bg); border: 1px solid var(--border);
  margin-bottom: 15px; border-radius: 8px; overflow: hidden;
  transition: all 0.3s;
}
.project-header {
  padding: 15px 20px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;
}
.project-header:hover { background-color: #2a2a2a; }
.project-header h3 { margin: 0; font-size: 1.1rem; }
.arrow { font-size: 1.5rem; color: var(--accent); }

.project-body {
  padding: 20px; border-top: 1px solid var(--border);
  background-color: #252525;
}
.tags { margin: 15px 0; }
.tag {
  background: var(--bg-color); color: var(--accent);
  padding: 4px 10px; border-radius: 15px; font-size: 0.8rem; margin-right: 8px; border: 1px solid var(--accent);
}
.link-btn { font-size: 0.9rem; font-weight: bold; }
</style>