<template>
    <section id="projects">
      <h1>Projects</h1>
      <h3>Tenco CityScale K Line Intersection Delays For Inbound K Line</h3>
      <a href="https://mtrotterte.github.io/line-graph-sfmta/" target="_blank"><img src="../assets/K_Line_Inbound.png" alt="K Line Inbound Visual" style="width:250px;height:180px;"></a>
      <p class="line-break">A Vue3.js and Vite application with D3.js visualizations to show how much time can be saved by syncing traffic signals with SF Metro vehicles. Includes automated traffic data collection from 511.org SF Bay. Work in progress.</p>
      <h3>CO2 Emissions Data Visualization</h3>
      <a href="https://morganhtrotter.github.io/co2page/" target="_blank"><img src="../assets/CO2_visual.png" alt="CO2 Emissions Visual" style="width:250px;height:180px;"></a>
      <p>Interactive D3.js tool visualizing global emissions trends grouped by continent, intended for non-technical audiences. Implemented predictive modeling via Python, advanced bubble collision handling in D3.js, and deployed on GitHub Pages, increasing accessibility of climate data to educators and researchers.</p>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  section {
    margin-bottom: 2em;
  }

  h3, p {
    color: #010101;
    font-family: "Roboto Condensed", monospace;
  }

  h3 {
    font-weight: 500;
    font-size: 1.25rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .line-break {
    padding-bottom: 1.5rem;
    border-bottom: 1.5px solid #010101;
  }
  </style>