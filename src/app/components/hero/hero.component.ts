import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Profile } from '../../core/models/profile.model';
import { fadeInUp, fadeInDown } from '../../core/animations/animations';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  animations: [fadeInUp, fadeInDown],
  template: `
    <section class="hero" id="home">
      <div class="hero-content">
        <div class="hero-text" @fadeInUp>
          <h1 class="hero-title">
            Hi, I'm <span class="gradient-text">{{ profile.name }}</span>
          </h1>
          <h2 class="hero-subtitle">{{ profile.title }}</h2>
          <p class="hero-description">
            {{ profile.summary }}
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">{{ profile.experience }}</span>
              <span class="stat-label">Experience</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">20+</span>
              <span class="stat-label">Technologies</span>
            </div>
          </div>
          <div class="hero-buttons">
            <a href="#contact" class="btn btn-primary">Get In Touch</a>
            <a href="#projects" class="btn btn-secondary">View Projects</a>
          </div>
          <div class="hero-links">
            <a [href]="profile.linkedin" target="_blank" class="social-link" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a [href]="profile.github" target="_blank" class="social-link" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="hero-visual" @fadeInDown>
          <div class="code-window">
            <div class="window-header">
              <div class="window-buttons">
                <span class="btn-close"></span>
                <span class="btn-minimize"></span>
                <span class="btn-maximize"></span>
              </div>
              <span class="window-title">developer.cs</span>
            </div>
            <div class="window-content">
              <pre><code><span class="keyword">public class</span> <span class="class-name">Developer</span>
&#123;
    <span class="keyword">public string</span> Name => <span class="string">"{{ profile.name }}"</span>;
    <span class="keyword">public string</span> Role => <span class="string">"{{ profile.currentRole }}"</span>;
    <span class="keyword">public string[]</span> Skills => <span class="keyword">new</span>[]
    &#123;
        <span class="string">".NET Core"</span>, <span class="string">"Angular"</span>, <span class="string">"SQL Server"</span>
    &#125;;
    
    <span class="keyword">public void</span> <span class="method">BuildEnterpriseSolutions</span>()
    &#123;
        <span class="comment">// Secure, scalable, government-grade</span>
        Console.WriteLine(<span class="string">"🚀 Delivering Excellence"</span>);
    &#125;
&#125;</code></pre>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 120px 2rem 4rem;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
      top: -250px;
      right: -250px;
      animation: pulse 4s ease-in-out infinite;
    }

    .hero::after {
      content: '';
      position: absolute;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
      bottom: -200px;
      left: -200px;
      animation: pulse 4s ease-in-out infinite 2s;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.1); opacity: 0.8; }
    }

    .hero-content {
      max-width: 1400px;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 800;
      color: white;
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .gradient-text {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.8rem;
      color: #94a3b8;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }

    .hero-description {
      font-size: 1.1rem;
      color: #cbd5e1;
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    .hero-stats {
      display: flex;
      gap: 2rem;
      margin-bottom: 2.5rem;
      align-items: center;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .stat-label {
      font-size: 0.9rem;
      color: #94a3b8;
    }

    .stat-divider {
      width: 2px;
      height: 40px;
      background: linear-gradient(180deg, transparent, #475569, transparent);
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .btn {
      padding: 0.875rem 2rem;
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 1rem;
      display: inline-block;
    }

    .btn-primary {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
    }

    .btn-secondary {
      background: transparent;
      border: 2px solid #3b82f6;
      color: #3b82f6;
    }

    .btn-secondary:hover {
      background: rgba(59, 130, 246, 0.1);
      transform: translateY(-2px);
    }

    .hero-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #94a3b8;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      transform: translateY(-3px);
    }

    .hero-visual {
      position: relative;
    }

    .code-window {
      background: #1e293b;
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
      overflow: hidden;
    }

    .window-header {
      background: #0f172a;
      padding: 0.75rem 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .window-buttons {
      display: flex;
      gap: 0.5rem;
    }

    .window-buttons span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    .btn-close { background: #ef4444; }
    .btn-minimize { background: #f59e0b; }
    .btn-maximize { background: #10b981; }

    .window-title {
      color: #94a3b8;
      font-size: 0.875rem;
    }

    .window-content {
      padding: 1.5rem;
      font-family: 'Courier New', monospace;
      font-size: 0.95rem;
      line-height: 1.8;
      color: #cbd5e1;
      overflow-x: auto;
    }

    .keyword { color: #8b5cf6; font-weight: 600; }
    .class-name { color: #3b82f6; font-weight: 600; }
    .string { color: #10b981; }
    .method { color: #f59e0b; }
    .comment { color: #64748b; font-style: italic; }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
    }

    .scroll-arrow {
      width: 24px;
      height: 40px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      position: relative;
    }

    .scroll-arrow::before {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      background: white;
      border-radius: 50%;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      animation: scroll 2s ease-in-out infinite;
    }

    @keyframes scroll {
      0% { top: 8px; opacity: 1; }
      100% { top: 24px; opacity: 0; }
    }

    @media (max-width: 1024px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 768px) {
      .hero {
        padding: 100px 1.5rem 3rem;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1.2rem;
      }

      .hero-buttons {
        flex-direction: column;
      }

      .hero-stats {
        gap: 1rem;
      }

      .stat-number {
        font-size: 1.5rem;
      }
    }
  `]
})
export class HeroComponent implements OnInit {
  profile!: Profile;

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.profile = this.portfolioData.getProfile();
  }
}
