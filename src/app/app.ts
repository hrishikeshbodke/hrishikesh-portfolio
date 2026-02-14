import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  // Flag to control popup visibility
  showPopup = false;

  /**
   * Component initialization
   * Show popup when the site loads
   */
  ngOnInit(): void {
    // Small delay to ensure page is loaded before showing popup
    setTimeout(() => {
      this.showPopup = true;
    }, 800);
  }

  /**
   * Close the popup
   */
  closePopup(): void {
    this.showPopup = false;
  }

  /**
   * Navigate to contact section and close popup
   */
  goToContact(): void {
    this.closePopup();
    // Smooth scroll to contact section
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
}
