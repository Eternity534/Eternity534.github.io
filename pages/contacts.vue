<template>
  <div class="contact-page">
    <h1>Me Contacter</h1>
    <p>N'hésitez pas à m'envoyer un message pour discuter de projets.</p>

    <div class="contact-links">
      <a href="mailto:minotte@et.esiea.fr" class="contact-card">
        <div class="icon">✉️</div>
        <div>
          <h3>Email</h3>
          <p>minotte@et.esiea.fr</p>
        </div>
      </a>

      <a href="https://linkedin.com/in/louis-minotte-a13a9634a/" target="_blank" class="contact-card">
        <div class="icon">💼</div>
        <div>
          <h3>LinkedIn</h3>
          <p>Voir mon profil</p>
        </div>
      </a>
      
      <a href="https://github.com/Eternity534" target="_blank" class="contact-card">
        <div class="icon">👾</div>
        <div>
          <h3>GitHub</h3>
          <p>@Eternity534</p>
        </div>
      </a>

      <a href="https://gitlab.esiea.fr/minotte" target="_blank" class="contact-card">
        <div class="icon">👾</div>
        <div>
          <h3>Gitlab</h3>
          <p>@minotte</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.contact-page { text-align: center; }
.contact-links {
  display: flex; flex-direction: column; align-items: center; gap: 20px; margin-top: 40px;
}
.contact-card {
  display: flex; align-items: center; gap: 20px;
  background: var(--card-bg); border: 1px solid var(--border);
  padding: 15px 30px; border-radius: 10px; width: 100%; max-width: 400px;
  text-align: left;
}
.contact-card:hover { border-color: var(--accent); transform: translateY(-3px); }
.icon { font-size: 2rem; }
h3 { margin: 0; font-size: 1rem; color: #fff; }
p { margin: 0; color: var(--text-muted); font-size: 0.9rem; }
</style>