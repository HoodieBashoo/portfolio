import { generateNotableHTML } from "./project-grid.js";

const legend = document.getElementById('js-legend');

const legendNotables = [
  {
    text: 'Engine System',
    type: 'engineSpecific'
  },
  {
    text: 'Major Feature',
    type: 'concept'
  },
  {
    text: 'Extra',
    type: 'custom'
  }
]

legendNotables.forEach(notableData => {
  const notable = generateNotableHTML(notableData);
  legend.appendChild(notable);
});