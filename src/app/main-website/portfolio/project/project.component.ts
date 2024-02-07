import { Component, OnInit, Input } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})

export class ProjectComponent implements OnInit {
  @Input() project: any;
  @Input() isOdd: any;

  ngOnInit(): void {
    AOS.init();

    document
      .querySelectorAll('img')
      .forEach((img) => img.addEventListener('load', () => AOS.refresh()));
  }
}
