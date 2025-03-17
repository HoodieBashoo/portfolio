import { generateNotableHTML } from "./project-grid.js";

const legend = document.getElementById('js-legend');

const legendNotables = [
  {
    text: 'Engine System',
    type: 'engineSpecific'
  },
  {
    text: 'Generic Feature',
    type: 'concept'
  },
  {
    text: 'Custom System',
    type: 'custom'
  }
]

legendNotables.forEach(notableData => {
  const notable = generateNotableHTML(notableData);
  legend.appendChild(notable);
});