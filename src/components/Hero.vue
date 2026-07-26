<template>
  <section
    id="hero"
    class="section hero"
  >
    <p class="eyebrow">
      Available for select freelance &amp; full-time roles
    </p>

    <h1>Front-end engineer,<br>built for data.</h1>

    <div class="hero-body">
      <div class="hero-primary">
        <p class="role">
          Front-End Developer &amp; Data Visualization Specialist
        </p>
        <p class="proof">
          4+ years shipping production UI for Williams Sonoma and building D3.js transit-data
          pipelines at Turner Engineering — turning raw signal and GPS data into interfaces people
          can actually read.
        </p>
        <div class="ctas">
          <a
            href="#work"
            class="btn primary"
          >View work &rarr;</a>
          <a
            href="#contact"
            class="btn secondary"
          >Get in touch</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            class="btn ghost"
          >Résumé &darr;</a>
        </div>
      </div>

      <dl class="stat-col">
        <div>
          <dt>Years in production FE</dt>
          <dd>4+</dd>
        </div>
        <div>
          <dt>D3.js data pipelines shipped</dt>
          <dd>2</dd>
        </div>
        <div>
          <dt>Based</dt>
          <dd>SF</dd>
        </div>
      </dl>
    </div>

    <ul class="credibility">
      <li><span>Now</span> Turner Engineering, Front-End &amp; Data Eng.</li>
      <li><span>Prior</span> Williams Sonoma, Front-End Web Developer</li>
      <li><span>Stack</span> Vue 3 &middot; D3.js &middot; Vite</li>
      <li><span>Based</span> San Francisco, CA</li>
    </ul>
  </section>
</template>

<script setup></script>

<style scoped>
.hero {
  padding-top: clamp(2.5rem, 6vw, 4rem);
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.6em;
  margin: 0 0 1rem;
}

.eyebrow::before {
  content: '';
  width: 0.6em;
  height: 0.6em;
  border-radius: 50%;
  background: var(--accent);
  flex: none;
}

h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 0.98;
  letter-spacing: -0.015em;
  text-wrap: balance;
  margin: 0;
  color: var(--ink);
}

.hero-body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 16rem;
  gap: 3rem;
  align-items: end;
  padding: 1.75rem 0 clamp(2rem, 6vw, 3.5rem);
  border-bottom: 1px solid var(--line);
}

.role {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: var(--muted);
  margin: 0 0 0.6rem;
}

.proof {
  font-family: var(--font-body);
  font-size: 1.02rem;
  max-width: 46ch;
  color: var(--ink);
  margin: 0;
}

.ctas {
  margin-top: 1.75rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.92rem;
  padding: 0.7rem 1.15rem;
  border-radius: var(--radius);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn.primary {
  background: var(--accent);
  color: var(--accent-ink);
}

.btn.secondary {
  border: 1px solid var(--line);
  color: var(--ink);
}

.btn.ghost {
  color: var(--muted);
}

.stat-col {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  text-align: right;
  margin: 0;
}

.stat-col > div {
  display: flex;
  flex-direction: column-reverse;
  gap: 0.1rem;
}

.stat-col dd {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.6rem;
  color: var(--ink);
  margin: 0;
}

.stat-col dt {
  margin: 0;
}

.credibility {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 2.5rem;
  padding: 1.5rem 0;
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
}

.credibility span {
  color: var(--ink);
  font-weight: 500;
  margin-right: 0.4em;
}

@media (max-width: 42rem) {
  .hero-body {
    grid-template-columns: 1fr;
  }

  .stat-col {
    flex-direction: row;
    text-align: left;
    gap: 1.5rem;
  }
}
</style>
