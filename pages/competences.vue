<template>
  <div>
    <h1>Mes Compétences</h1>
    
    <div class="grid">
      <section class="card">
        <h3>💻 Techniques (Hard Skills)</h3>
        <ul>
          <li v-for="skill in techSkills" :key="skill">{{ skill }}</li>
        </ul>
      </section>

      <section class="card">
        <h3>🤝 Humaines (Soft Skills)</h3>
        <ul>
          <li v-for="skill in softSkills" :key="skill">{{ skill }}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const techSkills = ['C/C#', 'Python', 'Bash', 'Java', 'VHDL', 'HTML/CSS/JS', 'Deno', 'Vue.js | Nuxt', 'Git/Github/Gitlab', 'Arduino IDE', 'STM32 Cube IDE', 'Raspberry Pi 3bis', 'Wireshark'];
const softSkills = ['Travail en équipe', 'Curiosité', 'Résolution de problèmes', 'Autonomie', 'Gestion du temps', 'Adaptabilité', 'Anglais'];
</script>

<style scoped>
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; }
.card { background: var(--card-bg); padding: 20px; border-radius: 8px; border: 1px solid var(--border); }
ul { padding-left: 20px; }
li { margin-bottom: 8px; color: var(--text-muted); }
h3 { margin-top: 0; color: var(--accent); }
@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
</style>