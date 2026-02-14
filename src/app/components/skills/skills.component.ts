import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SkillCategory } from '../../core/models/profile.model';
import { fadeInUp, staggerFadeIn } from '../../core/animations/animations';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  animations: [fadeInUp, staggerFadeIn],
  template: `
    <section class="skills" id="skills">
      <div class="container">
        <div class="section-header" @fadeInUp>
          <h2 class="section-title">Technical Skills</h2>
          <p class="section-subtitle">Expertise in Modern Enterprise Technologies</p>
        </div>

        <div class="skills-grid" @staggerFadeIn>
          <div class="skill-category" *ngFor="let category of skillCategories">
            <div class="category-header">
              <span class="category-icon">{{ category.icon }}</span>
              <h3>{{ category.name }}</h3>
            </div>
            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of category.skills">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <!-- <span class="skill-level">{{ skill.level }}%</span> -->
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills {
      padding: 6rem 2rem;
      background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
    }

    .container {
      max-width: 1400px;
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

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
    }

    .skill-category {
      background: rgba(30, 41, 59, 0.6);
      padding: 2rem;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }

    .skill-category:hover {
      transform: translateY(-5px);
      border-color: #3b82f6;
      box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid rgba(59, 130, 246, 0.3);
    }

    .category-icon {
      font-size: 2rem;
    }

    .category-header h3 {
      font-size: 1.5rem;
      color: white;
      margin: 0;
    }

    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .skill-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .skill-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .skill-name {
      color: #cbd5e1;
      font-weight: 600;
      font-size: 1rem;
    }

    .skill-level {
      color: #3b82f6;
      font-weight: 700;
      font-size: 0.9rem;
    }

    .skill-bar {
      height: 8px;
      background: rgba(51, 65, 85, 0.6);
      border-radius: 10px;
      overflow: hidden;
      position: relative;
    }

    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      border-radius: 10px;
      transition: width 1.5s ease-out;
      position: relative;
    }

    .skill-progress::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: shimmer 2s infinite;
    }

    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    @media (max-width: 768px) {
      .skills {
        padding: 4rem 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }

      .skill-category {
        padding: 1.5rem;
      }
    }
  `]
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [];

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.skillCategories = this.portfolioData.getSkillCategories();
  }
}
