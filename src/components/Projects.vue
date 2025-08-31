<template>
    <section id="projects">
      <h1>Projects</h1>
      <h3>Tenco CityScale K Line Intersection Delays For Inbound K Line</h3>
      <img src="../assets/K_Line_Inbound.png" alt="K Line Inbound Visual" style="width:250px;height:180px;">
      <a href="https://mtrotterte.github.io/line-graph-sfmta/" target="_blank">View Project</a>
      <a href="https://github.com/MtrotterTE/line-graph-sfmta">GitHub</a>
      <h4>Overview</h4>
      <p>An interactive data visualization platform that analyzes San Francisco Metro (SFMTA) K Line vehicle movement. The project tracks speed, position, and stop duration at stations and intersections to identify opportunities for reducing delays through potentially synchronizing traffic signals.</p>
      <h4>Technical Stack</h4>
      <ul>
        <li><strong>Frontend</strong>: Vue 3, Vite, Vuetify, D3.js, JavaScript (ES6+), HTML5, CSS3</li>
        <li><strong>Backend / Processing</strong>: Node.js, NPM, custom JavaScript algorithms for curating data</li>
        <li><strong>DevOps / Deployment</strong>: Git, GitHub, GitHub Actions (CI/CD), GitHub Pages</li>
      </ul>
      <h4>Key Features</h4>
      <ul>
        <li>Interactive line graph visualization built with D3.js showing time vs. distance traveled.</li>
        <li>User filtering controls with Vuetify to view all data, a single day, or individual trips.</li>
        <li>Horizontal reference lines marking station and intersection locations to highlight where vehicles stop.</li>
        <li>Automated CI/CD workflow deploying to GitHub Pages with version control using Git and GitHub.</li>
      </ul>
      <h4>Data Pipeline</h4>
      <ol>
        <li><strong>Data Acquisition</strong>:
          <ul>
            <li>Integrated with 511.org API to fetch real-time vehicle position data.</li>
            <li>Custom JavaScript polling script retrieves data every 5 seconds with a hash map algorithm to avoid duplicates.</li>
          </ul>
        </li>
        <li><strong>Data Curation</strong>:
          <ul>
            <li>Filtered raw feed for the SFMTA K Line.</li>
            <li>Cross-referenced latitude and longitude against known station and intersection coordinates.</li>
            <li>Used speed thresholds and geospatial lookups to identify vehicle stops.</li>
            <li>Output curated results into structured JSON files.</li>
          </ul>
        </li>
        <li><strong>Geospatial Mapping</strong>:
          <ul>
            <li>Processed polyline data from 511.org representing the K Line route.</li>
            <li>Built a nearest-neighbor algorithm to map each vehicle's GPS coordinates to the closest polyline point.</li>
            <li>Computed precise distance traveled along the route for accurate graphing.</li>
          </ul>
        </li>
        <li><strong>Visualization Layer</strong>:
          <ul>
            <li>Loaded curated datasets into D3.js to render dynamic line graphs.</li>
            <li>Overlaid reference lines for stations and intersections to correlate stop behavior with route locations.</li>
          </ul>
        </li>
      </ol>
      <div class="line-break"></div>
      <h3>Climate Change Data Visualization Project</h3>
      <img src="../assets/CO2_visual.png" alt="CO2 Emissions Visual" style="width:250px;height:180px;">
      <a href="https://morganhtrotter.github.io/co2page/" target="_blank">View Project</a>
      <a href="https://github.com/Morganhtrotter/co2page">GitHub</a>
      <h4>Overview</h4>
      <p>This project is an interactive data visualization dashboard built with D3.js, Node.js, and Express.js. It showcases global carbon dioxide emissions by country and continent over time, enabling users to explore environmental trends through dynamic, algorithm-driven visualizations.</p>
      <p>Developed as part of a capstone project at UCSC, I focused on transforming raw emissions data from The Global Carbon Atlas into meaningful, interactive insights. By applying scalable vector graphics (SVGs), algorithmic data binding, and time-series filtering, the application helps users identify key emission patterns across decades.</p>
      <h4>Technical Stack</h4>
      <ul>
        <li><strong>Front-End</strong>: JavaScript, D3.js, HTML5, CSS3</li>
        <li><strong>Back-End</strong>: Node.js, Express.js, NPM</li>
        <li><strong>Data Handling</strong>: CSV ingestion, filtering, and parsing with D3 utilities</li>
        <li><strong>Version Control</strong>: Git, GitHub</li>
        <li><strong>Deployment</strong>: Manual deployment to GitHub Pages</li>
        <li><strong>Algorithms and Techniques</strong>:
          <ul>
            <li>Exponential scaling with <code>d3.scalePow()</code> for visual balance</li>
            <li>Comparison algorithm for difference in emissions betweed years</li>
            <li>Data binding and grouping by continent using <code>d3.force()</code></li>
            <li>Conditional rendering with interpolated color scales (<code>d3.interpolateGreens</code>, <code>d3.interpolateReds</code>) to represent increases or decreases in emissions</li>
          </ul>
        </li>
      </ul>
      <h4>Key Features</h4>
      <ul>
        <li><strong>Interactive Bubble Chart</strong>: Circles sized proportionally to CO2 emissions. A larger radius represents higher emissions.</li>
        <li><strong>Tooltip System</strong>: On hover, users see country details and exact metric ton values of emissions.</li>
        <li><strong>Year Navigation</strong>: Increment or decrement years by 1, 5, or 10 using custom buttons.</li>
        <li><strong>Custom Year Input</strong>: Enter a specific year or range to visualize exact comparisons.</li>
        <li><strong>Compare Mode</strong>: Visualize emission changes between two years.
          <ul>
            <li>Green circles indicate a decrease.</li>
            <li>Red circles indicate an increase.</li>
          </ul>
        </li>
      </ul>
      <h4>Sample Algorithm: Year-to-Year Comparison</h4>
      <code>
        for (let i = 0; i < yearTwo.length; i++) {
          for (let j = 0; j < yearOne.length; j++) {
            if (yearTwo[i].country === yearOne[j].country) {
              yearDiff[i].value = yearTwo[i].value - yearOne[j].value;
            }
          }
          if (yearDiff[i].value < 0) {
            indexesNegative[i] = 1;
            yearDiff[i].value = Math.abs(yearDiff[i].value);
          }
        }
      </code>
      <p>This algorithm computes differences in emissions across years, flags negative differences, and prepares the differences for the visualization's color logic using <code>d3.interpolate()</code>.</p>
      <h4>Data Pipeline</h4>
      <ol>
        <li><strong>Data Collection</strong>: Obtained CSV data from The Global Carbon Atlas.</li>
        <li><strong>Loading</strong>: Imported with <code>d3.csv()</code> into structured arrays.</li>
        <li><strong>Filtering</strong>: Year-based filtering functions select subsets dynamically.</li>
        <li><strong>Scaling</strong>: Applied exponential scaling to normalize wide emission ranges.</li>
        <li><strong>Rendering</strong>: Used D3.js to bind curated data to SVG elements, creating interactive visualizations.</li>
      </ol>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  section {
    margin-bottom: 2em;
  }

  h3, p, li, h4 {
    color: #010101;
    font-family: "Roboto Condensed", monospace;
  }

  code {
    color: #010101;
  }

  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1.25rem;
    margin: 8px 0 4px;
  }

  ul, ol {
    margin: 0;
  }

  .line-break {
    padding-bottom: 1.5rem;
    border-bottom: 1.5px solid #010101;
  }

  img {
    width: 100% !important;
    height: 300px !important;
    object-fit: cover;
  }

  a {
    padding-right: 0.5rem;
  }
  </style>