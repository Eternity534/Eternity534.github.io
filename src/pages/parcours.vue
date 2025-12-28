<template>
  <div>
    <h1>Parcours Académique</h1>
    
    <div class="timeline">
      <div v-for="(item, index) in academie" :key="index" class="timeline-item">
        <div class="date">{{ item.date }}</div>
        <div class="content">
          <h3>{{ item.diploma }}</h3>
          <h4>{{ item.company }}</h4>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const academie = [
  {
    date: 'Septembre 2022 - Présent',
    diploma: 'Diplôme ingénieur',
    company: 'ESIEA',
    description: 'Programmation Python, C, Java. Programmation sur microprocesseurs, éléctronique numérique/analogique. Mathématiques, Physiques.'
  },
  {
    date: 'Aout 2024 - Décembre 2024',
    diploma: 'Semestre international à Centria UAS, Kokkola, Finlande',
    company: 'Centria UAS',
    description: 'Mathématiques, informatiques, semestre validé.'
  },
  {
    date: 'Septembre 2019 - Juillet 2022',
    diploma: 'Baccalauréat général',
    company: 'Lycée Gustave Eiffel, Gagny, 93220',
    description: 'Spécialité NSI/Maths (Mention Bien)'
  }
]
</script>

<style scoped>
.timeline { border-left: 2px solid var(--accent); margin-left: 20px; padding-left: 20px; }
.timeline-item { position: relative; margin-bottom: 40px; }
.timeline-item::before {
  content: ''; position: absolute; left: -29px; top: 5px;
  width: 16px; height: 16px; background: var(--bg-color);
  border: 2px solid var(--accent); border-radius: 50%;
}
.date { font-weight: bold; color: var(--accent); margin-bottom: 5px; }
.content h3 { margin: 0; font-size: 1.2rem; }
.content h4 { margin: 5px 0; color: var(--text-muted); font-size: 0.9rem; font-weight: normal; }
</style>