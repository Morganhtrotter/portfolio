<template>
  <section class="section capabilities">
    <div class="cap-head">
      <h2>Capabilities</h2>
      <p class="intro">
        Grouped by what it's for, not how it sounds on a resume.
      </p>
    </div>

    <div class="cap-grid">
      <div
        v-for="group in groups"
        :key="group.label"
        class="cap-group"
      >
        <p class="label">
          {{ group.label }}
        </p>
        <ul class="tags">
          <li
            v-for="skill in group.skills"
            :key="skill"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const groups = [
  {
    label: 'Frontend',
    skills: [
      'JavaScript (ES6+)',
      'Vue 3',
      'CSS3',
      'React',
      'HTML5',
      'Rapid Experimentation',
      'A/B Tests',
      'Tailwind CSS',
      'Design System',
      'Responsive & Accessible UI',
    ],
  },
  {
    label: 'Data Visualization',
    skills: ['D3.js', 'SVG', 'Algorithmic Data Binding', 'Time-Series Filtering'],
  },
  {
    label: 'Tooling & Workflow',
    skills: [
      'Vite',
      'Webpack',
      'Node.js',
      'Git & GitHub',
      'ESLint',
      'Prettier',
      'Custom BASH Scripts',
      'Adobe Target',
      'Adobe Experience Manager',
      'Jenkins',
      'GitHub Actions CI/CD',
    ],
  },
]
</script>

<style scoped>
.capabilities {
  padding-top: clamp(2rem, 5vw, 3rem);
  padding-bottom: clamp(2.5rem, 6vw, 4rem);
}

.cap-head {
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: minmax(0, 15rem) minmax(0, 1fr);
  gap: 2rem;
  padding-top: 1.5rem;
  margin-bottom: 2rem;
}

.cap-head h2 {
  font-weight: 700;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
}

.cap-head .intro {
  font-family: var(--font-body);
  color: var(--muted);
  font-size: 0.95rem;
  align-self: end;
}

@media (max-width: 46rem) {
  .cap-head {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
}

.cap-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}

.cap-group {
  background: var(--surface);
  padding: 1.5rem;
}

.label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 0.9rem;
}

.tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0;
  padding: 0;
}

.tags li {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 0.25rem 0.5rem;
  color: var(--ink);
}

@media (max-width: 46rem) {
  .cap-grid {
    grid-template-columns: 1fr;
  }
}
</style>
