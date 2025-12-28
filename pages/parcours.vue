<template>
  <div>
    <h1>Parcours Académique</h1>
    
    <div class="timeline">
      <div v-for="(item, index) in experiences" :key="index" class="timeline-item">
        <div class="date">{{ item.date }}</div>
        <div class="content">
          <h3>{{ item.role }}</h3>
          <h4>{{ item.company }}</h4>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const experiences = [
  {
    date: '2023 - Présent',
    role: 'Développeur Front-End',
    company: 'Tech Solutions',
    description: 'Développement d’interfaces Vue.js, migration vers Nuxt 3.'
  },
  {
    date: '2022 - 2023',
    role: 'Stage Développeur Web',
    company: 'Web Agency',
    description: 'Création de sites vitrines et intégration de maquettes.'
  }
]
</script>

<style scoped>
.timeline { border-left: 2px solid var(--accent); margin-left: 20px; padding-left: 20px; }
.timeline-item { position: relative; margin-bottom: 40px; }
/* Le petit point sur la frise */
.timeline-item::before {
  content: ''; position: absolute; left: -29px; top: 5px;
  width: 16px; height: 16px; background: var(--bg-color);
  border: 2px solid var(--accent); border-radius: 50%;
}
.date { font-weight: bold; color: var(--accent); margin-bottom: 5px; }
.content h3 { margin: 0; font-size: 1.2rem; }
.content h4 { margin: 5px 0; color: var(--text-muted); font-size: 0.9rem; font-weight: normal; }
</style>