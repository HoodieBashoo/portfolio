import {projects, getNotableColours} from './projects.js'
import {openProjectView, closeProjectView, isProjectOpen} from './project-view.js';

export function clearProjects() {
  const projectGrid = document.getElementById('js-project-grid');
  projectGrid.textContent = '';
  projectGrid.style.display = 'none';

  // TODO: remove event listeners from all projects
}

export function displayProjects(engineType) {
  clearProjects();
  const projectGrid = document.getElementById('js-project-grid');
  projectGrid.style.display = 'grid';

  let projectsDisplayed = 0;
  projects.forEach(projectData => {
    if (engineType !== '' && engineType !== projectData.engineType) {
      return;
    }

    const project = generateProjectHTML(projectData, engineType);
    projectGrid.appendChild(project);
    projectsDisplayed++;
  });

  if (projectsDisplayed == 0) {
    projectGrid.style.display = 'none';
  } 

  return projectsDisplayed;
}
displayProjects('');

export function generateProjectHTML(projectData, engineType) {
  const project = document.createElement('div');
  project.setAttribute('class', 'project');
  project.addEventListener('click', () => {
    if (isProjectOpen) {
      closeProjectView();
    }
    openProjectView(projectData);
  })

  // thumbnail and title
  const thumbnailContainer = document.createElement('div');
  thumbnailContainer.setAttribute('class', 'project-thumbnail-container');
  project.appendChild(thumbnailContainer);

  const thumbnail = document.createElement('img');
  thumbnail.setAttribute('src', projectData.thumbnail);
  thumbnail.setAttribute('class', 'project-thumbnail');
  thumbnailContainer.appendChild(thumbnail);

  if (engineType === '') {
    const identifierContainer = document.createElement('div');
    identifierContainer.setAttribute('class', 'identifier-container');
    thumbnailContainer.appendChild(identifierContainer);

    const engineIdentifier = document.createElement('img');
    engineIdentifier.setAttribute('src', getEngineImage(projectData.engineType));
    engineIdentifier.setAttribute('class', 'engine-identifier');
    identifierContainer.appendChild(engineIdentifier);
  }

  const title = document.createElement('span');
  title.textContent = projectData.title;
  title.setAttribute('class', 'project-title');
  thumbnailContainer.appendChild(title);
  //

  // project notables
  const notablesContainer = document.createElement('div');
  notablesContainer.setAttribute('class', 'project-notables');
  project.appendChild(notablesContainer);

  projectData.notables.forEach(notableData => {
    const notable = generateNotableHTML(notableData);
    notablesContainer.append(notable);
  });
  //

  return project;
}

export function generateNotableHTML(notableData) {
  const colours = getNotableColours(notableData.type)

  const notable = document.createElement('div');
  notable.setAttribute('class', 'notable');
  notable.style.backgroundColor = colours.bgCol;

  const distinguisher = document.createElement('div');
  distinguisher.setAttribute('class', 'distinguisher');
  distinguisher.style.backgroundColor = colours.distCol;
  notable.appendChild(distinguisher);

  const notableName = document.createElement('span');
  notableName.innerText = notableData.text;
  notableName.setAttribute('class', 'notable-name');
  notableName.style.color = colours.textCol;
  notable.appendChild(notableName);

  return notable;
}

function getEngineImage(engine) {
  switch(engine) {
    case 'Unity':
      return 'images/logos/Unity Logo.png';
    case 'Unreal':
      return 'images/logos/Unreal Logo.png';
    case 'Godot':
      return 'images/logos/Godot Logo.png';
  }
}