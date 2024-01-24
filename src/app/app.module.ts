import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarFooterComponent } from './components/sidebar/sidebar-footer/sidebar-footer.component';
import { SidebarContentComponent } from './components/sidebar/sidebar-content/sidebar-content.component';
import { SidebarHeaderComponent } from './components/sidebar/sidebar-header/sidebar-header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MainContentHeaderComponent } from './components/main-content/main-content-header/main-content-header.component';
import { AboutComponent } from './components/main-content/about/about.component';
import { EducationComponent } from './components/main-content/education/education.component';
import { ExperienceComponent } from './components/main-content/experience/experience.component';
import { ServiceComponent } from './components/main-content/service/service.component';
import { PortfolioComponent } from './components/main-content/portfolio/portfolio.component';
import { ReviewComponent } from './components/main-content/review/review.component';
import { ContactComponent } from './components/main-content/contact/contact.component';
import { MainContentFooterComponent } from './components/main-content/main-content-footer/main-content-footer.component';
import { TypingAnimationDirective } from './directives/typing-animation.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { QualificationsComponent } from './components/reusable/qualifications/qualifications.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarFooterComponent,
    SidebarContentComponent,
    MainContentComponent,
    MainContentHeaderComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ServiceComponent,
    PortfolioComponent,
    ReviewComponent,
    ContactComponent,
    MainContentFooterComponent,
    TypingAnimationDirective,
    QualificationsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
