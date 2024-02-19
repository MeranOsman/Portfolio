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
      description: 'join description',
      githubLink: 'https://github.com/MeranOsman/Join',
      projectLink: 'https://meran-osman.developerakademie.net/join/index.html'
    },
    {
      name: 'El Pollo Loco',
      img: 'PolloLoco.png',
      tec: 'JavaScript | HTML | CSS',
      description: 'game',
      githubLink: 'https://github.com/MeranOsman/El-Pollo-Loco',
      projectLink: 'https://meran-osman.developerakademie.net/el-pollo-loco/index.html'
    },
    {
      name: 'This Portfolio',
      img: 'portfolio.png',
      tec: 'Angular | TypeScript | HTML | SCSS',
      description: 'portfolio',
      githubLink: 'https://github.com/MeranOsman/portfolio',
      projectLink: '#introduction'
    }
  ];
}