import {generateNotableHTML} from "./project-grid.js";

let screenshotCount = 0;
let screenshotIndex = 1;

export let isProjectOpen = false;

export function openProjectView(projectData) {
  screenshotCount = projectData.screenshots.length + 1;
  screenshotIndex = 1;

  alterProjectViewHTML(projectData);

  document.getElementById('js-project-view').style.display = '';
  scrollToScreenshot(screenshotIndex);

  isProjectOpen = true;
}

export function closeProjectView() {
  screenshotIndex = 1;
  document.getElementById('js-project-view').style.display = 'none';
  document.getElementById('js-project-view-notables').innerHTML = '';
  document.getElementById('js-project-view-screenshots').innerHTML = '';

  document.getElementById('js-extra-info-divider').style.display = 'none';
  document.getElementById('js-project-view-jam').innerText = '';
  document.getElementById('js-project-view-jam').style.display = 'none';

  isProjectOpen = false;
}

function alterProjectViewHTML(projectData) {
  document.getElementById('js-project-view-title').innerText = projectData.title;
  document.getElementById('js-project-view-tagline').innerText = projectData.tagline;
  document.getElementById('js-project-view-description').innerText = projectData.description;
  if (projectData.jam !== '') {
    document.getElementById('js-project-view-jam').style.display = '';
    document.getElementById('js-project-view-jam').innerText = projectData.jam;
    document.getElementById('js-extra-info-divider').style.display = '';
  }
  document.getElementById('js-project-view-timespan').innerText = projectData.date !== '' ? 
  `${projectData.timespan}
  ${projectData.date}` :
  `${projectData.timespan}`;

  const screenshotsContainer = document.getElementById('js-project-view-screenshots');
  let currentId = 1;
  screenshotsContainer.appendChild(generateScreenshotHTML(currentId, projectData.thumbnail));
  projectData.screenshots.forEach(screenshot => {
    currentId++;
    screenshotsContainer.appendChild(generateScreenshotHTML(currentId, screenshot));
  });

  const notableContainer = document.getElementById('js-project-view-notables');
  const engineNotables = [];
  const conceptNotables = [];
  const customNotables = [];
  sortNotables(projectData.notables, engineNotables, conceptNotables, customNotables);
  sortNotables(projectData.extraNotables, engineNotables, conceptNotables, customNotables);
  engineNotables.forEach(notable => {
    notableContainer.appendChild(generateNotableHTML(notable));
  });
  conceptNotables.forEach(notable => {
    notableContainer.appendChild(generateNotableHTML(notable));
  });
  customNotables.forEach(notable => {
    notableContainer.appendChild(generateNotableHTML(notable));
  });
}

function generateScreenshotHTML(id, source) {
  const screenshot = document.createElement('img');
  screenshot.setAttribute('id', 'screenshot-' + id);
  screenshot.setAttribute('src', source);
  screenshot.setAttribute('class', 'full-view-thumbnail');

  return screenshot;
}

function sortNotables(originalNotables, engineNotables, conceptNotables, customNotables) {
  originalNotables.forEach(notable => {
    switch(notable.type) {
      case 'engineSpecific':
        engineNotables.push(notable);
        break;
      case 'concept':
        conceptNotables.push(notable);
        break;
      case 'custom':
        customNotables.push(notable);
        break;
    }
  });
}

function updateScreenshotIndex(direction) {
  switch(direction) {
    case 'Left':
      screenshotIndex--;
      if (screenshotIndex < 1) {
        screenshotIndex = 1;
      }
      break;
    case 'Right':
      screenshotIndex++;
      if (screenshotIndex > screenshotCount) {
        screenshotIndex = screenshotCount;
      }
      break;
  }
  console.log('screenshotIndex is ' + screenshotIndex + 'screenshot count is ' + screenshotCount);
}

function scrollToScreenshot(index) {
  document.getElementById('screenshot-' + index.toString()).scrollIntoView({behavior: 'smooth', inline: 'center'});
}

function enableSection(sectionType) {
  const screenshots = document.getElementById('js-project-view-screenshot-area');
  screenshots.style.display = 'none';
  const description = document.getElementById('js-project-view-description');
  description.style.display = 'none';
  const info = document.getElementById('js-project-view-info');
  info.style.display = 'none';

  switch(sectionType) {
    case 'Screenshots':
      screenshots.style.display = 'initial';
      break;
    case 'Description':
      description.style.display = 'initial';
      break;
    case 'Info':
      info.style.display = 'flex';
      break;
    case 'All':
      screenshots.style.display = 'initial';
      description.style.display = 'initial';
      info.style.display = 'flex';
      break;
  }
}

function updateButtonVisuals(sectionType) {
  document.querySelectorAll('.js-pv-section-button').forEach(button => {
    if (button.dataset.sectionType === sectionType) {
      if (button.classList.contains('pv-section-button')) {
        button.classList.replace('pv-section-button', 'pv-section-button-selected');
      }
    }
    else {
      if (button.classList.contains('pv-section-button-selected')) {
        button.classList.replace('pv-section-button-selected', 'pv-section-button');
      }
    }
  });
}
updateButtonVisuals('Screenshots');

const widthQuery = window.matchMedia('(max-width: 800px)');
widthQuery.addEventListener('change', query => {
  if (query.matches) {
    enableSection('Screenshots');
    updateButtonVisuals('Screenshots');
  }
  else {
    enableSection('All');
  }
})

document.querySelectorAll('.js-pv-section-button').forEach(button => {
  button.addEventListener('click', () => {
    const sectionType = button.dataset.sectionType;
    enableSection(sectionType);
    updateButtonVisuals(sectionType);
  })
});

document.querySelectorAll('.js-screenshot-nav-button').forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.direction;
    updateScreenshotIndex(direction);
    scrollToScreenshot(screenshotIndex);
  });
});

document.getElementById('js-close-project-view').addEventListener('click', () => {
  closeProjectView();
});