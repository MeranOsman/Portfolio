import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  ngOnInit(): void {
    AOS.init();
  }


  scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
}
