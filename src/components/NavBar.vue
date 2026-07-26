<template>
  <header class="nav-outer">
    <nav class="nav section">
      <a
        href="#hero"
        class="name"
      >Morgan Trotter</a>

      <ul class="links">
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            class="resume"
          >Résumé ↓</a>
        </li>
      </ul>

      <button
        class="toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation menu"
        @click="isOpen = !isOpen"
      >
        <span :class="{ open: isOpen }" />
      </button>
    </nav>

    <ul
      v-if="isOpen"
      class="flyout"
    >
      <li>
        <a
          href="#work"
          @click="isOpen = false"
        >Work</a>
      </li>
      <li>
        <a
          href="#about"
          @click="isOpen = false"
        >About</a>
      </li>
      <li>
        <a
          href="#contact"
          @click="isOpen = false"
        >Contact</a>
      </li>
      <li>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener"
          @click="isOpen = false"
        >Résumé ↓</a>
      </li>
    </ul>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
.nav-outer {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
}

.name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--ink);
}

.links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.75rem;
  margin: 0;
  padding: 0;
  font-family: var(--font-mono);
  font-size: 0.82rem;
}

.links a:hover {
  color: var(--accent);
}

.resume {
  border: 1px solid var(--ink);
  border-radius: var(--radius);
  padding: 0.4rem 0.9rem;
  color: var(--ink);
}

.resume:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.toggle {
  display: none;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  padding: 0;
  position: relative;
}

.toggle span,
.toggle span::before,
.toggle span::after {
  content: '';
  position: absolute;
  left: 0.35rem;
  right: 0.35rem;
  height: 1.5px;
  background: var(--ink);
  transition: transform 0.2s ease;
}

.toggle span {
  top: 50%;
}

.toggle span::before {
  top: -0.4rem;
}

.toggle span::after {
  top: 0.4rem;
}

.toggle span.open {
  background: transparent;
}

.toggle span.open::before {
  top: 0;
  transform: rotate(45deg);
}

.toggle span.open::after {
  top: 0;
  transform: rotate(-45deg);
}

.flyout {
  list-style: none;
  margin: 0;
  padding: 0 var(--gutter) 1.25rem;
  display: none;
  flex-direction: column;
  gap: 0.9rem;
  font-family: var(--font-mono);
  font-size: 0.92rem;
  border-bottom: 1px solid var(--line);
}

@media (max-width: 42rem) {
  .links {
    display: none;
  }

  .toggle {
    display: block;
  }

  .flyout {
    display: flex;
  }
}
</style>
