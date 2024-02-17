import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private translateService: TranslateService, private elementRef: ElementRef) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }


  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }


  @ViewChild('menu_checkbox') menu_checkbox: any;
  mobileMenu = false;


  showMobileMenu() {
    if (this.mobileMenu) {
      this.mobileMenu = false;
      document.body.style.overflowY = 'unset';
    }
    else if (!this.mobileMenu) {
      this.mobileMenu = true;
      document.body.style.overflowY = 'hidden';
    }
  }


  closeMobileMenu() {
    this.mobileMenu = false;
    document.body.style.overflowY = 'unset';
  }
}