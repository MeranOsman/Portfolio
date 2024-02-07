import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent {
  projects = [
    {
      name: 'Join',
      img: 'join.png',
      tec: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      githubLink: 'https://github.com/MeranOsman/Join',
      projectLink: 'https://meran-osman.developerakademie.net/join/index.html'
    },
    {
      name: 'El Pollo Loco',
      img: 'PolloLoco.png',
      tec: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the big hen.',
      githubLink: 'https://github.com/MeranOsman/El-Pollo-Loco',
      projectLink: 'https://meran-osman.developerakademie.net/el%20pollo%20loco/index.html'
    },
    {
      name: 'This Portfolio',
      img: 'portfolio.png',
      tec: 'Angular | TypeScript | HTML | SCSS',
      description: 'This portfolio presents projects and skills in a user-friendly manner. Explore them effortlessly.',
      githubLink: 'https://github.com/MeranOsman/portfolio',
      projectLink: '#introduction'
    }
  ];
}