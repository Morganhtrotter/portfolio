<script setup>
import { ref } from 'vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

// State to track the currently active section
const activeSection = ref('header'); // Default to 'header'

// State to track the width of the app
const appWidth = ref('100%'); // Default width

// State to track the visibility of the navigation menu
const navWidth = ref('0%'); // Default to hidden

// State to show and hide nav buttons
const navButtonOpacity = ref('0'); // Default to hidden

// Similar state to track the visibility of nav buttons
const navButtonVisibility = ref('hidden'); // Default to hidden

// Function to change the active section
const showSection = (section) => {
  activeSection.value = section;
};

// Function to decrease the width of the app
const decreaseAppWidth = () => {
  const currentWidth = parseInt(appWidth.value);
  appWidth.value = `${currentWidth - 10}%`;
  navWidth.value = '10%'; // Show the navigation menu
  navButtonOpacity.value = '1'; // Show nav buttons
  navButtonVisibility.value = 'visible'; // Make nav buttons visible
};

// Function to increase the width of the app
const increaseAppWidth = () => {
  const currentWidth = parseInt(appWidth.value);
  appWidth.value = `${currentWidth + 10}%`;
  navWidth.value = '0%'; // Hide the navigation menu
  navButtonOpacity.value = '0'; // Hide nav buttons
  navButtonVisibility.value = 'hidden'; // Make nav buttons hidden
};
</script>

<template>
  <div class="app-background">
    <div class="app-wrapper" :style="{ width: appWidth }">
      <!-- Header -->
      <header class="header-outline">
        <div class="header-wrapper" v-if="activeSection === 'header'">
          <h1>Morgan Trotter</h1>
          <h2>Web Developer & Designer</h2>
        </div>
        <!-- About Section -->
        <main v-if="activeSection === 'about'">
          <About />
          <button @click="showSection('header')">Back to Home</button>
        </main>

        <!-- Projects Section -->
        <main v-if="activeSection === 'projects'">
          <Projects />
          <button @click="showSection('header')">Back to Home</button>
        </main>

        <!-- Contact Section -->
        <main v-if="activeSection === 'contact'">
          <Contact />
          <button @click="showSection('header')">Back to Home</button>
        </main>
        <div class="next-page-wrapper">
          <div v-if="appWidth === '100%'" class="next-page" @click="decreaseAppWidth">
            <span class="material-symbols-outlined open">
              menu
            </span>
          </div>
          <div v-if="appWidth === '90%'" class="hide-page" @click="increaseAppWidth">
            <span class="material-symbols-outlined close">
              close
            </span>
          </div>
        </div>
      </header>
    </div>
    <nav :style="{ width: navWidth }">
      <ul :style="{ opacity: navButtonOpacity, visibility: navButtonVisibility }">
        <li><button @click="showSection('about')">About</button></li>
        <li><button @click="showSection('projects')">Projects</button></li>
        <li><button @click="showSection('contact')">Contact</button></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
header {
  text-align: center;
  margin-bottom: 2em;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-left: auto;
  transition: opacity 0.9s ease-in-out 0.6s; 
}

nav {
  width: 10%;
  transition: width 0.8s ease-in-out;
}

nav ul li {
  margin-left: auto;
}

nav button {
  background: none;
  border: none;
  color: #010101;
  font-weight: bold;
  cursor: pointer;
  padding-right: 0;
}

main {
  padding: 0 2em;
}

footer {
  text-align: center;
  margin-top: 2em;
  font-size: 0.9em;
  color: #888;
}

h1, h2 {
  margin: 0;
  color: #010101;
}

h1 {
  font-family: "Red Hat Mono", monospace;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 0.25rem;
}

h2 {
  font-family: "Source Code Pro", monospace;
  font-weight: 500;
}

.app-wrapper {
  border: 1.5px solid #010101;
  border-radius: 3px;
  height: auto;
  min-height: calc(100vh - 4rem);
  transition: width 0.8s ease-in-out;
}

.app-background {
  display: flex;
  flex-direction: row;
}

.header-outline {
  display: flex;
  flex-direction: row;
  height: 100%;
}

ul {
  display: flex;
  flex-direction: column;
}
</style>