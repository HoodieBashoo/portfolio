// Colours for notable tags
const engineSpecificBg = '#87C65C';
const engineSpecificDist = '#082A24';
const engineSpecificText = '#082A24';
const conceptBg = '#34935D';
const conceptDist = '#D1F3AA';
const conceptText = '#D1F3AA';
const customBg = '#0C3D35';
const customDist = '#C6E7A1';
const customText = '#C6E7A1';
//

export function getProject(title) {
  let matchingProject;
  projects.forEach(project => {
    if (title === project.title) {
      matchingProject = project;
      return;
    }
  });

  return matchingProject;
}

export const projects = [
  {
    title: 'Sprouts!',
    tagline: 'Farming/Cooking Simulator',
    thumbnail: 'images/thumbnails/Sprouts Thumbnail.png',
    screenshots: [
      'images/thumbnails/Sprouts/Pests.gif',
      'images/thumbnails/Sprouts/Recipe Box.gif',
      'images/thumbnails/Sprouts/Lake.gif',
      'images/thumbnails/Sprouts/Minigame.gif',
      'images/thumbnails/Sprouts/Minigame2.gif',
      'images/thumbnails/Sprouts/Minigame3.gif',
    ],
    description: `Sprouts was my first full-scale project, and was planned to be about 7-10 hours. You cook food for the creatures growing in your garden, and in return they'll produce more ingredients for you.
    My proudest accomplishment would have to be the link between the recipe system and the minigame system. The algorithm verifies each step of the process, and will consume ingredients as you progress through the minigames.`,
    engineType: 'Unity',
    jam: '',
    timespan: 'Time Taken: 1.5 Years',
    date: 'Dropped: June 2025',
    link: 'https://hoodiebashoo.itch.io/sprouts',
    linkImage: 'images/logos/Itch Logo.png',
    notables: [
      {
        text: 'NavMesh',
        type: 'engineSpecific'
      },
      {
        text: 'Shader Graph',
        type: 'engineSpecific'
      },
      {
        text: 'Particle System',
        type: 'engineSpecific'
      },
      {
        text: 'Scriptable Objects',
        type: 'engineSpecific'
      },
      {
        text: 'Save System',
        type: 'concept'
      },
      {
        text: 'Minigames',
        type: 'concept'
      },
      {
        text: 'Inventories',
        type: 'concept'
      },
      {
        text: 'Recipes/Crafting',
        type: 'concept'
      },
      {
        text: 'Custom Input System',
        type: 'custom'
      },
      {
        text: 'Dynamic Proximity-based Interaction',
        type: 'custom'
      },
    ],
    extraNotables: [
      {
        text: 'Grid System',
        type: 'concept'
      },
      {
        text: 'Rarity',
        type: 'concept'
      },
      {
        text: 'Minigame Queuing System',
        type: 'custom'
      },
      {
        text: 'Advanced Recipe Navigation',
        type: 'custom'
      },
    ]
  },
  {
    title: 'Pesticide',
    tagline: 'Isaac-Like',
    thumbnail: 'images/thumbnails/Pesticide Thumbnail.png',
    screenshots: [
      'images/thumbnails/Pesticide/1.png',  
      'images/thumbnails/Pesticide/UI.png',  
      'images/thumbnails/Pesticide/2.png',  
      'images/thumbnails/Pesticide/3.png',  
      'images/thumbnails/Pesticide/4.png',  
    ],
    description: `A spinoff of Sprouts and mechanically similar to The Binding of Isaac, made for a custom arcade machine. It ended up as a test of how smooth and refined I could get the player controller to feel, and was also my first real attempt at enemy AI and working in a 2D space.`,
    engineType: 'Unity',
    jam: 'Arcade Jam 2024',
    timespan: 'Time Taken: 1 Week',
    date: 'Submitted: June 2024',
    link: 'https://hoodiebashoo.itch.io/pesticide',
    linkImage: 'images/logos/Itch Logo.png',
    notables: [
      {
        text: 'Tilemaps',
        type: 'engineSpecific'
      },
      {
        text: 'Collision Layers',
        type: 'engineSpecific'
      },
      {
        text: 'Leaderboard',
        type: 'concept'
      },
      {
        text: 'Input Buffering',
        type: 'concept'
      },
    ],
    extraNotables: [
    ]
  },
  {
    title: 'The Dream',
    tagline: 'Narrative Walking Simulator',
    thumbnail: 'images/thumbnails/The Dream Thumbnail.png',
    screenshots: [
      'images/thumbnails/The Dream/First Note.png',
      'images/thumbnails/The Dream/TVs Left.png',
      'images/thumbnails/The Dream/Fountain.png',
      'images/thumbnails/The Dream/Playground.png',
    ],
    description: `For a multi-genre essay back in highschool, I chose to learn Unity and finally make a game. It led to The Dream, a simple experience about not giving up on what you truly want to do with your life. This was back when I wanted to be a 3D artist, so all the models were created by me as well. Behind the scenes, this project is rougher than 1 grit, but it opened to me the world of game development and I owe where I am now to this first step.`,
    engineType: 'Unity',
    jam: '',
    timespan: 'Time Taken: 1 Month',
    date: 'Finished: June 2021',
    link: 'https://gamejolt.com/games/The-Dream/659954',
    linkImage: 'images/logos/Game Jolt Logo.png',
    notables: [
      {
        text: 'Lightmapping',
        type: 'engineSpecific'
      },
      {
        text: 'Post-Processing',
        type: 'engineSpecific'
      },
    ],
    extraNotables: [
    ]
  },
  {
    title: 'Souls Concept',
    tagline: 'Souls-Like',
    thumbnail: 'images/thumbnails/Souls Concept Thumbnail.png',
    screenshots: [
      'images/thumbnails/Souls Concept/Standing.png',
      'images/thumbnails/Souls Concept/Falling.png',
      'images/thumbnails/Souls Concept Thumbnail.png'
    ],
    description: `A concept for a game I still plan to make one day, and have documents and documents of planning for, down to the smallest gameplay details. Through the mistakes of this version, I learned how to prioritize what I work on and what matters in the long process of finishing a game. Player models and animations at the start are definitely a no-go for my purposes...`,
    engineType: 'Unity',
    jam: '',
    timespan: 'Time Taken: 2 Weeks',
    date: 'Dropped: December 2021',
    link: 'https://gamejolt.com/games/pickle-souls/842866',
    linkImage: 'images/logos/Game Jolt Logo.png',
    notables: [
      {
        text: 'Input System',
        type: 'engineSpecific'
      },
      {
        text: 'Animation System',
        type: 'engineSpecific'
      },
      {
        text: 'Cloth Physics',
        type: 'engineSpecific'
      },
    ],
    extraNotables: [
    ]
  },
  {
    title: 'Ego Arena',
    tagline: 'Turn-Based Typing Combat',
    thumbnail: 'images/thumbnails/Ego Arena Thumbnail.png',
    screenshots: [
      'images/thumbnails/Ego Arena/Character Select.png',
      'images/thumbnails/Ego Arena/Battle1.png',
      'images/thumbnails/Ego Arena/Battle2.png',
      'images/thumbnails/Ego Arena/Win.png',
    ],
    description: `Ego Arena was a very interesting game to work on, because almost all of the navigation and gameplay was based on text input. You chose your attacks by typing them, and it would narrow the selection down as you went. Definitely a strange system to come up with behind the scenes.`,
    engineType: 'Unity',
    jam: 'Global Game Jam 2025',
    timespan: 'Time Taken: 2 Days',
    date: 'Submitted: January 2025',
    link: 'https://hoodiebashoo.itch.io/ego-arena',
    linkImage: 'images/logos/Itch Logo.png',
    notables: [
      {
        text: 'Turn System',
        type: 'concept'
      },
      {
        text: 'Character Selection',
        type: 'concept'
      },
      {
        text: 'Status Effects',
        type: 'concept'
      },
      {
        text: 'Typing-based Navigation',
        type: 'custom'
      },
    ],
    extraNotables: [
    ]
  },
  {
    title: 'Hot Wired',
    tagline: 'Rail-Driving Fix-It-Up',
    thumbnail: 'images/thumbnails/Hot Wired Thumbnail.png',
    screenshots: [
      'images/thumbnails/Hot Wired/Minigame1.png',
      'images/thumbnails/Hot Wired/Minigame2.png',
      'images/thumbnails/Hot Wired/Dead.png',
    ],
    description: `My first jam game, where you dodge debris on a winding road while repairing your rusty, crumbling vehicle through pop-up minigames. I was pretty proud of the debuff system I came up with for it, where different things affect your car depending on which minigames you fail, stacking until the car is barely controllable. For example failing to repair your left tire will cause you to drift that direction.`,
    engineType: 'Unity',
    jam: 'Alberta Game Jam 2023',
    timespan: 'Time Taken: 2 Days',
    date: 'Submitted: August 2023',
    link: 'https://hoodiebashoo.itch.io/hot-wired',
    linkImage: 'images/logos/Itch Logo.png',
    notables: [
      {
        text: 'Rail Movement',
        type: 'concept'
      },
      {
        text: 'Debuffs',
        type: 'concept'
      },
    ],
    extraNotables: [
    ]
  },
  {
    title: 'Piple',
    tagline: 'Candy Crush-Like',
    thumbnail: 'images/thumbnails/Piple Thumbnail.png',
    screenshots: [
      'images/thumbnails/Piple Thumbnail.png',
      'images/thumbnails/Piple/PipleConcept1.png',
    ],
    description: `Move the rows, columns, and rotate the pipes to make the longest connections for max points. This was one of the earliest projects I worked on, and one that I'll make sure I return to some day. I got to make the coolest algorithm for finding connections, where even if the pipes were snaking all around, once they connected two source pipes, they'd disappear and let new pipes fall in from the top.`,
    engineType: 'Unity',
    jam: '',
    timespan: 'Time Taken: 3 Weeks',
    date: 'Dropped: May 2022',
    link: 'https://gamejolt.com/games/piple/842937',
    linkImage: 'images/logos/Game Jolt Logo.png',
    notables: [
      {
        text: 'Grid System',
        type: 'concept'
      },
      {
        text: 'Path-finding Combination Algorithm',
        type: 'custom'
      },
    ],
    extraNotables: [
    ]
  },
  {
    title: 'Tickle Monster',
    tagline: 'First Person Tickler',
    thumbnail: 'images/thumbnails/Tickle Monster Thumbnail.png',
    screenshots: [
      'images/thumbnails/Tickle Monster/Murder.png',
      'images/thumbnails/Tickle Monster/Tickle.png',
      'images/thumbnails/Tickle Monster/Title.png',
    ],
    description: `Tickle all the silly gnomes around you to keep your happiness up! Surely no random civilians will be harmed! Tickle Monster was an attempt to learn Godot using a game jam, and while I didn't get much accomplished compared to everyone else in the team, I did gain some valuable experience with it. It'll be a springboard for any future Godot games I want to make.`,
    engineType: 'Godot',
    jam: 'Global Game Jam 2024',
    timespan: 'Time Taken: 2 Days',
    date: 'Submitted: January 2024',
    link: 'https://turtleholder.itch.io/tickle-monster',
    linkImage: 'images/logos/Itch Logo.png',
    notables: [
      {
        text: 'Tickling...',
        type: 'custom'
      },
    ],
    extraNotables: [
    ]
  },
]

export function getNotableColours(type) {
  switch(type) {
    case 'engineSpecific':
      return {
        bgCol: engineSpecificBg,
        distCol: engineSpecificDist,
        textCol: engineSpecificText
      }
    case 'custom':
      return {
        bgCol: customBg,
        distCol: customDist,
        textCol: customText
      }
    case 'concept':
      return {
        bgCol: conceptBg,
        distCol: conceptDist,
        textCol: conceptText
    }
  }
}