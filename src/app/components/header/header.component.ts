import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled()">
      <nav class="nav-container">
        <div class="logo">
          <span class="logo-text">HB</span>
          <span class="logo-name">Hrishikesh Bodke</span>
        </div>
        
        <div class="nav-menu" [class.active]="menuOpen()">
          <a href="#home" class="nav-link" (click)="scrollToSection('home')">Home</a>
          <a href="#about" class="nav-link" (click)="scrollToSection('about')">About</a>
          <a href="#skills" class="nav-link" (click)="scrollToSection('skills')">Skills</a>
          <a href="#experience" class="nav-link" (click)="scrollToSection('experience')">Experience</a>
          <a href="#projects" class="nav-link" (click)="scrollToSection('projects')">Projects</a>
          <a href="#contact" class="nav-link" (click)="scrollToSection('contact')">Contact</a>
        </div>

        <button class="mobile-toggle" (click)="toggleMenu()" [attr.aria-label]="'Toggle menu'">
          <span class="bar" [class.active]="menuOpen()"></span>
          <span class="bar" [class.active]="menuOpen()"></span>
          <span class="bar" [class.active]="menuOpen()"></span>
        </button>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }

    .header.scrolled {
      background: rgba(15, 23, 42, 0.95);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .nav-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .logo-text {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.2rem;
      color: white;
    }

    .logo-name {
      font-size: 1.1rem;
      font-weight: 600;
      color: white;
    }

    .nav-menu {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-link {
      color: #cbd5e1;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      position: relative;
      padding: 0.5rem 0;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      transition: width 0.3s ease;
    }

    .nav-link:hover {
      color: white;
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .mobile-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }

    .bar {
      width: 25px;
      height: 3px;
      background: white;
      transition: all 0.3s ease;
      border-radius: 3px;
    }

    .bar.active:nth-child(1) {
      transform: rotate(45deg) translate(7px, 7px);
    }

    .bar.active:nth-child(2) {
      opacity: 0;
    }

    .bar.active:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }

    @media (max-width: 768px) {
      .logo-name {
        display: none;
      }

      .mobile-toggle {
        display: flex;
      }

      .nav-menu {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: rgba(15, 23, 42, 0.98);
        flex-direction: column;
        padding: 2rem;
        gap: 1.5rem;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }

      .nav-menu.active {
        transform: translateX(0);
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.menuOpen.update(value => !value);
  }

  scrollToSection(sectionId: string): void {
    this.menuOpen.set(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
