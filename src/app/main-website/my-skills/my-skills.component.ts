import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  skills = [
    {
      img: 'angular-icon.svg',
      name: 'Angular'
    },
    {
      img: 'ts.svg',
      name: 'TypeScript'
    },
    {
      img: 'Javascript-2.svg',
      name: 'JavaScript'
    },
    {
      img: 'html.svg',
      name: 'HTML'
    },
    {
      img: 'Firebase.svg',
      name: 'Firebase'
    },
    {
      img: 'git.svg',
      name: 'GIT'
    },
    {
      img: 'css.svg',
      name: 'CSS'
    },
    {
      img: 'Api.svg',
      name: 'Rest-Api'
    },
    {
      img: 'scrum.svg',
      name: 'Scrum'
    },
    {
      img: 'materialdesign.svg',
      name: 'Material Design'
    }
  ];
}