<template>
  <section
    id="about"
    class="section about"
  >
    <div class="about-head">
      <h2>About</h2>
    </div>

    <div class="about-body">
      <div class="copy">
        <p>
          I'm a front-end developer based in San Francisco, working at the intersection of
          production UI and data visualization — I like the problems that only show up once real
          data hits a real interface.
        </p>
        <p>Outside of work I'm usually playing baseball, cooking, or out with my dog, Moose.</p>
      </div>

      <ul class="experience">
        <li
          v-for="job in experience"
          :key="job.company"
        >
          <div class="dates">
            {{ job.dates }}
          </div>
          <div class="role-line">
            <span class="company">{{ job.company }}</span>
            <span class="title">{{ job.title }}</span>
          </div>
          <p class="summary">
            {{ job.summary }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const experience = [
  {
    company: 'Turner Engineering',
    title: 'Front-End Developer & Data Engineer',
    dates: 'Apr 2025 — Present',
    summary:
      'Vue 3 + D3.js applications modeling time savings from signal-synchronization; built the 511.org polling pipeline and GitHub Actions CI/CD behind it.',
  },
  {
    company: 'Williams Sonoma',
    title: 'Front-End Web Developer',
    dates: 'Apr 2021 — Present',
    summary:
      'Scalable CSS and vanilla JS across a multi-brand e-commerce platform, working daily with design, product, and back-end engineering.',
  },
]
</script>

<style scoped>
.about {
  border-top: 1px solid var(--line);
  padding-top: clamp(2rem, 5vw, 3rem);
  padding-bottom: clamp(2.5rem, 6vw, 4rem);
}

.about-head {
  margin-bottom: 2rem;
}

.about-head h2 {
  font-weight: 700;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
}

.about-body {
  display: grid;
  grid-template-columns: minmax(0, 22rem) minmax(0, 1fr);
  gap: 3rem;
}

.copy {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--ink);
}

.copy p {
  margin: 0;
}

.experience {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
}

.experience li {
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--line);
}

.dates {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--muted);
  margin-bottom: 0.4rem;
}

.role-line {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
}

.company {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--ink);
}

.title {
  font-family: var(--font-body);
  font-size: 0.88rem;
  color: var(--muted);
}

.summary {
  font-family: var(--font-body);
  font-size: 0.92rem;
  color: var(--muted);
  max-width: 60ch;
  margin: 0;
}

@media (max-width: 46rem) {
  .about-body {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
