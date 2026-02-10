import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Project } from '../../core/models/profile.model';
import { fadeInUp, scaleIn } from '../../core/animations/animations';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  animations: [fadeInUp, scaleIn],
  template: `
    <section class="projects" id="projects">
      <div class="container">
        <div class="section-header" @fadeInUp>
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">Real-World Impact & Government-Scale Solutions</p>
        </div>

        <div class="filter-buttons" @fadeInUp>
          <button 
            class="filter-btn" 
            [class.active]="selectedCategory() === 'All'"
            (click)="filterProjects('All')">
            All Projects
          </button>
          <button 
            class="filter-btn" 
            [class.active]="selectedCategory() === category"
            *ngFor="let category of categories"
            (click)="filterProjects(category)">
            {{ category }}
          </button>
        </div>

        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of filteredProjects()" @scaleIn>
            <div class="project-header">
              <div class="project-category">{{ project.category }}</div>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-subtitle">{{ project.subtitle }}</p>
            </div>

            <p class="project-description">{{ project.description }}</p>

            <div class="project-details" *ngIf="project.duration || project.role">
              <div class="detail-item" *ngIf="project.duration">
                <span class="detail-icon">⏱️</span>
                <span>{{ project.duration }}</span>
              </div>
              <div class="detail-item" *ngIf="project.role">
                <span class="detail-icon">👤</span>
                <span>{{ project.role }}</span>
              </div>
            </div>

            <div class="project-impact" *ngIf="project.impact">
              <div class="impact-badge">
                <span class="impact-icon">🎯</span>
                <p>{{ project.impact }}</p>
              </div>
            </div>

            <div class="project-features">
              <h4>Key Features:</h4>
              <ul>
                <li *ngFor="let feature of project.features.slice(0, 4)">{{ feature }}</li>
              </ul>
              <button 
                class="show-more-btn" 
                *ngIf="project.features.length > 4"
                (click)="toggleFeatures(project.id)">
                {{ expandedProjects().has(project.id) ? 'Show Less' : 'Show More' }} 
                ({{ project.features.length - 4 }} more)
              </button>
              <ul *ngIf="expandedProjects().has(project.id)">
                <li *ngFor="let feature of project.features.slice(4)">{{ feature }}</li>
              </ul>
            </div>

            <div class="project-tech">
              <span class="tech-badge" *ngFor="let tech of project.technologies">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      padding: 6rem 2rem;
      background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 800;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: #94a3b8;
    }

    .filter-buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .filter-btn {
      padding: 0.75rem 1.5rem;
      background: rgba(30, 41, 59, 0.6);
      color: #cbd5e1;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .filter-btn:hover {
      background: rgba(59, 130, 246, 0.2);
      border-color: #3b82f6;
      color: white;
    }

    .filter-btn.active {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      border-color: transparent;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
      gap: 2rem;
    }

    .project-card {
      background: linear-gradient(135deg, #1e293b, #334155);
      padding: 2.5rem;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .project-card:hover {
      transform: translateY(-10px);
      border-color: #3b82f6;
      box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
    }

    .project-header {
      border-bottom: 2px solid rgba(59, 130, 246, 0.3);
      padding-bottom: 1.5rem;
    }

    .project-category {
      display: inline-block;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      padding: 0.4rem 1rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .project-title {
      font-size: 1.65rem;
      color: white;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }

    .project-subtitle {
      color: #94a3b8;
      font-size: 1rem;
      margin: 0;
    }

    .project-description {
      color: #cbd5e1;
      line-height: 1.7;
      margin: 0;
    }

    .project-details {
      display: flex;
      gap: 2rem;
      padding: 1rem;
      background: rgba(59, 130, 246, 0.1);
      border-radius: 8px;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #cbd5e1;
      font-size: 0.9rem;
    }

    .detail-icon {
      font-size: 1.2rem;
    }

    .project-impact {
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15));
      border-left: 4px solid #10b981;
      border-radius: 8px;
      padding: 1rem;
    }

    .impact-badge {
      display: flex;
      gap: 0.75rem;
      align-items: flex-start;
    }

    .impact-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .impact-badge p {
      color: #6ee7b7;
      margin: 0;
      font-weight: 600;
      line-height: 1.6;
    }

    .project-features h4 {
      color: #94a3b8;
      font-size: 1rem;
      margin-bottom: 0.75rem;
      font-weight: 600;
    }

    .project-features ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .project-features li {
      color: #cbd5e1;
      padding-left: 1.25rem;
      position: relative;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .project-features li::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #3b82f6;
      font-weight: 700;
    }

    .show-more-btn {
      background: transparent;
      color: #3b82f6;
      border: none;
      padding: 0.5rem 0;
      font-weight: 600;
      cursor: pointer;
      font-size: 0.9rem;
      margin-top: 0.5rem;
      transition: all 0.3s ease;
    }

    .show-more-btn:hover {
      color: #60a5fa;
      text-decoration: underline;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .tech-badge {
      background: rgba(59, 130, 246, 0.15);
      color: #60a5fa;
      padding: 0.35rem 0.75rem;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid rgba(59, 130, 246, 0.3);
    }

    @media (max-width: 1200px) {
      .projects-grid {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      }
    }

    @media (max-width: 768px) {
      .projects {
        padding: 4rem 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .project-card {
        padding: 1.75rem;
      }

      .project-details {
        flex-direction: column;
        gap: 0.75rem;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  categories: string[] = [];
  selectedCategory = signal('All');
  filteredProjects = signal<Project[]>([]);
  expandedProjects = signal<Set<string>>(new Set());

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.projects = this.portfolioData.getProjects();
    this.categories = [...new Set(this.projects.map(p => p.category))];
    this.filteredProjects.set(this.projects);
  }

  filterProjects(category: string): void {
    this.selectedCategory.set(category);
    if (category === 'All') {
      this.filteredProjects.set(this.projects);
    } else {
      this.filteredProjects.set(this.projects.filter(p => p.category === category));
    }
  }

  toggleFeatures(projectId: string): void {
    const expanded = new Set(this.expandedProjects());
    if (expanded.has(projectId)) {
      expanded.delete(projectId);
    } else {
      expanded.add(projectId);
    }
    this.expandedProjects.set(expanded);
  }
}
