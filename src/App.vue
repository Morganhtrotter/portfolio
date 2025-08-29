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

// State for mobile flyout menu visibility
const isFlyoutVisible = ref(false); // Default to hidden

// Function to change the active section
const showSection = (section) => {
  activeSection.value = section;
  isFlyoutVisible.value = false; // Close flyout menu when a section is selected
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

// Function to toggle the flyout menu
const toggleFlyoutMenu = () => {
  isFlyoutVisible.value = !isFlyoutVisible.value;
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
          <p>Front-End Developer with 4+ years of experience building and optimizing responsive, user-focused web applications for enterprise brands like Williams Sonoma. Skilled in Vue.js, D3.js, and modern JavaScript tooling, with a strong background in UI/UX collaboration, testing, and performance optimization.</p>
        </div>
        <!-- About Section -->
        <main v-if="activeSection === 'about'">
          <About />
        </main>

        <!-- Projects Section -->
        <main v-if="activeSection === 'projects'">
          <Projects />
        </main>

        <!-- Contact Section -->
        <main v-if="activeSection === 'contact'">
          <Contact />
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
          <!-- Hamburger Menu for Mobile -->
          <div class="hamburger-menu" :class="{ 'active': isFlyoutVisible }" @click="toggleFlyoutMenu">
            <span class="material-symbols-outlined">menu</span>
          </div>
        </div>
      </header>
    </div>
    <nav :style="{ width: navWidth }">
      <ul :style="{ opacity: navButtonOpacity, visibility: navButtonVisibility }">
        <li><button @click="showSection('header')">Home</button></li>
        <li><button @click="showSection('about')">About</button></li>
        <li><button @click="showSection('projects')">Projects</button></li>
        <li><button @click="showSection('contact')">Contact</button></li>
      </ul>
    </nav>
    <!-- Flyout Menu -->
    <div class="flyout-menu" v-if="isFlyoutVisible">
      <ul>
        <li><button @click="showSection('header')">Home</button></li>
        <li><button @click="showSection('about')">About</button></li>
        <li><button @click="showSection('projects')">Projects</button></li>
        <li><button @click="showSection('contact')">Contact</button></li>
      </ul>
    </div>
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
  font-family: "Roboto Condensed", monospace;
  font-weight: 500;
}

nav button:focus {
  outline: none;
}

nav button:hover {
  text-decoration: underline;
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

.app-wrapper {
  border: 1.5px solid #010101;
  border-radius: 3px;
  height: auto;
  min-height: calc(100vh - 4rem);
  transition: width 0.8s ease-in-out;
  max-height: calc(100vh - 4rem);
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

.hamburger-menu {
  display: none;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 1rem;
  right: 1.75rem;
  z-index: 1000;
}

.hamburger-menu.active .material-symbols-outlined {
  color: #fff;
}

.flyout-menu {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 40%;
  height: calc(100vh - 30px);
  background-color: #010101;
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 0;
  transition: transform 0.3s ease-in-out;
  box-shadow: -10px 0 15px -10px rgba(0, 0, 0, 0.8);
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.flyout-menu ul {
  list-style: none;
  padding: 0;
  margin: 3rem 0 0;
  text-align: right;
}

.flyout-menu li {
  margin-bottom: 1rem;
}

.flyout-menu button {
  background: none;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-family: "Roboto Condensed", monospace;
  font-size: 1.2rem;
  padding-right: 1rem;
}

.header-wrapper {
  width: -webkit-fill-available;
}

.header-wrapper p {
  margin: auto 0 0 auto;
  color: #010101;
  text-align: right;
  font-family: "Roboto Condensed", monospace;
  font-weight: 400;
  font-size: 1.375rem;
  width: 25rem;
  margin-right: -2.5rem;
}

main {
  padding: 2rem;
  text-align: left;
  overflow-y: scroll;
}

@media screen and (max-width: 48rem) {
  nav ul, .next-page, .hide-page {
    display: none;
  }

  .app-wrapper {
    border: 1.5px solid #010101;
    min-height: calc(100vh - 2rem);
    max-height: calc(100vh - 2rem);
  }

  .hamburger-menu {
    display: block;
  }

  nav ul, .next-page, .hide-page {
    display: none;
  }

  .header-wrapper p {
    font-size: 1rem;
    width: 12.5rem;
    margin-right: -1rem;
  }

  main {
    padding: 1rem;
  }
}
</style>