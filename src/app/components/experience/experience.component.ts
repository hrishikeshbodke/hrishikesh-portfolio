import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Experience } from '../../core/models/profile.model';
import { fadeInUp, listAnimation } from '../../core/animations/animations';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  animations: [fadeInUp, listAnimation],
  template: `
    <section class="experience" id="experience">
      <div class="container">
        <div class="section-header" @fadeInUp>
          <h2 class="section-title">Professional Experience</h2>
          <p class="section-subtitle">Building Government-Scale Enterprise Systems</p>
        </div>

        <div class="timeline">
          <div class="timeline-item" *ngFor="let exp of experience" @fadeInUp>
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div class="marker-line"></div>
            </div>
            <div class="timeline-content">
              <div class="exp-header">
                <div>
                  <h3 class="exp-title">{{ exp.title }}</h3>
                  <p class="exp-company">{{ exp.company }}</p>
                  <p class="exp-location">{{ exp.location }}</p>
                </div>
                <div class="exp-duration">
                  <span class="date-badge" [class.current]="exp.current">
                    {{ exp.startDate }} - {{ exp.endDate }}
                  </span>
                </div>
              </div>

              <p class="exp-description">{{ exp.description }}</p>

              <div class="modules-section" *ngIf="exp.modules && exp.modules.length > 0">
                <h4>Key Modules Developed:</h4>
                <div class="modules-grid">
                  <div class="module-badge" *ngFor="let module of exp.modules">
                    {{ module }}
                  </div>
                </div>
              </div>

              <div class="responsibilities-section">
                <h4>Responsibilities & Achievements:</h4>
                <ul class="responsibilities-list" @listAnimation>
                  <li *ngFor="let responsibility of exp.responsibilities">
                    {{ responsibility }}
                  </li>
                </ul>
              </div>

              <div class="technologies-section">
                <h4>Technologies Used:</h4>
                <div class="tech-tags">
                  <span class="tech-tag" *ngFor="let tech of exp.technologies">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience {
      padding: 6rem 2rem;
      background: #0f172a;
      position: relative;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
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

    .timeline {
      position: relative;
    }

    .timeline-item {
      display: grid;
      grid-template-columns: 80px 1fr;
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .timeline-marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .marker-dot {
      width: 20px;
      height: 20px;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      border-radius: 50%;
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
      z-index: 2;
    }

    .marker-line {
      width: 2px;
      flex: 1;
      background: linear-gradient(180deg, #3b82f6, transparent);
      margin-top: 0.5rem;
    }

    .timeline-content {
      background: linear-gradient(135deg, #1e293b, #334155);
      padding: 2.5rem;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }

    .timeline-content:hover {
      transform: translateX(10px);
      border-color: #3b82f6;
      box-shadow: 0 15px 50px rgba(59, 130, 246, 0.2);
    }

    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1.5rem;
      gap: 2rem;
    }

    .exp-title {
      font-size: 1.8rem;
      color: white;
      margin-bottom: 0.5rem;
    }

    .exp-company {
      font-size: 1.2rem;
      color: #3b82f6;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    .exp-location {
      color: #94a3b8;
      font-size: 0.95rem;
    }

    .exp-duration {
      flex-shrink: 0;
    }

    .date-badge {
      background: rgba(59, 130, 246, 0.2);
      color: #3b82f6;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: 600;
      font-size: 0.9rem;
      border: 1px solid #3b82f6;
      white-space: nowrap;
    }

    .date-badge.current {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      border-color: transparent;
      animation: pulse-border 2s ease-in-out infinite;
    }

    @keyframes pulse-border {
      0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
      50% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.8); }
    }

    .exp-description {
      color: #cbd5e1;
      line-height: 1.8;
      margin-bottom: 2rem;
      font-size: 1.05rem;
    }

    .modules-section,
    .responsibilities-section,
    .technologies-section {
      margin-top: 2rem;
    }

    .modules-section h4,
    .responsibilities-section h4,
    .technologies-section h4 {
      color: #94a3b8;
      font-size: 1.1rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .modules-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .module-badge {
      background: rgba(139, 92, 246, 0.2);
      color: #a78bfa;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.9rem;
      border: 1px solid rgba(139, 92, 246, 0.3);
    }

    .responsibilities-list {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .responsibilities-list li {
      color: #cbd5e1;
      padding-left: 1.5rem;
      position: relative;
      line-height: 1.7;
    }

    .responsibilities-list li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: 700;
      font-size: 1.2rem;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .tech-tag {
      background: rgba(59, 130, 246, 0.1);
      color: #60a5fa;
      padding: 0.4rem 0.9rem;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 500;
      border: 1px solid rgba(59, 130, 246, 0.3);
      transition: all 0.3s ease;
    }

    .tech-tag:hover {
      background: rgba(59, 130, 246, 0.2);
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .experience {
        padding: 4rem 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .timeline-item {
        grid-template-columns: 40px 1fr;
        gap: 1rem;
      }

      .timeline-content {
        padding: 1.5rem;
      }

      .exp-header {
        flex-direction: column;
        gap: 1rem;
      }

      .exp-title {
        font-size: 1.4rem;
      }

      .date-badge {
        align-self: flex-start;
      }
    }
  `]
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.experience = this.portfolioData.getExperience();
  }
}
