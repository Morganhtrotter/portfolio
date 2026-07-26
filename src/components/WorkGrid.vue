<template>
  <section
    id="work"
    class="section work"
  >
    <div class="work-head">
      <h2>Featured work</h2>
      <span class="count">{{ projects.length.toString().padStart(2, '0') }} case studies</span>
    </div>

    <div class="work-grid">
      <article
        v-for="project in projects"
        :key="project.title"
        class="work-card"
      >
        <div
          class="thumb"
          :style="{ backgroundImage: `url(${project.image})` }"
        >
          <span class="mark">{{ project.mark }}</span>
        </div>
        <p class="kicker">
          {{ project.kicker }}
        </p>
        <h3>{{ project.headline }}</h3>
        <p class="outcome">
          {{ project.outcome }}
        </p>
        <ul class="tags">
          <li
            v-for="tag in project.tags"
            :key="tag"
          >
            {{ tag }}
          </li>
        </ul>
        <div class="links">
          <a
            :href="project.demoUrl"
            target="_blank"
            rel="noopener"
          >View project</a>
          <a
            :href="project.repoUrl"
            target="_blank"
            rel="noopener"
          >GitHub</a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import kLineImage from '../assets/K_Line_Inbound.png'
import co2Image from '../assets/CO2_visual.png'

const projects = [
  {
    title: 'k-line',
    mark: 'K-LINE · SFMTA',
    image: kLineImage,
    kicker: 'Freelance — Turner Engineering',
    headline: 'Cut manual signal-timing review to a live delay map',
    outcome:
      'Real-time D3.js visualization of SFMTA K-Line vehicle movement — polling 511.org every 5s to surface where inbound trains lose the most time at intersections.',
    tags: ['Vue 3', 'D3.js', 'Node.js', 'GitHub Actions'],
    demoUrl: 'https://mtrotterte.github.io/line-graph-sfmta/',
    repoUrl: 'https://github.com/MtrotterTE/line-graph-sfmta',
  },
  {
    title: 'co2',
    mark: 'CO2 · UCSC',
    image: co2Image,
    kicker: 'UCSC Capstone',
    headline: 'Made 50 years of global CO2 data explorable in one view',
    outcome:
      'Interactive bubble-chart dashboard over Global Carbon Atlas data — year-over-year comparison mode with color-coded emission deltas by country and continent.',
    tags: ['D3.js', 'Express', 'SVG'],
    demoUrl: 'https://morganhtrotter.github.io/co2page/',
    repoUrl: 'https://github.com/Morganhtrotter/co2page',
  },
]
</script>

<style scoped>
.work {
  border-top: 1px solid var(--line);
  padding-top: clamp(2rem, 5vw, 3rem);
  padding-bottom: clamp(2.5rem, 6vw, 4rem);
}

.work-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1.5rem;
}

.work-head h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  color: var(--ink);
  margin: 0;
}

.count {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--muted);
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}

.work-card {
  background: var(--surface);
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.thumb {
  height: 9rem;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  background-color: var(--paper);
  background-size: cover;
  background-position: center;
  position: relative;
}

.thumb .mark {
  position: absolute;
  bottom: 0.6rem;
  left: 0.7rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--muted);
  background: var(--surface);
  padding: 0.1rem 0.4rem;
  border-radius: 2px;
  border: 1px solid var(--line);
}

.kicker {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin: 0;
}

.work-card h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
  line-height: 1.15;
  color: var(--ink);
  margin: 0;
}

.outcome {
  font-family: var(--font-body);
  font-size: 0.92rem;
  color: var(--muted);
  margin: 0;
}

.tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: auto 0 0;
  padding-top: 0.4rem;
}

.tags li {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 0.2rem 0.45rem;
  color: var(--muted);
}

.links {
  display: flex;
  gap: 1rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
}

.links a {
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 42rem) {
  .work-grid {
    grid-template-columns: 1fr;
  }
}
</style>
