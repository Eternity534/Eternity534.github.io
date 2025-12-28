<template>
  <div>
    <h1>Expériences Professionnelles</h1>
    
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
    date: 'Mars 2024 - Présent',
    role: 'Président',
    company: 'Bureaux des Jeux',
    description: `Président de l'association Bureau des Jeux de l'ESIEA`
  },
  {
    date: 'Novembre 2023 - Juillet 2024',
    role: 'Enseignant en informatique bénévole pour seniors',
    company: 'Mairie du Vème, Paris',
    description: `Apprendre les bases de l'informatique aux seniors, dans le cadre du « Projet à impact RSE » de l'ESIEA, avec 7 autres étudiants de l'école, pour répondre à l'un des 17 objectifs de développement durable de l'ONU (« Lutte contre l’isolement des seniors » à travers un apprentissage numérique).`
  },
  {
    date: 'Juin 2023 - Juillet 2023',
    role: 'Stagiaire informatique',
    company: 'SiGMA World, Msida, Malte',
    description: `Configurer et gérer les onboardings des nouveaux employés
  Gérer les serveurs de stockage de fichiers
  Générer des rapports sur l'équipements de l'utilisateur pour l’administrateur réseaux
  Maintenance informatique
  Gérer le système informatique d'entrée dans les locaux de l'entreprise`
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