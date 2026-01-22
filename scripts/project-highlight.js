import {getProject} from './projects.js'
import {generateProjectHTML} from './project-grid.js'  

document.getElementById('js-project-highlight').appendChild(generateProjectHTML(getProject('SHADE Protocol'), ''));