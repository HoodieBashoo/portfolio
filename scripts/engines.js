import {clearProjects, displayProjects} from './project-grid.js'

document.querySelectorAll('.js-clickable-logo').forEach(logo => {
  logo.addEventListener('click', () => {
    const updateSuccess = updateCurrentEngine(logo.dataset.engineType);
    if (!updateSuccess) {
      document.getElementById('engines').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      clearProjects();
      return;
    }
    
    displayProjects(logo.dataset.engineType);

    document.getElementById('engine-description').scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  })
})

let currentEngineType = '';
function updateCurrentEngine(engineType) {
  const engineNameContainer = document.getElementById('engine-name');

  if (currentEngineType === engineType) {
    changeEngineDescription('');
    currentEngineType = '';
    engineNameContainer.innerText = '';
    return false;
  }
  else {
    changeEngineDescription(engineType);
  }
  currentEngineType = engineType;
  engineNameContainer.innerText = engineType;
  return true;
}

function changeEngineDescription(engineType) {
  const engineDescription = document.getElementById('engine-description');

  let chosenDescription = '';
  switch(engineType) {
    case 'Unity':
      chosenDescription = engineDescriptions.unityDescription;
      break;
    case 'Unreal':
      chosenDescription = engineDescriptions.unrealDescription;
      break;
    case 'Godot':
      chosenDescription = engineDescriptions.godotDescription;
      break;
    default:
      chosenDescription = engineDescriptions.defaultDescription;
  }
  engineDescription.innerText = chosenDescription;
}

const engineDescriptions = {
  unityDescription: 'My engine of choice.\nI have experience with most built-in systems and feel capable of creating anything I can imagine in it.',
  unrealDescription: 'Check back soon!\nI have plans of expanding into Unreal in a coming project.',
  godotDescription: 'Godot Description',
  defaultDescription: 'Select an engine above to view projects'
}