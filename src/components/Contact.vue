<template>
  <section
    id="contact"
    class="section contact"
  >
    <div class="contact-head">
      <h2>Contact</h2>
      <p class="intro">
        Open to freelance, contract, and full-time front-end roles — especially ones involving data.
      </p>
    </div>

    <a
      href="mailto:morganhtrotter@gmail.com"
      class="primary-cta"
    >
      morganhtrotter@gmail.com
      <span>→</span>
    </a>

    <ul class="secondary">
      <li><a href="tel:+14158275549">(415) 827-5549</a></li>
      <li>
        <a
          href="https://www.linkedin.com/in/morgan-trotter-15704216a/"
          target="_blank"
          rel="noopener"
        >LinkedIn</a>
      </li>
      <li>
        <a
          href="https://github.com/Morganhtrotter"
          target="_blank"
          rel="noopener"
        >GitHub</a>
      </li>
    </ul>

    <div class="footer-row">
      <span>Morgan Trotter — San Francisco, CA</span>
      <span>Vue 3 + Vite</span>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.contact {
  padding-top: clamp(2rem, 5vw, 3rem);
  padding-bottom: clamp(2rem, 5vw, 3rem);
}

.contact-head {
  border-top: 1px solid var(--line);
  padding-top: 1.5rem;
  margin-bottom: 2rem;
}

.contact-head h2 {
  font-weight: 700;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
}

.contact-head .intro {
  font-family: var(--font-body);
  color: var(--muted);
  font-size: 0.98rem;
  max-width: 46ch;
  margin-top: 0.6rem;
}

.primary-cta {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  max-width: 100%;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  overflow-wrap: anywhere;
  color: var(--ink);
  padding-bottom: 0.3rem;
  border-bottom: 2px solid var(--accent);
}

.primary-cta span {
  color: var(--accent);
  transition: transform 0.15s ease;
}

.primary-cta:hover span {
  transform: translateX(0.2rem);
}

.secondary {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 2rem;
  margin: 1.5rem 0 0;
  padding: 0;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--muted);
}

.secondary a:hover {
  color: var(--accent);
}

.footer-row {
  margin-top: clamp(3rem, 8vw, 5rem);
  padding-top: 1.5rem;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--muted);
}
</style>
