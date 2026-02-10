import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Profile, Education } from '../../core/models/profile.model';
import { fadeInUp, slideInLeft, slideInRight } from '../../core/animations/animations';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  animations: [fadeInUp, slideInLeft, slideInRight],
  template: `
    <section class="about" id="about">
      <div class="container">
        <div class="section-header" @fadeInUp>
          <h2 class="section-title">About Me</h2>
          <p class="section-subtitle">Enterprise-Grade Full-Stack Developer</p>
        </div>

        <div class="about-content">
          <div class="about-card" @slideInLeft>
            <div class="card-icon">👨‍💻</div>
            <h3>{{ profile.currentRole }}</h3>
            <p class="organization">{{ profile.organization }}</p>
            <p class="location">{{ profile.location }}</p>
            <div class="highlight-box">
              <p>{{ profile.summary }}</p>
            </div>
          </div>

          <div class="about-details" @slideInRight>
            <div class="detail-section">
              <h3>🎯 Current Focus</h3>
              <ul class="detail-list">
                <li>Developing secure, scalable modules for PMGSY-OMMAS national infrastructure system</li>
                <li>Building REST APIs handling government data for 20+ state administrations</li>
                <li>Implementing advanced security with AES/RSA encryption and digital signatures</li>
                <li>Integrating GIS mapping solutions with OpenLayers for spatial visualization</li>
                <li>Mentoring junior developers and conducting code reviews</li>
              </ul>
            </div>

            <div class="detail-section">
              <h3>🎓 Education</h3>
              <div class="education-grid">
                <div class="education-card" *ngFor="let edu of education">
                  <div class="edu-header">
                    <h4>{{ edu.degree }}</h4>
                    <span class="edu-year">{{ edu.year }}</span>
                  </div>
                  <p class="edu-institution">{{ edu.institution }}</p>
                  <p class="edu-location">{{ edu.location }}</p>
                  <div class="edu-score">
                    <span *ngIf="edu.percentage">{{ edu.percentage }}</span>
                    <span *ngIf="edu.cgpa">CGPA: {{ edu.cgpa }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="detail-section">
              <h3>💡 Core Strengths</h3>
              <div class="strengths-grid">
                <div class="strength-card">
                  <span class="strength-icon">🏛️</span>
                  <p>Government-Scale Systems</p>
                </div>
                <div class="strength-card">
                  <span class="strength-icon">🔒</span>
                  <p>Security & Encryption</p>
                </div>
                <div class="strength-card">
                  <span class="strength-icon">⚡</span>
                  <p>Performance Optimization</p>
                </div>
                <div class="strength-card">
                  <span class="strength-icon">🗺️</span>
                  <p>GIS Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 6rem 2rem;
      background: #0f172a;
      position: relative;
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

    .about-content {
      display: grid;
      grid-template-columns: 400px 1fr;
      gap: 3rem;
    }

    .about-card {
      background: linear-gradient(135deg, #1e293b, #334155);
      padding: 3rem;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .card-icon {
      font-size: 4rem;
      margin-bottom: 1.5rem;
    }

    .about-card h3 {
      font-size: 1.5rem;
      color: white;
      margin-bottom: 0.5rem;
    }

    .organization {
      color: #3b82f6;
      font-weight: 600;
      margin-bottom: 0.25rem;
      font-size: 1.1rem;
    }

    .location {
      color: #94a3b8;
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }

    .highlight-box {
      background: rgba(59, 130, 246, 0.1);
      padding: 1.5rem;
      border-radius: 12px;
      border-left: 4px solid #3b82f6;
      margin-top: 2rem;
    }

    .highlight-box p {
      color: #cbd5e1;
      line-height: 1.8;
      margin: 0;
    }

    .about-details {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }

    .detail-section h3 {
      font-size: 1.5rem;
      color: white;
      margin-bottom: 1.5rem;
    }

    .detail-list {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .detail-list li {
      color: #cbd5e1;
      padding-left: 1.5rem;
      position: relative;
      line-height: 1.6;
    }

    .detail-list li::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #3b82f6;
      font-size: 1.2rem;
    }

    .education-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .education-card {
      background: rgba(30, 41, 59, 0.5);
      padding: 1.5rem;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }

    .education-card:hover {
      transform: translateY(-5px);
      border-color: #3b82f6;
      box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
    }

    .edu-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.75rem;
      gap: 1rem;
    }

    .edu-header h4 {
      color: white;
      font-size: 1.1rem;
      margin: 0;
      flex: 1;
    }

    .edu-year {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      color: white;
      white-space: nowrap;
    }

    .edu-institution {
      color: #94a3b8;
      font-size: 0.95rem;
      margin-bottom: 0.25rem;
    }

    .edu-location {
      color: #64748b;
      font-size: 0.85rem;
      margin-bottom: 0.75rem;
    }

    .edu-score {
      color: #3b82f6;
      font-weight: 600;
      font-size: 1.1rem;
    }

    .strengths-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }

    .strength-card {
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
      padding: 1.5rem;
      border-radius: 12px;
      text-align: center;
      border: 1px solid rgba(59, 130, 246, 0.2);
      transition: all 0.3s ease;
    }

    .strength-card:hover {
      transform: translateY(-5px);
      border-color: #3b82f6;
      box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
    }

    .strength-icon {
      font-size: 2.5rem;
      display: block;
      margin-bottom: 0.75rem;
    }

    .strength-card p {
      color: white;
      font-weight: 600;
      margin: 0;
    }

    @media (max-width: 1024px) {
      .about-content {
        grid-template-columns: 1fr;
      }

      .about-card {
        max-width: 500px;
        margin: 0 auto;
      }
    }

    @media (max-width: 768px) {
      .about {
        padding: 4rem 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .education-grid,
      .strengths-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  profile!: Profile;
  education: Education[] = [];

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.profile = this.portfolioData.getProfile();
    this.education = this.portfolioData.getEducation();
  }
}
