import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './main-website/introduction/introduction.component';
import { AboutMeComponent } from './main-website/about-me/about-me.component';
import { MySkillsComponent } from './main-website/my-skills/my-skills.component';
import { PortfolioComponent } from './main-website/portfolio/portfolio.component';
import { ProjectComponent } from './main-website/portfolio/project/project.component';
import { ContactComponent } from './main-website/contact/contact.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { MainWebsiteComponent } from './main-website/main-website.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ContactformComponent } from './main-website/contact/contactform/contactform.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent,
    MainWebsiteComponent,
    ImprintComponent,
    DataProtectionComponent,
    ContactformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
